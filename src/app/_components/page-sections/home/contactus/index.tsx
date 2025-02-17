"use client";
import { CustomButton } from "@/app/_components/shared/custom-button";
import CustomInput from "@/app/_components/shared/custom-input";
import TextArea from "@/app/_components/shared/custom-textarea";
import React, { ChangeEvent } from "react";
import classes from "./style.module.scss";
import CustomContainer from "@/app/_components/containers/custom-container";
import ContentContainer from "@/app/_components/containers/content-container";
import Row from "@/app/_components/containers/custom-row";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import CustomDivider from "@/app/_components/shared/custom-divider";

type Props = {};

const Contactus = (props: Props) => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  };

  return (
    <section>
      <CustomContainer className={classes["main-container"]}>
        <ContentContainer>
          <Row
            className={`w-full`}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <CustomHeading content="contact us" className={"main-heading"} />
            <CustomDivider />
            <form className="w-[95%] sm:w-3/6  ">
              <div className={classes?.["form-block"]}>
                <div className="mb-2">
                  <CustomInput
                    type="text"
                    label="Full name"
                    name="fullName"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-2">
                  <CustomInput
                    type="text"
                    label="Phone"
                    name="phone"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-2">
                  <CustomInput
                    type="email"
                    label="Email"
                    required
                    name="email"
                    onChange={onChange}
                  />
                </div>
                <div className="mb-4">
                  <TextArea
                    label="Message"
                    name="message"
                    onChange={onChange}
                  />
                </div>
                <div className={classes?.["grid-col-span-2"]}>
                  <CustomButton
                    className={classes?.["form-button"]}
                    bgColor="primary"
                    type="submit"
                    text="Send"
                  />
                </div>
              </div>
            </form>
          </Row>
        </ContentContainer>
      </CustomContainer>
    </section>
  );
};

export default Contactus;
