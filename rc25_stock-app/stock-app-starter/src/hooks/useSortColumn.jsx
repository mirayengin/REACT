import React, { useEffect, useState } from "react";

const useSortColumn = (data, columnObj) => {
  const [sortedData, setSortedData] = useState(data);

  // //! product state'i her guncellendiginde local state'i de guncelle
  useEffect(() => {
    setSortedData(data);
  }, [data]);

  //? state güncel sıralama için
  const [columns, setColumns] = useState(columnObj);

  const handleSort = (arg, type) => {
    //! Bunu sıralama için kullanıyoruz çünkü ascıı sıralamalarında cıkarma işe yaramamaz
    setColumns({ ...columns, [arg]: columns[arg] * -1 });
    setSortedData(
      sortedData
        ?.map((item) => item)
        //? a ve b bir itemdır
        .sort((a, b) => {
          if (type === "date") {
            return columns[arg] * (new Date(a[arg]) - new Date(b[arg]));
          } else if (type === "number") {
            return columns[arg] * (a[arg] - b[arg]);
          } else {
            //? yönünü belirtmek lazım burada sıralamanın
            if (columns[arg] === 1) {
              return b[arg] > a[arg] ? 1 : b[arg] < a[arg] ? -1 : 0;
            } else {
              return a[arg] > b[arg] ? 1 : a[arg] < b[arg] ? -1 : 0;
            }
          }
        })
    );
  };
  return { handleSort, sortedData, columns };
};

export default useSortColumn;
