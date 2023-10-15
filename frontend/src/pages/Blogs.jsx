import React from "react";
import { blogElements } from "../pageData/pageData";
import { GenericPageLayout } from "../components/Generic";
const Blogs = () => {
  return <GenericPageLayout elements={blogElements} type={"blog"} />;
};

export default Blogs;
