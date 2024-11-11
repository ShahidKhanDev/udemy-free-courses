import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Card from "./Card";
import CardPlaceholder from "./CardPlaceholder";
import Pagination from "./Pagination";

const Courses = ({ searchTerm }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10); // Fixed page size
  const [totalPages, setTotalPages] = useState(0);

  const fetchCourses = async () => {
    const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_API_URL;
    const response = await fetch(
      `${apiUrl}?endpoint=courses&page=${currentPage}&pageSize=${pageSize}&course_name=${searchTerm}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["courses", searchTerm, currentPage],
    queryFn: fetchCourses,
    keepPrevData: true,
  });

  useEffect(() => {
    if (data) {
      const totalRecords = data.totalRecords;
      setTotalPages(Math.ceil(totalRecords / pageSize));
    }
  }, [data, pageSize]);

  if (isLoading) {
    return (
      <div className="container max-w-6xl mx-auto my-8">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: pageSize }, (_, index) => (
            <CardPlaceholder key={index} />
          ))}
        </ul>
      </div>
    );
  }

  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className="container max-w-6xl mx-auto my-8">
        {data?.data.length > 0 ? (
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.data.map((course, index) => (
              <Card key={index} course={course} />
            ))}
          </ul>
        ) : (
          <div className="h-full">
            <img
              src="/no-data.png"
              alt="no-data"
              className="object-cover max-w-full max-h-full mx-auto"
            />
            <p className="-mt-6 text-xl font-bold text-center font-degular">
              No results found
            </p>
          </div>
        )}
      </div>

      <div className="container max-w-6xl px-4 py-8 mx-auto lg:px-0">
        {data && data.totalRecords > pageSize && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default Courses;
