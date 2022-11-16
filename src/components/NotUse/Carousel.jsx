import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { Swipe } from "@mui/icons-material";
import CarouselR from "react-material-ui-carousel";
// import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import BlogCard from "../pages/Home/BlogCard";

const AutoPlaySwipeableViews = autoPlay(CarouselR);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "http://ssgmkhandala.org/images/college/img1.jpg",
  },
  {
    label: "Bird",
    imgPath: "http://ssgmkhandala.org/images/college/img4.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const Carousel = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  // const maxSteps = images.length;

  // const handleNext = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  // };

  // const handleBack = () => {
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  // };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          pl: 2,
          bgcolor: "background.default",
        }}
      ></Paper>
      <div>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#999",
            }}
          >
            <Box
              sx={{
                height: "50vh",

                overflow: "hidden",
                width: "50%",
              }}
            >
              <BlogCard />
            </Box>
          </div>
        </AutoPlaySwipeableViews>
      </div>
    </Box>
  );
};

export default Carousel;
