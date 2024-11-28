import React, { useState, useMemo } from "react";
import { SearchResultsProps } from "../../Types/SearchComponent";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  TablePagination,
} from "@mui/material";
import TableItem from "./TableItem";

const SearchResults: React.FC<SearchResultsProps> = ({ products }) => {
  // Filters state
  const [filters, setFilters] = useState({
    title: "",
    price: "",
    description: "",
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Filter logic with useMemo
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const titleMatch = product.title
        .toLowerCase()
        .includes(filters.title.toLowerCase());
      const priceMatch =
        !filters.price || product.price.toString().includes(filters.price);
      const descriptionMatch = product.description
        .toLowerCase()
        .includes(filters.description.toLowerCase());
      return titleMatch && priceMatch && descriptionMatch;
    });
  }, [products, filters]);

  // Paginated data
  const paginatedProducts = useMemo(() => {
    const startIndex = currentPage * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return filteredProducts.slice(startIndex, endIndex);
  }, [filteredProducts, currentPage, rowsPerPage]);

  // Reset filters
  const resetFilters = () => {
    setFilters({
      title: "",
      price: "",
      description: "",
    });
    setCurrentPage(0); // Reset pagination as well
  };

  // Handle pagination changes
  const handleChangePage = (event: unknown, newPage: number) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0); // Reset to the first page
  };

  return (
    <Box sx={{ py: 4, width: "100%" }}>
      {/* Header and Reset Filters */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h6" component="h3" fontWeight="bold">
          Results
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={resetFilters}
          sx={{ textTransform: "none" }}
        >
          Reset Filters
        </Button>
      </Box>

      {/* Filters */}
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          mb: 3,
        }}
      >
        <TextField
          label="Filter by Title"
          variant="outlined"
          value={filters.title}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, title: e.target.value }))
          }
          fullWidth
        />
        <TextField
          label="Filter by Price"
          variant="outlined"
          value={filters.price}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, price: e.target.value }))
          }
          fullWidth
        />
        <TextField
          label="Filter by Description"
          variant="outlined"
          value={filters.description}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, description: e.target.value }))
          }
          fullWidth
        />
      </Box>

      {/* Table */}
      <TableContainer component={Paper} sx={{ width: "100%" }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="subtitle2" color="textSecondary">
                  Title
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="textSecondary">
                  Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="subtitle2" color="textSecondary">
                  Description
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedProducts.map((product) => (
              <TableItem product={product} key={product.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination Controls */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 25]}
        component="div"
        count={filteredProducts.length} // Total filtered rows
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default SearchResults;
