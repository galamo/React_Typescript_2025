import { Button, Switch } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDocumentTitle } from "../countries-page/hooks/useDocumentTitle";
import { useImageLoaded } from "../countries-page/hooks/useImageLoaded";
import { SettingsContext } from "../../../context";
import { ACTIONS } from "../../../context/settingProvider";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setReportPL } from "../../../store/settingsSlice";

const SETTINGS_URL = "http://localhost:2200/api/settings";

export default function SettingsPage() {
  const [userName, setuserName] = useState("");
  const navigate = useNavigate();
  useDocumentTitle(`Settings: ${userName}`);
  const reduxDispatch = useAppDispatch();
  const isReportsAvailable = useAppSelector(
    (state) => state.settings.reportsAvailable
  );
  const context = useContext(SettingsContext);
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
      <div
        style={{ marginTop: "60px", display: "flex", flexDirection: "column" }}
      >
        <h1> Settings</h1>
        <h2> Hello {userName} </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h3> Local Time? </h3>
          <Switch
            checked={context.isLocalTime}
            onChange={() => {
              context.dispatch({ type: ACTIONS.SET_IS_LOCAL_TIME });
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h3> Posts Theme </h3>
          <input
            type="text"
            value={context.postsTheme}
            onChange={(event) => {
              context.dispatch({
                type: ACTIONS.SET_POSTS_THEME,
                payload: event.target.value,
              });
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h3> Pretty numbers </h3>
          <Switch
            checked={context.isPrettyNumbers}
            onChange={() => {
              context.dispatch({ type: ACTIONS.SET_IS_PRETTY_NUMBERS });
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h3> Report PL </h3>
          <Switch
            checked={isReportsAvailable}
            onChange={() => {
              reduxDispatch(setReportPL());
            }}
          />
        </div>

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
