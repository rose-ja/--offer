Function.prototype.myBind = function (context, ...args) {
  const fn = this; // 原函数

  function bound(...rest) {
    if (new.target) {
      return new fn(...args, ...rest);
    }
    return fn.apply(context, [...args, ...rest]);
  }

  if (fn.prototype) bound.prototype = Object.create(fn.prototype);

  return bound;
};
