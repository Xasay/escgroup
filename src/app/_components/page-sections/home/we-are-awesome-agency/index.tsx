import CustomContaiiner from "@/app/_components/containers/custom-container";
import Row from "@/app/_components/containers/custom-row";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import ScienceIcon from "@mui/icons-material/Science";
import classes from "./style.module.scss";
import React from "react";
import CartItem from "./cart-item";
import CustomDivider from "@/app/_components/shared/custom-divider";
import ContentContainer from "@/app/_components/containers/content-container";

type Props = {};

const WeAreAwesomeAgency = ({}: Props) => {
  return (
    <section className="we-are-awesome-agency w-100">
      <CustomContaiiner padding="120px 0 120px 0">
        <ContentContainer>
          <Row
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <CustomHeading
              className={"main-heading"}
              type="h2"
              content="We Are Awesome Web Agency"
            />
            <CustomDivider />
            <CustomParagraph
              fontSize="1rem"
              color="#141414"
              textAlign="center"
              content="The difference between a Designer and Developer when it comes to design skills, is the difference between shooting a bullet and throwing it"
              style={{
                display: "inline-block",
                maxWidth: "813px",
                lineHeight: "2",
              }}
            />
          </Row>
          <div
            className={`${classes["cards-container"]} grid lg:grid-cols-3 md:grid-cols-3 xs:grid-col-1 h-100`}
            style={{ height: "400px" }}
          >
            <CartItem
              icon={<AutoFixHighIcon color="success" fontSize={"large"} />}
              heading="Branding"
              description="Maecenas mattis est eget efficitur tempus. Maecenas fermentum fringilla vestibulum. Nulla pulvinar ullamcorper auctor"
            />
            <CartItem
              icon={
                <LocalFireDepartmentIcon color="success" fontSize={"large"} />
              }
              description="Maecenas mattis est eget efficitur tempus. Maecenas fermentum fringilla vestibulum. Nulla pulvinar ullamcorper auctor"
              heading="Development"
            />
            <CartItem
              icon={<ScienceIcon color="success" fontSize={"large"} />}
              description="Maecenas mattis est eget efficitur tempus. Maecenas fermentum fringilla vestibulum. Nulla pulvinar ullamcorper auctor"
              heading="Marketing"
            />
          </div>
        </ContentContainer>
      </CustomContaiiner>
    </section>
  );
};

export default WeAreAwesomeAgency;
