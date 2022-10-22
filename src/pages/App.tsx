import React, { useState } from "react";
import Container from "../components/Container";
import ProductDetail from "../components/ProductDetail";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import IProduct from "../model/product";
import "../resources/styles/App.css";

const products: Array<IProduct> = [
  {
    name: "De Todito",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },{
    name: "De Todito2",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher2",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },{
    name: "De Todito3",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher3",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },{
    name: "De Todito4",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher4",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },{
    name: "De Todito5",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher5",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },{
    name: "De Todito6",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher6",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },{
    name: "De Todito7",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/DE-TODITO-NATURAL-X-400G.png",
    price: 12000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    name: "Ferrero Rocher7",
    image:
      "https://licoresbrisasdejuanchito.com/wp-content/uploads/2021/09/FERRERO-ROCHER-X-100G.png",
    price: 30000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

function App() {
  const [product, setProduct] = useState<IProduct>()
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Container title="Store">
          <ProductList
            products={products}
            onSelectProduct={(product: IProduct) => setProduct(product)}
          />
        </Container>
        <Container title={product ? "Product" : ""}>
          <ProductDetail product={product}/>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default App;
