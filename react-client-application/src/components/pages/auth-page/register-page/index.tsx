import { Button, CircularProgress, TextField } from "@mui/material";
import { useCallback, useState } from "react";
import css from "./style.module.css";
import { z } from "zod";
import Swal from "sweetalert2";
import { registerUser } from "./service";
import { useNavigate } from "react-router";

const RegistrationSchema = z.object({
  password: z.string().min(3),
  userName: z.string().email().max(200),
  phone: z.string().min(10).max(10),
});
export type RegisterUserType = z.infer<typeof RegistrationSchema>;
export default function RegistrationPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // function handlePhone(event: React.ChangeEvent<HTMLInputElement>) {
  //   setPhone(event.target.value);
  // }
  const handlePhone = useCallback(function (
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setPhone(event.target.value);
  },
  []);

  function handleUserName(event: React.ChangeEvent<HTMLInputElement>) {
    setUserName(event.target.value);
  }

  function handlePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  async function registerAction() {
    try {
      setIsLoading(true);
      const result = await registerUser({ userName, phone, password });
      Swal.fire({
        title: result.message,
        icon: "success",
      });
      navigate("/auth/login");
    } catch (ex) {
      console.log(ex);
      Swal.fire({
        title: `Something went wrong!`,
        icon: "error",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={css.container}>
      <div className={css.registerContainer}>
        <div className={css.headerCenter}>
          <h1>Registration</h1>
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="phone"
            variant="outlined"
            onChange={handlePhone}
            value={phone}
          />
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
                  const result = RegistrationSchema.safeParse({
                    userName,
                    password,
                    phone,
                  });
                  if (!result.success) {
                    Swal.fire({
                      title: `${result.error?.errors[0].message}`,
                      icon: "error",
                    });
                  }
                  if (result.success) registerAction();
                }}
              >
                Register
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
