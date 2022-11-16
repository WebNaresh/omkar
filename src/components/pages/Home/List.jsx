import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadComponent } from "react-lazy-load-image-component";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const List = () => {
  const itemData = [
    {
      img: "http://ssgmkhandala.org/images/college/collegeGate1.jpg",
      title: "Breakfast",
      rows: 2,
      cols: 2,
    },
    {
      img: "http://ssgmkhandala.org/images/college/infra-thumb2.png",
      title: "Burger",
    },
    {
      img: "https://i.ytimg.com/vi/nh6Ahxno3g8/sddefault.jpg",
      title: "Camera",
    },
    {
      img: "http://ssgmkhandala.org/images/college/img2.jpg",
      title: "Coffee",
      cols: 2,
    },
    {
      img: "https://lh6.googleusercontent.com/-y0ybNs-AmNo/VzqP47gfOuI/AAAAAAAAEww/BT8hTvJiROwDmNcAnDnJvBAZEUTgxUWoACJkC/photo.jpg",
      title: "Hats",
      cols: 2,
    },
    {
      img: "https://digigav.in/khandala/wp-content/uploads/2018/12/Rajendra-Mahavidyalaya-khandala.jpg",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
    },
    {
      img: "http://ssgmkhandala.org/images/college/img4.jpg",
      cols: 2,
      title: "Basketball",
    },
  ];
  return (
    <>
      <ImageList
        sx={{ width: 500, height: 450, overflow: "hidden" }}
        variant="quilted"
        cols={4}
        className="removeScroll"
        rowHeight={121}
      >
        {itemData.map((item) => (
          <LazyLoadComponent>
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          </LazyLoadComponent>
        ))}
      </ImageList>
    </>
  );
};

export default List;
