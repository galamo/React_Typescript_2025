import { Button } from "@mui/material";
import { useState } from "react";
export default function SettingsPage() {
  const [userName, setuserName] = useState("");
  return (
    <div
      style={{
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1> Settings</h1>
        <h2> Hello {userName} </h2>
        <input type="text" value={userName} />
        <Button
          onClick={() => {
            setuserName("Gal");
          }}
        >
          {" "}
          Set User{" "}
        </Button>
      </div>
    </div>
  );
}
