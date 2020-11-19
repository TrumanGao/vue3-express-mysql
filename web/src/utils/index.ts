/**
 * Created by TrumanGao on 2020/11/18.
 */

/**
 * 根据键名读取本地存储
 * @params key 本地存储的键名
 */
export function getStorage(key: string) {
  if (!localStorage || !localStorage.getItem) {
    // 不支持本地存储
    return false;
  }

  let storage = localStorage.getItem(key);
  if (storage) {
    try {
      return JSON.parse(storage);
    } catch (error) {
      return storage;
    }
  } else {
    return "";
  }
}

/**
 * 根据键名设置本地存储
 * @key 本地存储的键名
 * @data 本地存储的数据
 */
export function setStorage(key: string, data: any = ""): void {
  if (!localStorage || !localStorage.setItem) {
    // 不支持本地存储
    return;
  }
  if (checkDataType(data) === "String") {
    localStorage.setItem(key, data);
  } else {
    localStorage.setItem(key, JSON.stringify(data));
  }
}

// 删除对象中的空值键，用于过滤参数等
export function filterEmptyKey(obj: object = {}): object {
  interface paramsObject {
    [key: string]: any;
  }
  let tempObj: paramsObject = {};
  Object.entries(obj).map((item: string[]) => {
    if (item[1] || item[1].toString() === "0") {
      tempObj[item[0]] = item[1];
    }
  });
  return tempObj;
}

/**  返回类型字符串
 * @params data 任意类型数据
 * @return 字符串 String Boolean Number Object Error 等
 */
export function checkDataType(data: any = ""): string {
  let typeStr: string = Object.prototype.toString.call(data);
  return typeStr.slice(8, typeStr.length - 1);
}

// 对象转url参数
export function obj2url(obj: { [key: string]: any } = {}): string {
  let url: string = "";
  Object.keys(obj).map((key: string) => {
    url += `${key}=${encodeURIComponent(obj[key])}&`;
  });
  return url.slice(0, url.length - 1);
}

// 校验字符是不是手机号 / 验证码（六位数字）
// @val 校验的字符串
// @type 校验规则类型
export function checkValue(
  type: string = "phone",
  val: string | number = ""
): boolean {
  let bool: boolean;
  val = val.toString();
  switch (type) {
    case "phone":
      bool = /^1[0-9]{10}$/.test(val);
      break;
    case "verification":
      bool = /^[0-9]{6}$/.test(val);
      break;
    default:
      bool = false;
      break;
  }
  return bool;
}
