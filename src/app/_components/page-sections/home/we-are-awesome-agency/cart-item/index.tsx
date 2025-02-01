"use client";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./style.module.scss";
import React from "react";
import CustomDivider from "@/app/_components/shared/custom-divider";

type Props = {
  icon: React.ReactNode;
  heading: string;
  description: string;
};

const theme = createTheme({
  palette: {
    success: {
      main: "#67d5b5",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  },
});

const CartItem = ({ icon, heading, description }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <div className={`${classes["cart-item"]}  flex items-center  flex-col`}>
        <div className={classes["cart-item-icon"]}>{icon}</div>
        <CustomHeading
          className={classes["cart-item-heading"]}
          type="h3"
          content={heading}
          fontWeight="600"
        />
        <CustomDivider/>
        <CustomParagraph
          className={classes["cart-item-description"]}
          content={description}
        />
      </div>
    </ThemeProvider>
  );
};

export default CartItem;
