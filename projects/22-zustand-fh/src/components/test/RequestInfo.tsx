import { useEffect, useState } from "react";
import api from "../../api/api";

export const RequestInfo = () => {
  const [requestInfo, setRequestInfo] = useState<unknown>();
  useEffect(() => {
    api
      .get("/auth/private")
      .then((res) => {
        setRequestInfo(res.request);
      })
      .catch((err) => {
        setRequestInfo(err.request);
      });
  }, []);
  return (
    <>
      <h2>Request Info</h2>
      <pre>{JSON.stringify(requestInfo, null, 2)}</pre>
    </>
  );
};
