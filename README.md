# Candidate Application Platform Documentation

This project was developed as part of an assignment task.

## Introduction
Candidate Application Platform is a frontend project which displays a variety of available jobs and gives user the power to filter it according to their needs

## Setup and Installation

- Clone the repository on your system by running the command
  `git clone https://github.com/88h88h/candidate_application_platform.git`

- Install the dependencies
  `npm install`


## To run the frontend 

Run the project 
`npm start`

## More Information

- The page loads with 8 job cards initially and fetches more as user scrolls to the bottom. There are multiple filters to refine the search. New jobs gets loaded in accordance with the applied filters.

- The layout is responsive and works well on both small screens and large screens.

- As the API that was initially provided got down, I download the given sample data and kept it in my assets folder. The data is being fetched from sampleJdData.js in the assets folder.

- The Homepage is built in Home.js file. It has two sections Filter Section and Job Section. 

- The Filter Section utilizes the Filter component and each filter is customized to specific use case with the use of props. 

- The Job Section dynamically loads the Card components, each job is assigned a card. The cards are arranged in a Grid Layout.

- The Filters display options dynamically using the data available in the current loaded jobs. As loaded jobs increases, the options a filter has may also increase.

- The Search Company Name bar is also made a dropdown as names of company can be searched and selected. It gives suggestions on the basis of incomplete text too.

- Overall the app is functioning according to the requirements with just minor differences in the visual appearance of certain elements compared to the target.

Hope You Like It!
