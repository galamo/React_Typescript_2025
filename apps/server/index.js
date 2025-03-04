require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { initDB, getConnection } = require("./db/mysql");
const { getUsersHandler } = require("./users");
var jwt = require("jsonwebtoken");
const axios = require("axios");
const bodyParser = require("body-parser");
NODE_TLS_REJECT_UNAUTHORIZED = 0;
const data = require("./data/index.json");

const mainApp = express();
const app = express.Router();
mainApp.use(cors());
initDB();
mainApp.use("/api", app);

app.use(bodyParser.json());

app.get("/employees", async (req, res, next) => {
  const query = `SELECT * FROM Employees`;
  const [result] = await getConnection().execute(query);
  res.json(result);
});

app.get("/countries-elbit", async (req, res, next) => {
  res.json(data);
});

app.get("/health-check", (req, res, next) => {
  res.json({ message: "Api v2 is ready" });
});
app.get("/users", async (req, res, next) => {
  try {
    const result = await getUsersHandler();
    return res.json({ result });
  } catch (error) {
    return next(error);
  }
});

app.get("/countries-delay", async (req, res, next) => {
  try {
    // const { data } = await axios.get("https://restcountries.com/v3.1/all");
    setTimeout(() => {
      return res.json({ data });
    }, 1000);
  } catch (error) {
    return next(error);
  }
});

app.get("/countries", async (req, res, next) => {
  try {
    // const { data } = await axios.get("https://restcountries.com/v3.1/all");
    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});
let delayName = 0;
app.get("/countries-delay/name/:name", async (req, res, next) => {
  delayName++;

  try {
    console.log(req?.params?.name);
    const result = data.filter((item) => {
      console.log(
        item?.name?.common?.includes(req?.params?.name?.toLowerCase())
      );
      return item?.name?.common
        ?.toLowerCase()
        ?.includes(req?.params?.name?.toLowerCase());
    });
    // const { data } = await axios.get(
    //   `https://restcountries.com/v3.1/name/${req.params.name}`
    // );
    if (delayName % 2 === 0) {
      setTimeout(() => {
        return res.json({ result });
      }, 4000);
    } else {
      return res.json({ result });
    }
  } catch (error) {
    return next(error);
  }
});

app.get("/countries/code/:code", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `https://restcountries.com/v3.1/alpha/${req.params.code}`
    );
    return res.json({ data });
  } catch (error) {
    return next(error);
  }
});
let authUsers = [{ userName: "master", password: "master" }];
app.post("/auth/register", async (req, res, next) => {
  try {
    setTimeout(() => {
      const { userName, password } = req.body;
      console.log("register", userName, password);
      if (!userName || !password) return res.status(400).send();
      const foundOne = authUsers.findIndex((u) => u.userName === userName);
      console.log(foundOne);
      if (foundOne >= 0)
        return res
          .status(400)
          .json({ message: `${userName} user already exist` });
      authUsers.push({ userName, password });
      return res.json({ message: "Registered!" });
    }, 3000);
  } catch (error) {
    return next(error);
  }
});

app.post("/auth/login", async (req, res, next) => {
  try {
    console.log("login");
    const { userName, password } = req.body;
    if (!userName || !password) return res.status(400).send();
    const user = authUsers.find(
      (u) => u.userName === userName && u.password === password
    );
    console.log(user, authUsers);
    if (user) {
      const token = jwt.sign({ userName, role: "viewer" }, "token", {
        expiresIn: "1h",
      });
      setTimeout(() => {
        return res.json({ token });
      }, 2000);
    } else {
      return res.status(401).json({ message: "Unauthorized!" });
    }
  } catch (error) {
    return next(error);
  }
});

app.get("/secure", async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  try {
    console.log("secure");
    jwt.verify(token, "token", function (err, decoded) {
      if (err) {
        return res.status(401).json({ message: "Unauthorized!" });
      } else {
        return res.json({
          secureMessage: "Leader in Cyber Security Solutions",
        });
      }
    });
  } catch (error) {
    return next(error);
  }
});

app.get("/settings", async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  try {
    console.log("secure");
    jwt.verify(token, "token", function (err, decoded) {
      if (err) {
        return res.status(401).json({ message: "Unauthorized!" });
      } else {
        return res.json({
          userSettings: {
            lastPageVisit: "/countries",
            userLastLogin: new Date().toDateString(),
          },
        });
      }
    });
  } catch (error) {
    return next(error);
  }
});

