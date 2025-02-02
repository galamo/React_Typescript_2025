// Promise
console.log("Script start");
function getTradeData(coin) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (coin === "BTC") {
        resolve([
          { value: 101, time: "2025-02-02" },
          { value: 102, time: "2025-02-02" },
          { value: 103, time: "2025-02-02" },
        ]);
      } else {
        reject("Coin is not exist!, supporting only BTC");
      }
    }, 4500);
  });
}

getTradeData("BTC")
  .then((d) => {
    console.log(d);
    getTradeData("BTC")
      .then((d) => {
        console.log(d);
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });

getTradeData("ETH")
  .then(function (d) {
    console.log(d);
  })
  .catch(function (err) {
    console.log(err);
  });

getTradeData("SOL")
  .then(function (d) {
    console.log(d);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Script end");
