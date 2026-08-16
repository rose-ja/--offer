/**
 * 防抖：高频触发时，只执行最后一次
 * 搜索框，窗口resize
 * @param {*} fn
 * @param {*} wait
 * @param {*} immediate
 */
function debounce(fn, wait = 300, immediate = false) {
  const timer = null;
  let result;

  function debounced(...args) {
    const context = this; // 谁调用了onSearch，this就指向谁，fn内部的this也指向谁，否则fn内部this是undefined或者window
    if (timer) clearTimeout(timer);

    if (immediate) {
      const callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) result = fn.apply(context, args);
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }

    return result;
  }

  return debounced;
}

// 应用场景：搜索框
const onSearch = debounce(
  (keyword) => {
    this.filterProductList(keyword); // 原本几千条数据每次按键都过滤
  },
  300,
  true,
);
