// Async await
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

async function init(coin) {
  try {
    const result = await getTradeData(coin);
    console.log(result.map((item) => item.value));
  } catch (error) {
    console.log(error);
  }
}

init("BTC");
init("ETH");
init("SOL");

console.log("Script end");
