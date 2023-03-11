let num = 0;
const clickBtn = () => {
  let number = num++;
  displayCountNumber(number);
};

const displayCountNumber = (count) => {
  //console.log(count);
  //let number = count++;
  let value = (document.getElementById("count").innerText = count);
  //console.log(value);
  localStorage.setItem("count", value);
};

const getCount = () => {
  //const save = clickBtn();
  let result = localStorage.getItem("count");
  console.log(result);
  displayCountNumber(result);
  //document.getElementById("count").innerText = result;
  //clickBtn(result);
};
getCount();
