import { Navigate, useParams } from "react-router";

export default function CountryPage() {
  const params = useParams();

  if (params.code?.length !== 3) {
    return <Navigate to="/notfound" />;
  }
  return (
    <div>
      <h1> COUNTRY: {params.code}</h1>
    </div>
  );
}
