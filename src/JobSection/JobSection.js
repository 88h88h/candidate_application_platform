import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import { Box, Grid } from "@mui/material";
import { useSelector } from "react-redux";

export default function JobSection(props) {
  const jobArr = props.jobs;
  const [jobArray, setJobArray] = useState(jobArr);
  const roleFilter = useSelector((state) => state.roles);
  const experienceFilter = useSelector((state) => state.experience);
  const workplaceFilter = useSelector((state) => state.workplace);
  const minBasePayFilter = useSelector((state) => state.minBasePay);
  const searchFilter = useSelector((state) => state.search);

  const filterJobs = () => {
    let filteredArray = jobArr.filter((job) => {
      // Apply filter conditions based on selected filters
      let includeJob = true;

      // Check if roleFilter is not empty and the job's role is not included in roleFilter
      if (roleFilter.length > 0 && !roleFilter.includes(job.jobRole)) {
        includeJob = false;
      }

      // Check if experienceFilter is not null and the job's experience is greater than experienceFilter
      if (experienceFilter !== null && job.minExp < experienceFilter) {
        includeJob = false;
      }

      // Check if workplaceFilter is not empty and the job's workplace is not included in workplaceFilter
      if (
        (workplaceFilter.includes("remote") && job.location !== "remote") ||
        (workplaceFilter.includes("on-site") && job.location === "remote")
      ) {
        includeJob = false;
      }

      // Check if minBasePayFilter is not null and the job's min base pay is less than minBasePayFilter
      if (minBasePayFilter !== null && job.minJdSalary < minBasePayFilter) {
        includeJob = false;
      }

      // Check if searchFilter is not empty and the searchFilter contains the company name
      if (searchFilter.length > 0 && !searchFilter.includes(job.companyName)) {
        includeJob = false;
      }

      return includeJob;
    });

    setJobArray(filteredArray); // Update the state with filtered jobs
  };

  useEffect(() => {
    setJobArray(jobArr);
  }, [jobArr]);

  useEffect(() => {
    // Filter the jobs whenever any filter changes
    filterJobs();
  }, [
    roleFilter,
    experienceFilter,
    workplaceFilter,
    minBasePayFilter,
    searchFilter,
    jobArr,
  ]);

  return (
    <>
      <Box sx={{}}>
        <Grid
          container
          spacing={{ xs: 1, sm: 1, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {jobArray.map((job) => (
            <Grid item xs={4} sm={4} md={3} key={job.jdUid}>
              <Card jobData={job} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
