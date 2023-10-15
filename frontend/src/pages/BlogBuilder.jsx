import { useParams } from "react-router-dom";
import React from "react";
import { blogElements } from "../pageData/pageData";
import { GenericPageLayout } from "../components/Generic";

const BlogBuilder = ({ param }) => {
  const { pageName } = useParams();
  const content = blogElements.filter((element) => {
    return (
      element?.pageRoute?.toLowerCase() ===
      (param === undefined ? pageName?.toLowerCase() : param?.toLowerCase())
    );
  });
  return <GenericPageLayout elements={content} />;
};

export default BlogBuilder;
