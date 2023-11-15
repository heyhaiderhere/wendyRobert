import axios from "axios";
import BASE_URL from "../constants/appConstants";

export default axios.create({
  baseURL: BASE_URL,
  validateStatus: () => {
    return true;
  },
});
