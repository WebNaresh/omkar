import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Prinmsg = () => {
  return (
    <>
      <Container sx={{ marginY: "40px" }}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" fontSize={"2.7em"}>
            Our Principal Thoughts
          </Typography>
          <Typography variant="span" fontSize={".9em"}>
            Message from our principal and thoughts
          </Typography>
        </Box>
      </Container>

      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Box width={"50%"}>
          <Typography variant="h4">From Our Respected Principal</Typography>
          <Typography variant="span" fontSize={".9em"}>
            Khandala Vibhag Shikshan Samiti is a parent organisation of Sushila
            Shankarrao Mahavidyalaya, khandala Dist. Satara, established in
            2007. Primary motto of the college is to provide the education for
            rural and remote area students. The Chairman of Khandala Vibhag
            Shikshan Samiti, Hon’ble Prataprrao Bhosale, former senior cabinet
            minister of Maharashtra Government, and our guide has always
            cherished new concepts in education. The Architect of Sushila
            Shankarrao Mahavidyalaya, Hon. Shankarrao Gadhave sir has played
            pioneering and proactive roles in establishing this college for
            process of social and economic transformation through dynamic
            education Our college provides education in Arts, Science, Commerce
            and B C A, degree courses. The management of the college has made
            available distance education by YCMOU Nasik. We have motivated our
            students for several activities. We offer training to our students
            in English proficiency and personality development short term
            course. Realizing the value of women empowerment, our students have
            organized self-protecting training camp for girls.
          </Typography>
        </Box>

        <img
          src="http://ssgmkhandala.org/images/college/principal.jpg"
          alt="none"
          style={{ marginLeft: "50px", boxShadow: "0 0 2px #333" }}
          width="20%"
          height="20%"
        />
      </Container>
    </>
  );
};

export default Prinmsg;
