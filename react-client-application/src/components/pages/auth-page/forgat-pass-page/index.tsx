import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import css from "./style.module.css";

export default function ForgatPasswordPage() {
  const userNameRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div className={css.container}>
        <div className={css.registerContainer}>
          <div className={css.headerCenter}>
            <h1>Enter your email for password recovery</h1>
          </div>
          <div>
            <TextField
              inputRef={userNameRef}
              id="outlined-basic"
              label="username"
              variant="outlined"
            />
          </div>
          <div>
            <div>
              <Button onClick={() => {}}>send pass</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// /auth/register
// /auth/login
