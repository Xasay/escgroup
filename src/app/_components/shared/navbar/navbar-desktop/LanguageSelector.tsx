"use client";
import React, { useTransition } from "react";
import DropDown from "../../language-selector";
import Azeflag from "../../../../../../public/assets/azeflag.svg";
import Rusflag from "../../../../../../public/assets/russiaflag.svg";
import Usaflag from "../../../../../../public/assets/usaflag.svg";
import { setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";

type Props = {
  defaultLocale: string;
};

const LanguageSelector = ({ defaultLocale }: Props) => {
  const [isPending, startTransition] = useTransition();

  const handleChange = (event: any) => {
    setVal(event.target.value);
    const locale = event.target.value as Locale;
    startTransition(() => setUserLocale(locale));
    // setUserLocale(locale);
    // window.location.reload();
  };

  const [val, setVal] = React.useState(defaultLocale);

  return (
    <DropDown
      value={val}
      handleChange={handleChange}
      items={[
        { inner: <Azeflag />, value: "az" },
        { inner: <Rusflag />, value: "ru" },
        { inner: <Usaflag />, value: "en" },
      ]}
    />
  );
};

export default LanguageSelector;
