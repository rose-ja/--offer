/**
 * 深拷贝，嵌套对象
 * @param {*} obj
 * @param {*} hash
 * @returns
 */
function deepClone(obj, hash = new WeakMap()) {
  if (typeof obj !== 'object' || obj === null) return obj;

  // 特殊对象
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
  if (obj instanceof Map) {
    const map = new Map();
    hash.set(obj, map);
    obj.forEach((value, key) => map.set(deepClone(key), deepClone(value)));
    return map;
  }
  if (obj instanceof Set) {
    const set = new Set();
    hash.set(obj, set);
    obj.forEach((value) => set.add(deepClone(value)));
    return set;
  }

  // 循环引用：set 的值必须是 target 本身
  if (hash.has(obj)) return hash.get(obj);

  const target = Array.isArray(obj)
    ? []
    : Object.create(Object.getPrototypeOf(obj));
  hash.set(obj, target); // ← 关键：key=原对象，value=克隆目标

  Reflect.ownKeys(obj).forEach((key) => {
    target[key] = deepClone(obj[key], hash);
  });

  return target;
}
