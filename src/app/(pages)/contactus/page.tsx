import ContentContainer from "@/app/_components/containers/content-container";
import PageInner from "@/app/_components/page-sections/contactus";
import PageHeadSection from "@/app/_components/shared/pages-head-section";
import React from "react";

type Props = {};

const ContactsPage = (props: Props) => {
  return (
    <ContentContainer>
      <PageHeadSection title="Contact us" />
      <PageInner />
    </ContentContainer>
  );
};

export default ContactsPage;
