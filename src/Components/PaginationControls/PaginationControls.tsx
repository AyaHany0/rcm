import React, { useState } from "react";
import { TablePagination } from "@mui/material";

interface PaginationControlsProps<T> {
  items: T[];
  itemsPerPage?: number;
  children: (paginatedItems: T[]) => React.ReactNode;
}

const PaginationControls = <T extends unknown>({
  items,
  itemsPerPage = 10,
  children,
}: PaginationControlsProps<T>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(itemsPerPage);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to the first page
  };

  // Compute paginated items
  const paginatedItems = items.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <div style={{ width: "100%" }}>
      {children(paginatedItems)}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default PaginationControls;
