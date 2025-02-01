import React from "react";
import ContentContainer from "@/app/_components/containers/content-container";
import CustomContainer from "@/app/_components/containers/custom-container";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import classes from "./style.module.scss";
import Row from "@/app/_components/containers/custom-row";
import CustomDivider from "@/app/_components/shared/custom-divider";
import PortfolioItems from "./portfolio-items";

type Props = {};

const OurPortfolio = (props: Props) => {
  return (
    <section>
      <CustomContainer>
        <ContentContainer>
          <Row
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <CustomHeading
              className={"main-heading"}
              content="Our Portfolio"
            />
            <CustomDivider />
            <PortfolioItems />
          </Row>
        </ContentContainer>
      </CustomContainer>
    </section>
  );
};

export default OurPortfolio;
