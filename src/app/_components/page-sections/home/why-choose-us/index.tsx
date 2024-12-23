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

type Props = {};

const WhyChooseUsSection = (props: Props) => {
  return (
    <section>
      <CustomContaiiner padding="0 0 120px 0">
        <ContentContainer>
          <Row
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <CustomHeading className={"main-heading"} content="Why Choose US" />
            <CustomDivider />
            <CustomParagraph
              content="The difference between a Designer and Developer when it comes to design skills, is the difference between shooting a bullet and throwing it"
              textAlign="center"
              style={{
                display: "inline-block",
                maxWidth: "813px",
                lineHeight: "2",
              }}
            />
            <div
              className={`${classes["cards-container"]} grid lg:grid-cols-3 md:grid-cols-3 xs:grid-col-1 h-100 gap-y-10`}
            >
              <CartItem
                icon={
                  <TelegramIcon
                    style={{ color: "#751dc7" }}
                    fontSize="inherit"
                  />
                }
                heading="Modern Design"
                description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
              />
              <CartItem
                icon={
                  <TelegramIcon
                    style={{ color: "#751dc7" }}
                    fontSize="inherit"
                  />
                }
                heading="Modern Design"
                description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
              />
              <CartItem
                icon={
                  <TelegramIcon
                    style={{ color: "#751dc7" }}
                    fontSize="inherit"
                  />
                }
                heading="Modern Design"
                description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
              />
              <CartItem
                icon={
                  <TelegramIcon
                    style={{ color: "#751dc7" }}
                    fontSize="inherit"
                  />
                }
                heading="Modern Design"
                description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
              />
              <CartItem
                icon={
                  <TelegramIcon
                    style={{ color: "#751dc7" }}
                    fontSize="inherit"
                  />
                }
                heading="Modern Design"
                description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
              />
              <CartItem
                icon={
                  <TelegramIcon
                    style={{ color: "#751dc7" }}
                    fontSize="inherit"
                  />
                }
                heading="Modern Design"
                description="Donec et egestas quam. Phasellus mattis dui et elementum consectetur. Etiam eu magna id lectus"
              />
            </div>
          </Row>
        </ContentContainer>
      </CustomContaiiner>
    </section>
  );
};

export default WhyChooseUsSection;
