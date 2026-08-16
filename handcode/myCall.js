Function.prototype.myCall = function (context, ...args) {
  context = context ?? (typeof window !== 'undefined' ? window : globalThis);

  const key = Symbol('fn');
  context[key] = this; // this 是调用他的函数

  const result = context[key](...args);
  delete context[key];
  return result;
};
