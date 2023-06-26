/**
 * @description: contentType
 */
export enum ContentTypeEnum {
  // json
  JSON = "application/json;charset=UTF-8",
  // form-data qs
  FORM_URLENCODED = "application/x-www-form-urlencoded;charset=UTF-8",
  // form-data  upload
  FORM_DATA = "multipart/form-data;charset=UTF-8",
}

/** 阿里云上传接口 */
export const reqAutograph = (data: any) => {
  return axios.post({
    url: "",
    data,
    headers: {
      Key: config.OSSKey,
      "content-type": ContentTypeEnum.FORM_URLENCODED,
    },
  });
};
