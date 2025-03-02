import { CircularProgress } from "@mui/material";
import { useGet } from "../../../hooks/useGet";
import { useContext } from "react";
import { SettingsContext } from "../../../context";

export default function PostsPage() {
  const { isLocalTime, postsTheme } = useContext(SettingsContext);

  const { data, loading, error } = useGet(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const adaptedDate = adaptData(data);

  return (
    <div>
      <h1>Posts {isLocalTime.toString()}</h1>

      {loading ? <CircularProgress /> : null}
      {error ? <span style={{ color: "red" }}>{error} </span> : null}
      <div>
        {Array.isArray(data) &&
          adaptedDate?.map((item) => {
            return (
              <div
                style={{ border: "1px solid black", background: postsTheme }}
              >
                <h3>{item.description} </h3>
                <h4>
                  {isLocalTime
                    ? new Date().toLocaleString()
                    : new Date().toISOString()}{" "}
                </h4>
              </div>
            );
          })}
      </div>
    </div>
  );
}

function adaptData(arr: Array<{ title: string; id: number; body: string }>) {
  return arr.map((item) => {
    return { description: item.id + " " + item.title + " " + item.body };
  });
}

function adaptDataFromServerToClient(
  data: Array<{ title: string; id: number; body: string }>
) {
  return data.map((item) => {
    return { description: item.id + " => " + item.title + " " + item.body };
  });
}
