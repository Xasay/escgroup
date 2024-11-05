import ContentContainer from "@/app/_components/containers/content-container";
import CustomContainer from "@/app/_components/containers/custom-container";
import Row from "@/app/_components/containers/custom-row";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import React from "react";
import TeamItems from "./team-items";
import CustomDivider from "@/app/_components/shared/custom-divider";

type Props = {};

const OurTeam = (props: Props) => {
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
              content="Meet our team"
              type="h2"
            />
            <CustomDivider />
            <TeamItems />
          </Row>
        </ContentContainer>
      </CustomContainer>
    </section>
  );
};

export default OurTeam;
