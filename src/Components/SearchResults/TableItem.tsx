import { TableCell, TableRow, Typography } from "@mui/material";
import { Product } from "../../Types/SearchComponent";

interface ProductProps {
  product: Product;
}
export default function TableItem({ product }: ProductProps) {
  const handleClick = () => {
    alert(`Title: ${product.title}`);
  };
  return (
    <TableRow>
      <TableCell sx={{ cursor: "pointer" }} onClick={handleClick}>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {product.title}
        </Typography>
      </TableCell>
      <TableCell sx={{ cursor: "pointer" }} onClick={handleClick}>
        <Typography variant="body2">${product.price}</Typography>
      </TableCell>
      <TableCell sx={{ cursor: "pointer" }} onClick={handleClick}>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
          }}
        >
          {product.description}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
