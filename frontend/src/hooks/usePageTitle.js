import { useLocation } from "react-router-dom";

const usePageTitle = (title) => {
  const location = useLocation().pathname.split("/");
  document.title = `${
    location[location.length - 1] === ""
      ? "home"
      : location[location.length - 1]
  }`;
};

export default usePageTitle;
