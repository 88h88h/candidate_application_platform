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

// props.jobs contains an array of objects
// Structure of an object -> {
//     "jdUid": "cfff35e1-053c-11ef-83d3-06301d0a7178-92018",
//     "jdLink": "https://weekday.works",
//     "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
//     "maxJdSalary": 45,
//     "minJdSalary": 35,
//     "salaryCurrencyCode": "USD",
//     "location": "chennai",
//     "minExp": 5,
//     "maxExp": 6,
//     "jobRole": "tech lead",
//     "companyName": "Adobe Systems",
//     "logoUrl": "https://logo.clearbit.com/adobe.com"
// },
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
