let count = 0;
const clickFunc = () => {
  count += 1;
  console.log("Debounce click" + " " + count);
};

function debounceing(func) {
  let timeout;
  let count = 0;
  return function (args) {
    count += 1;
    console.log("nonDebounce click" + " " + count);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, 500);
  };
}

const starter = debounceing(clickFunc);
