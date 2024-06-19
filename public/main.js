const fetchSearch = document.querySelector(".fetching-api");
const debounceSearch = document.querySelector(".debounce-search");
const throttleSearch = document.querySelector(".throttle-search");
const title = document.querySelector(".title");
let count = 0;

function toggleBtn() {
  if (title.innerText === "Debouncing") {
    title.innerText = "Throttling";
    throttleSearch.style.display = "block";
    debounceSearch.style.display = "none";
    debounceSearch.value = "";
  } else {
    title.innerText = "Debouncing";
    throttleSearch.style.display = "none";
    debounceSearch.style.display = "block";
    throttleSearch.value = "";
  }
  count = 0;
  fetchSearch.innerText = `Fetching Data : ${count}`;
}

const countFunc = () => {
  count += 1;
  fetchSearch.innerText = `Fetching Data : ${count}`;
};

function debounceing(func) {
  let timeout;
  return function (...args) {
    const delayValue = document.getElementById("delay-entry").value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, delayValue);
  };
}

function throttle(func) {
  let shouldWait = false;
  return (...args) => {
    const delayValue = document.getElementById("delay-entry").value;
    if (shouldWait) return;

    func(...args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, delayValue);
  };
}

const starterDebounce = debounceing(countFunc);
const starterThrottle = throttle(countFunc);

debounceSearch.addEventListener("keyup", starterDebounce);
throttleSearch.addEventListener("keyup", starterThrottle);
