import { useParams } from "react-router-dom";
import React from "react";
import { elements } from "../pageData/pageData";
import { GenericPageLayout } from "../components/Generic";
const ServiceBuilder = ({ param }) => {
  const { pageName } = useParams();
  const content = elements.filter((element) => {
    console.log(param);
    return (
      element?.pageRoute?.toLowerCase() ===
      (param === undefined ? pageName?.toLowerCase() : param?.toLowerCase())
    );
  });
  return <GenericPageLayout elements={content} />;
};

export default ServiceBuilder;
