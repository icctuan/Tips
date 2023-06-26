// 阿里云上传组件，自定义上传实现

import React from "react";
import { Upload, UploadProps, message } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import { reqAutograph } from "./api";
import useControlledState from "./useControlledState";

interface OSSDataType {
  key: string;
  policy: string;
  OSSAccessKeyId: string;
  signature: string;
  success_action_status: string;
  file: File;
}

interface AliyunOSSUploadProps {
  /** 自定义子元素 */
  children?: React.ReactNode;
  /** 文件List */
  value?: UploadFile<any>[];
  /** 上传成功回调 返回 List */
  onFileListChange?: (fileList: UploadFile<any>[]) => void;
  /** 上传中的loading */
  onUploading?: (uploading: boolean, percent?: number) => void;
}

const AliyunOSSUpload: React.FC<UploadProps & AliyunOSSUploadProps> = (
  props
) => {
  const {
    value,
    beforeUpload: beforeUploadProp,
    children,
    onFileListChange,
    onUploading,
    ...rest
  } = props;

  const [fileList, setFileList] = useControlledState<UploadFile[]>([], {
    value: value || undefined,
    onChange: onFileListChange,
  });

  /**上传文件改变时的回调 */
  const handleChange: UploadProps["onChange"] = ({ fileList }) => {
    setFileList([...fileList]);
  };

  /** 上传文件之前的钩子，参数为上传的文件，检查文件大小 */
  const beforeUpload: UploadProps["beforeUpload"] = async (file, fileList) => {
    // 限制2G大小
    const uploadBool = file.size <= 2 * 1024 * 1024 * 1024;
    if (!uploadBool) {
      message.error("素材大小不能超过50M！");
      return Upload.LIST_IGNORE;
    }

    // 处理缩略图丢失的问题：
    const reader = new window.FileReader();
    reader.readAsDataURL(file); // 将file对象转为base64
    reader.onloadend = () => {
      file.thumbUrl = reader.result; // 赋值给thumbUrl属性供组件读取
    };

    beforeUploadProp?.(file, fileList);

    return file;
  };

  /**
   * 覆盖默认的上传行为，自定义上传实现
   * @see https://github.com/react-component/upload/blob/master/docs/examples/customRequest.tsx
   */
  const customRequest: UploadProps["customRequest"] = async (prop) => {
    const { onError, onSuccess } = prop;
    const resultList: { file: File; auth: Promise<any> }[] = [];
    const uploadList: Promise<any>[] = [];
    const file = prop.file as File;

    if (file) {
      const _file = file.name.split(".");
      const params = {
        dir: "ads-desk-html",
        fileName: `nrfile${Date.now()}${Math.ceil(Math.random() * 10000)}`,
        suffix: _file[1],
      };

      resultList.push({
        file,
        auth: reqAutograph(params),
      });
    }

    onUploading?.(true);
    try {
      // 获取签名
      const resList = await Promise.all(resultList.map((item) => item.auth));

      for (let i = 0; i < resList.length; i++) {
        if (resList[i]?.result) {
          const result = resList[i].result;

          const params: OSSDataType = {
            OSSAccessKeyId: result.accessid,
            policy: result.policy,
            signature: result.signature,
            key: result.dir,
            success_action_status: "200",
            file: resultList[i].file,
          };

          /**
           * 使用 FormData() 构造函数时，浏览器会自动识别并添加请求头 "Content-Type: multipart/form-data",
           * 且参数依旧是表单提交时那种键值对，因此不需要开发者手动设置 Content-Type
           * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch#%E4%B8%8A%E4%BC%A0%E6%96%87%E4%BB%B6
           */
          const formData = new FormData();
          Object.keys(params).forEach((key) => {
            formData.append(key, params[key as keyof OSSDataType]);
          });

          uploadList.push(
            fetch(result.host, {
              body: formData,
              method: "POST",
            })
          );
        }
      }

      // 上传阿里云
      const uploadResultList = await Promise.all(uploadList);
      uploadResultList.forEach((uploadRes, i) => {
        if (uploadRes.status === 200) {
          const item = resList[i]?.result;
          onSuccess?.({
            host: item.host,
            dir: item.dir,
            fileName: resultList[i].file.name,
            url: item.host + item.dir,
          });
        }
      });
      onUploading?.(false);
    } catch (err: any) {
      onError?.(err);
      onUploading?.(false);
    }

    return {
      abort() {
        console.log("upload progress is aborted.🥶");
      },
    };
  };

  /** Upload组件属性 */
  const uploadProps: UploadProps = {
    name: "file",
    multiple: false,
    fileList,
    onChange: handleChange,
    beforeUpload,
    customRequest,
    ...rest,
  };

  return <Upload {...uploadProps}>{children}</Upload>;
};
export default React.memo(AliyunOSSUpload);
