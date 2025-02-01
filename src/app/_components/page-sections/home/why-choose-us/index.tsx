import React from "react";
import CustomContaiiner from "@/app/_components/containers/custom-container";
import Row from "@/app/_components/containers/custom-row";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import classes from "./style.module.scss";
import CustomDivider from "@/app/_components/shared/custom-divider";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import TelegramIcon from "@mui/icons-material/Telegram";
import CartItem from "./cart-item";
import ContentContainer from "@/app/_components/containers/content-container";
import { useTranslations } from "next-intl";

type Props = {};

const WhyChooseUsSection = (props: Props) => {
  const t = useTranslations("HomePage");

  return (
    <section>
      <CustomContaiiner className={classes["main-container"]}>
        <ContentContainer>
          <Row
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <CustomHeading
              className={"main-heading"}
              content={t("whyChooseUs")}
            />
            <CustomDivider />
            <CustomParagraph
              fontSize="1.25rem"
              color="#141414"
              content="The difference between a Designer and Developer when it comes to design skills, is the difference between shooting a bullet and throwing it"
              textAlign="center"
              style={{
                display: "inline-block",
                maxWidth: "813px",
                lineHeight: "2",
              }}
            />
          </Row>
          <div
            className={`${classes["cards-container"]} grid lg:grid-cols-3 md:grid-cols-3 xs:grid-col-1 h-100 gap-y-10`}
          >
            <CartItem
              icon={
                <TelegramIcon style={{ color: "#6c63ff" }} fontSize="inherit" />
              }
              heading="Modern Design"
              description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
            />
            <CartItem
              icon={
                <TelegramIcon style={{ color: "#6c63ff" }} fontSize="inherit" />
              }
              heading="Modern Design"
              description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
            />
            <CartItem
              icon={
                <TelegramIcon style={{ color: "#6c63ff" }} fontSize="inherit" />
              }
              heading="Modern Design"
              description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
            />
            <CartItem
              icon={
                <TelegramIcon style={{ color: "#6c63ff" }} fontSize="inherit" />
              }
              heading="Modern Design"
              description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
            />
            <CartItem
              icon={
                <TelegramIcon style={{ color: "#6c63ff" }} fontSize="inherit" />
              }
              heading="Modern Design"
              description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
            />
            <CartItem
              icon={
                <TelegramIcon style={{ color: "#6c63ff" }} fontSize="inherit" />
              }
              heading="Modern Design"
              description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
            />
          </div>
        </ContentContainer>
      </CustomContaiiner>
    </section>
  );
};

export default WhyChooseUsSection;
