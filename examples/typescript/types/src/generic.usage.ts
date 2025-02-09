import axios from "axios";
const url = "https://randomuser.me/api/";
const dummyUser = {
  gender: "female",
  name: {
    title: "Miss",
    first: "Leanne",
    last: "Bouchard",
  },
  location: {
    street: {
      number: 4462,
      name: "Vimy St",
    },
    city: "Lafontaine",
    state: "Manitoba",
    country: "Canada",
    postcode: "P6H 7L5",
    coordinates: {
      latitude: "-71.5379",
      longitude: "32.7955",
    },
    timezone: {
      offset: "-4:00",
      description: "Atlantic Time (Canada), Caracas, La Paz",
    },
  },
  email: "leanne.bouchard@example.com",
  login: {
    uuid: "b1547f83-d16c-45b3-96b6-890e04fdfa51",
    username: "greenleopard633",
    password: "raiders",
    salt: "gAXuRpMA",
    md5: "c1eb786c7066fde191378ccb8b134740",
    sha1: "af6d62ce20431f91f6f99dd2decc6a9db5aec1e4",
    sha256: "3293bb718858f7a36bee6b8405f904ed1e100be6a0beafa8038ff051d264d57d",
  },
  dob: {
    date: "1946-04-19T08:03:47.570Z",
    age: 78,
  },
  registered: {
    date: "2020-12-07T13:15:40.133Z",
    age: 4,
  },
  phone: "H98 Z63-1044",
  cell: "Z29 A09-3724",
  id: {
    name: "SIN",
    value: "478537483",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/5.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/5.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/5.jpg",
  },
  nat: "CA",
};

type User = typeof dummyUser;
type UserResponse = { results: Array<User> };

async function getUsers(): Promise<UserResponse | undefined> {
  try {
    const result = await axios.get<UserResponse>(url);
    return result.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

type Country = { name: string };

async function getCountries(): Promise<Country | undefined> {
  try {
    const result = await axios.get<Country>(url);
    return result.data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function initMainFunction() {
  const users = await getUsers();
  console.log(users?.results[0].email);
}

async function getDataFromApi<T>() {
  const result = await axios.get<T>(url);
  return result;
}


