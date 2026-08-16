Function.prototype.myApply = function (context, args) {
  context = context ?? (typeof window !== 'undefined' ? window : globalThis);

  const key = Symbol('fn');
  context[key] = this; // this 是调用他的函数

  let result;
  if (args == null) {
    result = context[key](); // 无参调用
  } else {
    const argList = Array.isArray(args) ? args : Array.from(args);
    result = context[key](...argList);
  }
  delete context[key];
  return result;
};
