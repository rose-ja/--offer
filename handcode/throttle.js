/**
 * 节流：一段时间内只执行一次
 * 列表滚动\拖拽
 * @param {*} fn
 * @param {*} wait
 * @param {*} options
 */
function throttle(fn, wait = 300, options = {}) {
  let previous = 0;
  let timer = null;
  // leading: 开始时立刻调用  trailing：结束时执行

  function throttled(...args) {
    const context = this;
    const now = Date.now();

    // 第一次调用且 leading = false，跳过首次执行
    if (!previous && options.leading === false) previous = now;

    // 距离上次执行超过 wait 立即执行
    const remaining = wait - (now - previous);
    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      previous = now;
      fn.apply(context, args);
    } else if (!timer && options.trailing !== false) {
      timer = setTimeout(() => {
        previous = options.leading === false ? 0 : Date.now();
        fn.apply(context, args);
      }, remaining);
    }
  }

  return throttled;
}

// 滚动加载：首触发立即 + 尾触发兜底，确保不会漏掉最后一次
const onScroll = throttle(loadMore, 200, { leading: true, trailing: true });
// 只想要开始边缘（如拖拽），去掉尾调用：
const onDrag = throttle(updatePos, 100, { trailing: false });
