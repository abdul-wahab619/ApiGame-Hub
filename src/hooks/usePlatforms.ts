import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const useplatforms = () => useData<Platform>("/platforms/lists/parents");

export default useplatforms;
