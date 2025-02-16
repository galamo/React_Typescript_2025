import axios from "axios";
import { RegisterUserType } from ".";

const REGISTER_URL = "http://localhost:2200/api/auth/register";

export async function registerUser(user: RegisterUserType) {
  const result = await axios.post(REGISTER_URL, user);
  return result.data;
}
