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
import { useTranslations } from "next-intl";

const WeAreAwesomeAgency = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="we-are-awesome-agency w-100">
      <CustomContaiiner className={classes["main-container"]}>
        <ContentContainer>
          <Row
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <CustomHeading
              className={"main-heading"}
              type="h2"
              content={t("webAgencytitle")}
            />
            <CustomDivider />
            <CustomParagraph
              fontSize="1.25rem"
              color="#141414"
              textAlign="center"
              content={t("webAgencyDescription")}
              style={{
                display: "inline-block",
                maxWidth: "813px",
                lineHeight: "2",
              }}
            />
          </Row>
          <div
            className={`${classes["cards-container"]} grid lg:grid-cols-3 md:grid-cols-3 xs:grid-col-1 h-100`}
            style={{ minHeight: "400px" }}
          >
            <CartItem
              icon={
                <AutoFixHighIcon
                  style={{ color: "#6c63ff" }}
                  fontSize={"large"}
                />
              }
              heading={t("branding")}
              description="Maecenas mattis est eget efficitur tempus. Maecenas fermentum fringilla vestibulum. Nulla pulvinar ullamcorper auctor"
            />
            <CartItem
              icon={
                <LocalFireDepartmentIcon
                  style={{ color: "#6c63ff" }}
                  fontSize={"large"}
                />
              }
              description="Maecenas mattis est eget efficitur tempus. Maecenas fermentum fringilla vestibulum. Nulla pulvinar ullamcorper auctor"
              heading={t("development")}
            />
            <CartItem
              icon={
                <ScienceIcon style={{ color: "#6c63ff" }} fontSize={"large"} />
              }
              description="Maecenas mattis est eget efficitur tempus. Maecenas fermentum fringilla vestibulum. Nulla pulvinar ullamcorper auctor"
              heading={t("marketing")}
            />
          </div>
        </ContentContainer>
      </CustomContaiiner>
    </section>
  );
};

export default WeAreAwesomeAgency;
