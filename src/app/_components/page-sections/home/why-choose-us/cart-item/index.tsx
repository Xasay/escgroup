"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import classes from "./style.module.scss";
import { CustomHeading } from "@/app/_components/shared/custom-heading";
import CustomDivider from "@/app/_components/shared/custom-divider";
import { CustomParagraph } from "@/app/_components/shared/custom-paragraph";

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
      <div className={`${classes["cart-item"]}  flex`}>
        <div className={classes["cart-item-icon"]}>{icon}</div>
        <div className={`flex   flex-col`}>
          <CustomHeading
            className={classes["cart-item-heading"]}
            type="h3"
            content={heading}
            fontSize="1.25rem"
            fontWeight="600"
          />
          <CustomParagraph
            className={classes["cart-item-description"]}
            content={description}
          />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CartItem;
