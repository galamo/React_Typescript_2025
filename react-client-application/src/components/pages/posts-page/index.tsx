import { CircularProgress } from "@mui/material";
import { useGet } from "../../../hooks/useGet";

export default function PostsPage() {
  const { data, loading, error } = useGet(
    "https://jsonplaceholder.typicode.com/posts"
  );

  const adaptedDate = adaptData(data);

  return (
    <div>
      <h1>Posts</h1>
      {loading ? <CircularProgress /> : null}
      {error ? <span style={{ color: "red" }}>{error} </span> : null}
      <div>
        {Array.isArray(data) &&
          adaptedDate?.map((item) => {
            return (
              <h3 style={{ border: "1px solid black" }}>{item.description} </h3>
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
