import { useEffect, useState } from "react";
import type { DataType } from "../../utils/types";

export function useFetchData() {
  const [myData, setMyData] = useState<DataType | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`data.json`)
        .then((response) => response.json())
        .then((data) => setMyData(data));
    };
    fetchData();
  }, []);
  return myData;
}
