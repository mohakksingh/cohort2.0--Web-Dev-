import { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    email: "",
    name: "",
  });
  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((res) => {
        setLoading(false);
        setData(res.data);
        return res; // Add this line to return the res object
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        {data.email}
        {data.name}
      </div>
    </>
  );
}

export default App;
