import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import { Button } from "@mui/material";
import { Box } from "@mui/system";

export default function RecipeReviewCard() {
  const cardBlog = [
    {
      avatar: "O",
      title: "Hey there i am omkar",
      date: "September 14,2022",
      imgsrc: "http://ssgmkhandala.org/images/college/collegeGate1.jpg",
      desc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      avatar: "N",
      title: "Hey there i am naresh",
      date: "September 14,2022",
      imgsrc: "http://ssgmkhandala.org/images/college/img4.jpg",
      desc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      avatar: "S",
      title: "Hey there i am sahil",
      date: "September 14,2022",
      imgsrc:
        "https://lh6.googleusercontent.com/-y0ybNs-AmNo/VzqP47gfOuI/AAAAAAAAEww/BT8hTvJiROwDmNcAnDnJvBAZEUTgxUWoACJkC/photo.jpg",
      desc: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  ];
  return (
    <>
      {cardBlog.map((ele, ind) => {
        return (
          <Card
            sx={{ maxWidth: 345, marginX: "20px", marginBottom: "20px" }}
            key={ind}
            elevation={3}
          >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {ele.avatar}
                </Avatar>
              }
              title={ele.title}
              subheader={ele.date}
            />
            <CardMedia
              component="img"
              height="194"
              image={ele.imgsrc}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {ele.desc}
              </Typography>
            </CardContent>
            <CardActions
              disableSpacing
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
              </Box>

              <Button variant="contained" sx={{ marginLeft: "50px" }}>
                See more
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}