app.get("/teams", (req, res, next) => {
  res.json({
    status: "success",
    data: [
      {
        _id: "629c9c6b5749c4077500eaa8",
        name_en: "Iran",
        name_fa: "ایران",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/125px-Flag_of_Iran.svg.png",
        fifa_code: "IRN",
        iso2: "IR",
        groups: "B",
        id: "6",
      },
      {
        _id: "629c9c6b5749c4077500eaa9",
        name_en: "England",
        name_fa: "انگلستان",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/125px-Flag_of_England.svg.png",
        fifa_code: "ENG",
        iso2: "ENG",
        groups: "B",
        id: "5",
      },
      {
        _id: "629c9c6b5749c4077500eaaa",
        name_en: "United States",
        name_fa: "آمریکا",
        flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/125px-Flag_of_the_United_States.svg.png",
        fifa_code: "USA",
        iso2: "US",
        groups: "B",
        id: "7",
      },
      {
        _id: "629c9c6b5749c4077500eaab",
        name_en: "Qatar",
        name_fa: "قطر",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Qatar.svg/125px-Flag_of_Qatar.svg.png",
        fifa_code: "QAT",
        iso2: "QA",
        groups: "A",
        id: "1",
      },
      {
        _id: "629c9c6b5749c4077500eaac",
        name_en: "Ecuador",
        name_fa: "اکوادور",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Flag_of_Ecuador.svg/125px-Flag_of_Ecuador.svg.png",
        fifa_code: "ECU",
        iso2: "Ec",
        groups: "A",
        id: "2",
      },
      {
        _id: "629c9c6b5749c4077500eaad",
        name_en: "Senegal",
        name_fa: "سنگال",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Flag_of_Senegal.svg/125px-Flag_of_Senegal.svg.png",
        fifa_code: "SN",
        iso2: "SEN",
        groups: "A",
        id: "3",
      },
      {
        _id: "629c9c6b5749c4077500eaae",
        name_en: "Nederlands",
        name_fa: "هلند",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/125px-Flag_of_the_Netherlands.svg.png",
        fifa_code: "NL",
        iso2: "NED",
        groups: "A",
        id: "4",
      },
      {
        _id: "629c9c6b5749c4077500eab0",
        name_en: "Argentina",
        name_fa: "آرژانتین",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/125px-Flag_of_Argentina.svg.png",
        fifa_code: "ARG",
        iso2: "AR",
        groups: "C",
        id: "9",
      },
      {
        _id: "629c9c6b5749c4077500eab1",
        name_en: "Saudi Arabia",
        name_fa: "عربستان",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/125px-Flag_of_Saudi_Arabia.svg.png",
        fifa_code: "KSA",
        iso2: "SA",
        groups: "C",
        id: "10",
      },
      {
        _id: "629c9c6b5749c4077500eab2",
        name_en: "Mexico",
        name_fa: "مکزیک",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/125px-Flag_of_Mexico.svg.png",
        fifa_code: "MEX",
        iso2: "MX",
        groups: "C",
        id: "13",
      },
      {
        _id: "629c9c6b5749c4077500eab3",
        name_en: "Poland",
        name_fa: "لهستان",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/125px-Flag_of_Poland.svg.png",
        fifa_code: "POL",
        iso2: "PL",
        groups: "C",
        id: "14",
      },
      {
        _id: "629c9c6b5749c4077500eab4",
        name_en: "France",
        name_fa: "فرانسه",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/125px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png",
        fifa_code: "FRA",
        iso2: "FR",
        groups: "D",
        id: "15",
      },
      {
        _id: "629c9c6b5749c4077500eab5",
        name_en: "Australia",
        name_fa: "استرالیا",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/125px-Flag_of_Australia_%28converted%29.svg.png",
        fifa_code: "AUS",
        iso2: "AU",
        groups: "D",
        id: "16",
      },
      {
        _id: "629c9c6b5749c4077500eab6",
        name_en: "Denmark",
        name_fa: "دانمارک",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/125px-Flag_of_Denmark.svg.png",
        fifa_code: "DEN",
        iso2: "DK",
        groups: "D",
        id: "11",
      },
      {
        _id: "629c9c6b5749c4077500eab7",
        name_en: "Tunisia",
        name_fa: "تونس",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/125px-Flag_of_Tunisia.svg.png",
        fifa_code: "TUN",
        iso2: "TN",
        groups: "D",
        id: "12",
      },
      {
        _id: "629c9c6b5749c4077500eab8",
        name_en: "Spain",
        name_fa: "اسپانیا",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/125px-Flag_of_Spain.svg.png",
        fifa_code: "ESP",
        iso2: "ES",
        groups: "E",
        id: "21",
      },
      {
        _id: "629c9c6b5749c4077500eab9",
        name_en: "Costa Rica",
        name_fa: "کاستاریکا",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/125px-Flag_of_Costa_Rica_%28state%29.svg.png",
        fifa_code: "CRC",
        iso2: "CR",
        groups: "E",
        id: "22",
      },
      {
        _id: "629c9c6b5749c4077500eaba",
        name_en: "Germany",
        name_fa: "آلمان",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/125px-Flag_of_Germany.svg.png",
        fifa_code: "GER",
        iso2: "DE",
        groups: "E",
        id: "19",
      },
      {
        _id: "629c9c6b5749c4077500eabb",
        name_en: "Japan",
        name_fa: "ژاپن",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/125px-Flag_of_Japan.svg.png",
        fifa_code: "JPN",
        iso2: "JP",
        groups: "E",
        id: "20",
      },
      {
        _id: "629c9c6b5749c4077500eabc",
        name_en: "Belgium",
        name_fa: "بلژیک",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/125px-Flag_of_Belgium.svg.png",
        fifa_code: "BEL",
        iso2: "BE",
        groups: "F",
        id: "23",
      },
      {
        _id: "629c9c6b5749c4077500eabd",
        name_en: "Canada",
        name_fa: "کانادا",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/125px-Flag_of_Canada_%28Pantone%29.svg.png",
        fifa_code: "CAN",
        iso2: "CA",
        groups: "F",
        id: "24",
      },
      {
        _id: "629c9c6b5749c4077500eabe",
        name_en: "Morocco",
        name_fa: "مراکش",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/125px-Flag_of_Morocco.svg.png",
        fifa_code: "MAR",
        iso2: "MA",
        groups: "F",
        id: "17",
      },
      {
        _id: "629c9c6b5749c4077500eabf",
        name_en: "Croatia",
        name_fa: "کرواسی",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/125px-Flag_of_Croatia.svg.png",
        fifa_code: "CRO",
        iso2: "HR",
        groups: "F",
        id: "18",
      },
      {
        _id: "629c9c6b5749c4077500eac0",
        name_en: "Brazil",
        name_fa: "برزیل",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/125px-Flag_of_Brazil.svg.png",
        fifa_code: "BRA",
        iso2: "BR",
        groups: "G",
        id: "25",
      },
      {
        _id: "629c9c6b5749c4077500eac1",
        name_en: "Serbia",
        name_fa: "صربستان",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/125px-Flag_of_Serbia.svg.png",
        fifa_code: "SRB",
        iso2: "RS",
        groups: "G",
        id: "26",
      },
      {
        _id: "629c9c6b5749c4077500eac2",
        name_en: "Switzerland",
        name_fa: "سوئیس",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png",
        fifa_code: "SUI",
        iso2: "CH",
        groups: "G",
        id: "31",
      },
      {
        _id: "629c9c6b5749c4077500eac3",
        name_en: "Cameroon",
        name_fa: "کامرون",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Flag_of_Cameroon.svg/125px-Flag_of_Cameroon.svg.png",
        fifa_code: "CMR",
        iso2: "CM",
        groups: "G",
        id: "32",
      },
      {
        _id: "629c9c6b5749c4077500eac4",
        name_en: "Portugal",
        name_fa: "پرتغال",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/125px-Flag_of_Portugal.svg.png",
        fifa_code: "POR",
        iso2: "PT",
        groups: "H",
        id: "27",
      },
      {
        _id: "629c9c6b5749c4077500eac5",
        name_en: "Ghana",
        name_fa: "غنا",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/125px-Flag_of_Ghana.svg.png",
        fifa_code: "GHA",
        iso2: "GH",
        groups: "H",
        id: "28",
      },
      {
        _id: "629c9c6b5749c4077500eac6",
        name_en: "Uruguay",
        name_fa: "اروگوئه",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/125px-Flag_of_Uruguay.svg.png",
        fifa_code: "URU",
        iso2: "UY",
        groups: "H",
        id: "29",
      },
      {
        _id: "629c9c6b5749c4077500eac7",
        name_en: "South Korea",
        name_fa: "کره جنوبی",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/125px-Flag_of_South_Korea.svg.png",
        fifa_code: "KOR",
        iso2: "KR",
        groups: "H",
        id: "30",
      },
      {
        _id: "631064dab140f1214a8afc83",
        name_en: "Wales",
        name_fa: "ولز",
        flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Flag_of_Wales_%281959%29.svg/125px-Flag_of_Wales_%281959%29.svg.png",
        fifa_code: "WAL",
        iso2: "WLS",
        groups: "B",
        id: "8",
      },
    ],
  });
});

//https://restcountries.com/v3.1/alpha/{code}

mainApp.use((error, req, res, next) => {
  console.log(error);
  res.send("Something went wrong");
});

mainApp.listen(process.env.PORT);
