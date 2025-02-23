import axios from "axios";
import { UserLoginType } from ".";

const LOGIN_URL = "http://localhost:2200/api/auth/login";

export async function loginUser(user: Partial<UserLoginType>) {
  const result = await axios.post(LOGIN_URL, user);
  return result.data;
}
