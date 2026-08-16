function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('promises must be an array'));
    }
    if (promises.length === 0) return resolve([]);

    const results = new Array(promises.length);
    let count = 0;
    let settled = false;

    promises.forEach((promises, index) => {
      Promise.resolve(promise).then(
        (value) => {
          if (settled) return;
          results[index] = value;
          count++;
          if (count === promises.length) {
            settled = true;
            resolve(results);
          }
        },
        (error) => {
          if (settled) return;
          settled = true;
          reject(error);
        },
      );
    });
  });
}
