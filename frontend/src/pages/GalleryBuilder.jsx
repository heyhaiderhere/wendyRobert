import { useParams } from "react-router-dom";
import React from "react";
import { galleryElements } from "../pageData/pageData";
import { GenericPageLayout } from "../components/Generic";
const GalleryBuilder = ({ param }) => {
  const { pageName } = useParams();
  const content = galleryElements.filter((element) => {
    console.log(param);
    return (
      element?.pageRoute?.toLowerCase() ===
      (param === undefined ? pageName?.toLowerCase() : param?.toLowerCase())
    );
  });
  return <GenericPageLayout elements={content} />;
};

export default GalleryBuilder;
