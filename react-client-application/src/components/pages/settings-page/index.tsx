import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDocumentTitle } from "../countries-page/hooks/useDocumentTitle";
import { useImageLoaded } from "../countries-page/hooks/useImageLoaded";

const SETTINGS_URL = "http://localhost:2200/api/settings";

export default function SettingsPage() {
  const [userName, setuserName] = useState("");
  const navigate = useNavigate();
  useDocumentTitle(`Settings: ${userName}`);

  const [image] = useImageLoaded(
    "https://img.uxcel.com/practices/describe-settings-clearly-1652784157844/a-1661429767314-2x.jpg"
  );

  useEffect(() => {
    console.log("SettingsPage route loaded");
    async function getSettings() {
      try {
        await axios.get(SETTINGS_URL, {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        });
      } catch {
        navigate("/auth/login");
      }
    }
    getSettings();
  }, [navigate]);

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
        <img src={image} height={500} width={500} />
        <input type="text" value={userName} />
        <Button
          onClick={() => {
            setuserName("Gal");
          }}
        >
          Set User
        </Button>
      </div>
    </div>
  );
}
