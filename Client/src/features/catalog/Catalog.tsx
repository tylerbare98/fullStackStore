import { Button } from "@mui/material";
import { Product } from "../../app/models/products"
import ProductList from "./ProductList";
import { useState, useEffect } from "react";

export default function Catalog() {

  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch("https://localhost:5000/api/Products")
    .then(response => response.json())
    .then(data => setProducts(data))
  }, [])

function addProduct(){
  setProducts( prevState => [
    ...prevState,
    {
      id: prevState.length + 101,
      name: "product" + (prevState.length + 1), 
      price: ((prevState.length + 1) * 100),
      brand: "some brand",
      description: "some description",
      pictureUrl: "http://picsum.photos/200"
    }
  ])
}

    return (
      <>
        <ProductList products={products} />
        <Button variant="contained" onClick={addProduct}>Add Product</Button>
      </>
    )
}