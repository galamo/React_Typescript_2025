import { Button, CircularProgress, TextField } from "@mui/material";
import { useState } from "react";
import css from "./style.module.css";
import { z } from "zod";
import Swal from "sweetalert2";
const LOGIN_URL = "http://localhost:2200/api/auth/register";

const LoginSchema = z.object({
  password: z.string().min(3),
  userName: z.string().email().max(200),
});

export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function loginAction() {}

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
              <Button
                onClick={() => {
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
                  if (result.success) loginAction();
                }}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// /auth/register
// /auth/login
