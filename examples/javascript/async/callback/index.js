// callback
console.log("Script start");
function getTradeData(callbackFn) {
  console.log(typeof callbackFn);
  setTimeout(() => {
    callbackFn([
      { value: 101, time: "2025-02-02" },
      { value: 102, time: "2025-02-02" },
      { value: 103, time: "2025-02-02" },
    ]); //stringMessageResult
  }, 5000);
  return 1;
}

getTradeData(function (data) {
  console.log(data.map((item) => item.value));
  // logic for the data returned.
});
getTradeData(function (data) {
  console.log(data);
});
getTradeData(function (data) {
  console.log(data);
});
getTradeData(function (data) {
  console.log(data);
});
// const result = getTradeData();
// console.log(result);
console.log("Script end");
