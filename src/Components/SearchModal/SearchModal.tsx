import React, { useContext, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { directionContext } from "../../Context/DirectionContext";
import { useApi } from "../../Hooks/useApi";
import { Product } from "../../Types/SearchComponent";
import SearchForm from "../SearchForm/SearchForm";
import SearchResults from "../SearchResults/SearchResults";

export const SearchModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onSearch: (results: Product[]) => void;
}> = ({ isOpen, onClose, onSearch }) => {
  const {
    data,
    loading,
    error: apiError,
    fetchData,
  } = useApi<{ data: Product[] }>();
  const [showResults, setShowResults] = useState(false);
  const { direction } = useContext(directionContext);

  useEffect(() => {
    if (!isOpen) {
      setShowResults(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (values: { num: string; code: string }) => {
    await fetchData({
      method: "GET",
      url: "/products",
    });
    setShowResults(true);
    if (data?.data) {
      onSearch(data.data);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: { height: "90vh", direction, overflowY: "auto" },
      }}
    >
      <DialogTitle>
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: direction === "ltr" ? 8 : "unset",
            left: direction === "rtl" ? 8 : "unset",
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
        Search Products
      </DialogTitle>
      <DialogContent dividers>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            height: "100%",
          }}
        >
          {/* Search Form */}
          <SearchForm
            onSubmit={handleSubmit}
            loading={loading}
            apiError={apiError}
          />

          {/* Results or No results to display */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              marginTop: 3,
            }}
          >
            {showResults ? (
              <SearchResults products={data?.data || []} />
            ) : (
              <Box color="text.secondary">
                {loading ? "Loading results..." : "No results to display"}
              </Box>
            )}
          </Box>
          <Button
            variant={"contained"}
            onClick={onClose}
            sx={{ alignSelf: "end" }}
          >
            Close
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default SearchModal;
