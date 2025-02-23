import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import css from "./style.module.css";
import { z } from "zod";
import Swal from "sweetalert2";
import { loginUser } from "./service";
import { useNavigate } from "react-router";

const LoginSchema = z.object({
  password: z.string().min(3),
  userName: z.string().email().max(200),
});

export type UserLoginType = z.infer<typeof LoginSchema>;

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function handleLoginAction() {
    const result = LoginSchema.safeParse({
      userName,
      password,
    });
    console.log(result);
    if (!result.success) {
      Swal.fire({
        title: `${result.error?.errors[0].message}`,
        icon: "error",
      });
    }
    if (result.success) {
      try {
        setIsLoading(true);
        const result = await loginUser({ userName, password });
        localStorage.setItem("token", result.token);
        navigate("/countries");
      } catch {
        Swal.fire({
          title: `Something went wrong`,
          icon: "error",
        });
      } finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <div className={css.container}>
      <div className={css.registerContainer}>
        <div className={css.headerCenter}>
          <h1>Login</h1>
        </div>
        <div>
          <TextField
            onChange={handleUserName}
            id="outlined-basic"
            label="username"
            variant="outlined"
            value={userName}
          />
        </div>
        <div>
          <TextField
            onChange={handlePassword}
            id="outlined-basic"
            label="password"
            variant="outlined"
            value={password}
          />
        </div>
        <div>
          {isLoading ? (
            <CircularProgress />
          ) : (
            <div>
              <Button onClick={handleLoginAction}>Login</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// /auth/register
// /auth/login
