// src/api/getCoupons.js
export const fetchCoupons = async ({ queryKey }) => {
  const { page, pageSize } = queryKey.variables; // Access variables from queryKey object
  const apiUrl = import.meta.env.VITE_GOOGLE_SHEET_API_URL;

  const response = await fetch(`${apiUrl}?page=${page}&pageSize=${pageSize}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
