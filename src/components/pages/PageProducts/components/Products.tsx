import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { formatAsPrice } from "~/utils/utils";
import AddProductToCart from "~/components/AddProductToCart/AddProductToCart";
import { useAvailableProducts } from "~/queries/products";

export default function Products() {
  const { data = [], isLoading } = useAvailableProducts();

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Grid container spacing={4}>
      {data.map((availableProduct) => (
        <Grid item key={availableProduct.id} xs={12} sm={6} md={4}>
          <Card
            sx={{ height: "100%", display: "flex", flexDirection: "column" }}
          >
            <CardMedia
              sx={{ pt: "56.25%" }}
              image={`https://picsum.photos/seed/${availableProduct.id}/400/300`}
              title="Image title"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {availableProduct.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {availableProduct.description}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", mb: 1 }}>
                Dostępność: {availableProduct.count} szt.
              </Typography>
              <Typography variant="h6">{formatAsPrice(availableProduct.price)}</Typography>
            </CardContent>
            <CardActions>
              <AddProductToCart product={availableProduct} />
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
