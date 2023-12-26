let searchFetch = document.getElementById("fetching-api");
// let delayInput = document.getElementById("delay-entry").value;
let searchInput = document.getElementById("search");
let count = 0;
const clickFunc = () => {
  count += 1;
  searchFetch.innerText = `Fetching Data : ${count}`;
  // console.log(delayInput);
  // console.log(e.target.value);
};

function debounceing(func) {
  let timeout;
  return function (args) {
    const inputValue = document.getElementById("delay-entry").value;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(args);
    }, inputValue);
  };
}

const starter = debounceing(clickFunc);
// const processInput = (event) => {
//   if (event.key === "Enter") {
//     console.log("You entered:", delayInput);
//   } else {
//     console.log("You entered:", delayInput);
//   }
// };

function processInput() {
  const inputValue = document.getElementById("delay-entry").value;
  return inputValue;
  // console.log("You entered:", inputValue);
}

searchInput.addEventListener("change", starter);
searchInput.addEventListener("keyup", starter);

// onkeyup = "if (event.key === 'Enter') processInput()";
