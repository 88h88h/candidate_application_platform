import React, { useState, useEffect } from "react";
import FilterSection from "../FilterSection/FilterSection";
import JobSection from "../JobSection/JobSection";
import { getSampleJdJSON } from "../assets/sampleJdData";

export default function Home() {
  const [jobDataArray, setJobDataArray] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const dataArr = getSampleJdJSON().slice((page - 1) * 8, page * 8);
      console.log(dataArr);
      setJobDataArray((prev) => [...prev, ...dataArr]); // Update state with fetched data
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
      setLoading(false);
    }
  };

  // Function to increase the page number on reaching the bottom
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 1
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Once the page changes, data is fetched again
  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

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
