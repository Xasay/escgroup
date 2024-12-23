"use client";
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./style.module.scss";
import data from "@/app/links.json";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const CustomBreadcrumb = ({
  homeElement,
  separator,
  listClasses,
  activeClasses,
}: TBreadCrumbProps) => {
  const paths = usePathname() as string;
  const currentLink: any = paths
    .split("/")
    .filter((crumb: any) => crumb !== "/")?.[1];

  const pathNames = paths?.split("/").filter((path) => path);

  return (
    <div>
      <ul className={styles?.["container-classes"]}>
        <li className={styles?.listClasses}>
          <Link href={"/"}>{homeElement}</Link>
        </li>
        <li className={styles?.separator}>
          {pathNames.length > 0 && separator}
        </li>

        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href
              ? `${styles?.listClasses} ${styles?.activeClasses}`
              : styles?.listClasses;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {/*@ts-ignore*/}
                <Link href={href}>{data[`${currentLink}`]}</Link>
              </li>
              {pathNames.length !== index + 1 && (
                <li className={styles?.separator}>{separator}</li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default CustomBreadcrumb;
