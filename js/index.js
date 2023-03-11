let num = 0;
const clickBtn = (num) => {
  let number = num++;
  displayCountNumber(number);
};

const displayCountNumber = (count) => {
  document.getElementById("count").innerText = count;
  localStorage.setItem("count", count);
};

const getCount = () => {
  let result = localStorage.getItem("count", count);
  displayCountNumber(result);
};
getCount();
