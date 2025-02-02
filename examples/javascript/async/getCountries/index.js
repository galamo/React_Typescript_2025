// fetch - promise
// http - promise
// https://restcountries.com/v3.1/all
//  1. function async getCountries
//  2. print all countries names

async function getCountries() {
  const result = await fetch("https://restcountries.com/v3.1/all");
  const data = await result.json();
  return data;
}

async function init() {
  try {
    const result = await getCountries();
    console.log(result.map((item) => item?.name?.common));
  } catch (error) {
    console.log(error);
  }
}

init();

function metricUI() {
  console.log("send to server");
  fetch("http://metric.ui.server:443/user-error", {
    method: "post",
    body: { error: "Snir operation failed" },
  });
}
metricUI();


