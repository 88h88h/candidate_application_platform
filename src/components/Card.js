import React, { useState } from "react";
import { Box, Paper, Avatar, Typography, Button } from "@mui/material";

// Building the job card component

// Passing the props to the Card function to be used in the job section to create multiple cards dynamically
export default function Card() {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substr(0, text.lastIndexOf(" ", maxLength));
  };

  const gradientStyle = {
    background:
      "linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))",
  };

  const companyDescription =
    "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.";
  return (
    <>
      <Box
        sx={{
          marginLeft: "1.25rem",
          marginRight: "1.25rem",
          marginBottom: "2rem",
        }}
      >
        <Paper
          sx={{
            width: "20.875rem",
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            borderRadius: "12px",
          }}
          elevation={4}
        >
          <Box sx={{ marginLeft: "14px", marginRight: "12px" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "20px",
              }}
            >
              <Avatar
                src="https://logo.clearbit.com/ibm.com"
                alt="logo"
                sizes="lg"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  fontFamily: "__LexendFont_7838d2",
                  marginLeft: "5px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9375rem",
                    fontWeight: "600",
                    letterSpacing: "1px",
                    marginBottom: "3px",
                    color: "#8b8b8b",
                    fontFamily: "__LexendFont_7838d2",
                  }}
                  variant="h3"
                >
                  Trumio
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.875rem",
                    lineHeight: "1.5",
                    fontFamily: "__LexendFont_7838d2",
                  }}
                  variant="h2"
                >
                  Product Manager
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    fontSize: "0.75rem",
                    fontWeight: "500",
                    marginTop: "5px",
                    color: "#666666 ",
                  }}
                >
                  India
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "200",
                fontSize: "0.875rem",
                marginTop: "14px",
                color: "#666666 ",
                fontFamily: "__LexendFont_7838d2",
              }}
            >
              Estimated Salary: ₹15 - 25 LPA ✅
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: "550",
                marginTop: "14px",
                fontSize: "1rem",
                color: "#484848",
                fontFamily: "__LexendFont_7838d2",
              }}
            >
              About Company:
            </Typography>
            <Typography
              variant="body1"
              fontWeight="bold"
              sx={{
                fontSize: "0.875rem",
                fontFamily: "__LexendFont_7838d2",
              }}
            >
              About us
            </Typography>

            <Typography
              variant="body1"
              sx={{
                position: "relative",
                fontFamily: "__LexendFont_7838d2",
                fontWeight: "400",
              }}
            >
              {showFullDescription ? (
                companyDescription
              ) : (
                <>
                  <span>{truncateText(companyDescription, 310)}</span>
                  <span
                    style={{
                      ...gradientStyle,
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "40px",
                    }}
                  />
                  <br></br>
                </>
              )}
            </Typography>
            <Typography
              sx={{
                color: "#4943da",
                cursor: "pointer",
                textAlign: "center",
                fontFamily: "__LexendFont_7838d2",
              }}
              onClick={toggleDescription}
            >
              View Job
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: "600",
                letterSpacing: "1px",
                marginBottom: "3px",
                marginTop: "25px",
                fontSize: "1rem",
                color: "#8b8b8b",
                fontFamily: "__LexendFont_7838d2",
              }}
            >
              Minimum Experience
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "0.9rem",
                fontFamily: "__LexendFont_7838d2",
                marginTop: "8px",
              }}
            >
              1 Year
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              sx={{
                marginTop: "8px",
                marginBottom: "20px",
              }}
            >
              <Button
                variant="contained"
                style={{
                  width: "100%",
                  height: "3rem",
                  borderRadius: "10px",
                  backgroundColor: "rgb(85, 239, 196)",
                  color: "rgb(0, 0, 0)",
                  padding: "8px 18px",
                  fontWeight: "550",
                  fontFamily: "__LexendFont_7838d2",
                }}
              >
                ⚡ Easy Apply
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
