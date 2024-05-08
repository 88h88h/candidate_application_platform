import React, { useState, useEffect } from "react";
import FilterSection from "../FilterSection/FilterSection";
import JobSection from "../JobSection/JobSection";

export default function Home() {
  const [jobDataArray, setJobDataArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.weekday.technology/adhoc/getSampleJdJSON",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              limit: 10,
              offset: 0,
            }),
          }
        );

        const data = await response.json();
        setJobDataArray(data.jdList); // Update state with fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <FilterSection jobs={jobDataArray} />
      <JobSection jobs={jobDataArray} />
    </div>
  );
}
