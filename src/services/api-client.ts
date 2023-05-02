import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f2d32a401cb1423ba063ed7671e49b12",
  },
});
