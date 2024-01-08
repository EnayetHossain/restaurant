import { useEffect, useState } from "react";

const useDataFetching = () => {
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
  }, []);

  return data;
};

export default useDataFetching;
