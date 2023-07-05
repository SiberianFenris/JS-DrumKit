import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useData<Platform>("/platforms/lists/parents"); //TODO: Make static data

export default usePlatforms;