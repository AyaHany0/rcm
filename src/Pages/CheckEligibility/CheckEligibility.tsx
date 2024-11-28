import { Box, Fab, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SearchModal from "../../Components/SearchModal/SearchModal";
import { useState } from "react";
import { Product } from "../../Types/SearchComponent";
export default function CheckEligibility() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  return (
    <>
      <Box
        component={"div"}
        sx={{
          display: "flex",

          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h2" color="primary">
          Search
        </Typography>
        <Fab
          color="primary"
          aria-label="search"
          sx={{ marginX: 1 }}
          size="medium"
          onClick={() => setIsModalOpen(true)}
        >
          <SearchIcon />
        </Fab>
        <SearchModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSearch={setSearchResults}
        />
      </Box>
    </>
  );
}
