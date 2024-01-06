import { useEffect, useMemo, useState } from "react";

const useDataFetching = (filterCondition) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      // Fetch data from the API
      const response = await fetch(
        "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
      );

      const responseData = await response.json();
      setData(responseData.Items);
    };

    getData();
  }, []); // No dependency for initial fetch

  // Memoize the filtered data based on the filter condition
  const filteredData = useMemo(() => {
    return data.filter(filterCondition);
  }, [data, filterCondition]);

  return filteredData;
};

export default useDataFetching;
