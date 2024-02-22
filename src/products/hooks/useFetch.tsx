import { useEffect } from "react";

const useFetch = (fetchFunction, dependencies) => {
  useEffect(() => {
    fetchFunction();
  }, dependencies);
};

export default useFetch;
