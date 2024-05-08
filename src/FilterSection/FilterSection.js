import React from "react";
import Filter from "../components/Filter";
import {
  setExperience,
  setMinBasePay,
  setRole,
  setSearch,
  setWorkplace,
} from "../features/filter/filterDataSlice";
import { Box } from "@mui/material";

export default function FilterSection(props) {
  const rolesArray = [...new Set(props.jobs.map((job) => job.jobRole))];

  const experienceArray = [
    ...new Set(
      props.jobs.map((job) => job.minExp).filter((exp) => exp !== null)
    ),
  ].sort();

  const basePayArray = [5, 8, 12, 18, 25, 50, 80];

  const locationArray = ["on-site", "remote"];

  const companyArray = [...new Set(props.jobs.map((job) => job.companyName))];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          m: 3,
          marginBottom: "5rem",
        }}
      >
        <Filter
          type="Roles"
          optionsArray={rolesArray}
          size={230}
          multiple={true}
          updateFilter={setRole}
        />

        <Filter
          type="Experience"
          optionsArray={experienceArray}
          size={180}
          multiple={false}
          updateFilter={setExperience}
        />
        <Filter
          type="Remote"
          optionsArray={locationArray}
          size={180}
          multiple={true}
          updateFilter={setWorkplace}
        />
        <Filter
          type="Miniumum Base Pay Salary"
          optionsArray={basePayArray}
          size={260}
          multiple={false}
          updateFilter={setMinBasePay}
        />
        <Filter
          type="Search Company Name"
          optionsArray={companyArray}
          size={240}
          multiple={true}
          updateFilter={setSearch}
        />
      </Box>
    </>
  );
}
