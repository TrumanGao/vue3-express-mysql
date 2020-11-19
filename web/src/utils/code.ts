// 请求状态码
export default {
  /* 成功状态码 */
  SUCCESS: 10000, // (10000, "成功"),

  /* 参数错误：10001-19999 */
  PARAM_IS_INVALID: 10001, // (10001, "参数无效"),
  PARAM_IS_BLANK: 10002, // (10002, "参数为空"),
  PARAM_TYPE_BIND_ERROR: 10003, // (10003, "参数类型错误"),
  PARAM_NOT_COMPLETE: 10004, // (10004, "参数缺失"),

  /* 用户错误：20001-29999*/
  USER_NOT_LOGGED_IN: 20001, // (20001, "用户未登录"),
  USER_LOGIN_ERROR: 20002, // (20002, "账号不存在或密码错误"),
  USER_ACCOUNT_FORBIDDEN: 20003, // (20003, "账号已被禁用"),
  USER_NOT_EXIST: 20004, // (20004, "用户不存在"),
  USER_HAS_EXISTED: 20005, // (20005, "用户已存在"),

  /* 权限错误：30001-39999 */
  PERMISSION_NO_ACCESS: 30001, // (30001, "您没有权限访问"), token 缺失
  PLEASE_SUBMIT_ANSWER_FIRST: 30002, // (30002, "请先提交答案"),

  /* 业务错误 40001-49999 */
  ANSER_ALREADY_START: 40001, // (40001, "请勿重复作答"),

  /* 接口错误：60001-69999 */
  INTERFACE_INNER_INVOKE_ERROR: 60001, // (60001, "内部系统接口调用异常"),
  INTERFACE_OUTTER_INVOKE_ERROR: 60002, // (60002, "外部系统接口调用异常"),
  INTERFACE_FORBID_VISIT: 60003, // (60003, "该接口禁止访问"),
  INTERFACE_ADDRESS_INVALID: 60004, // (60004, "接口地址无效"),
  INTERFACE_REQUEST_TIMEOUT: 60005, // (60005, "接口请求超时"),
  INTERFACE_EXCEED_LOAD: 60006, // (60006, "接口负载过高"),
  INTERFACE_TALKWORK_ERROR: 60007, // (60007, "话术变量替换失败"),
  INTERFACE_SMSID_ERROR: 60008, // (60008, "短信发送失败"),
  INTERFACE_PROVIDER_ERROR: 60009, // (60009, "服务提供方接口内部异常"),

  /* 系统错误：90001-99999 */
  SYSTEM_INNER_BUSY: 90001, // (90001, "系统繁忙，请稍后重试"),
  SYSTEM_INNER_ERROR: 99999 // (99999, "系统内部异常");
};
