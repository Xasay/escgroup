import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CustomContainer from "../../containers/custom-container";
import Row from "../../containers/custom-row";

export default function Loading() {
  return (
    <CustomContainer>
      <Row
        justifyContent="center"
        alignItems="center"
        style={{ height: "400px" }}
      >
        <CircularProgress color="secondary" />
      </Row>
    </CustomContainer>
  );
}
