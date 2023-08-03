/**
 * 异步任务并发控制执行
 * @param poolLimit 并发数量
 * @param array 异步请求参数数组
 * @param iteratorFn 异步请求函数，参数为array数组项
 * @param allSettled 是否返回Promise.allSettled，默认Promise.all
 * @returns
 */
export async function asyncPool(
  poolLimit: number,
  array: any[],
  iteratorFn: (params: (typeof array)[number]) => Promise<unknown>,
  allSettled?: boolean
) {
  const taskPool: Promise<any>[] = []; // 任务池
  const executing: Promise<any>[] = []; // 执行池

  for (const item of array) {
    /** 创建任务 */
    const task = Promise.resolve().then(() => iteratorFn(item));
    taskPool.push(task);

    // 需要执行的数组总长度大于限制数量poolLimit，进行并发限制
    if (poolLimit <= array.length) {
      // 等请求结束后，再执行then里的回调，把任务从executing执行池中移除
      const exitPool: Promise<any> = task.then(() => {
        executing.splice(executing.indexOf(exitPool), 1);
      });
      executing.push(exitPool);

      // 正在执行的并发请求数量大于限制时，等待当前最快的一个请求完成
      if (executing.length >= poolLimit) {
        await Promise.race(executing);
      }
    }
  }

  return allSettled ? Promise.allSettled(taskPool) : Promise.all(taskPool);
}

// 使用示例：分片上传控制并发
let chunkList: any[] = [],
  retryTimes = 3,
  limit = 4,
  uploadPartFile: (params: (typeof chunkList)[number]) => Promise<any>;

let partPromise = (params: (typeof chunkList)[number]) =>
  new Promise((resolve, reject) => {
    let isRetry = 0;
    const loading = () =>
      uploadPartFile(params)
        .then((res) => {
          // 任何操作
          resolve(res);
        })
        .catch((err) => {
          // 重试
          if (retryTimes && isRetry < retryTimes) {
            isRetry += 1;
            loading();
          } else {
            reject("失败");
          }
        });
    loading();
  });

// 等待所有任务的执行结果
const results = await asyncPool(limit, chunkList, partPromise);
