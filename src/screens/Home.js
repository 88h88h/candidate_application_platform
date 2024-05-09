import React, { useState, useEffect } from "react";
import FilterSection from "../FilterSection/FilterSection";
import JobSection from "../JobSection/JobSection";
import { getSampleJdJSON } from "../assets/sampleJdData";

export default function Home() {
  const [jobDataArray, setJobDataArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataArr = getSampleJdJSON().slice(0, 13);
        console.log(dataArr);
        setJobDataArray(dataArr); // Update state with fetched data
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
