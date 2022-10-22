import React from "react";
import Logo from "./Logo";
import ShoppingCartButton from "./ShoppingCartButton";
import "../resources/styles/components/header.css";

function Header() {
  return (
    <header>
      <Logo />
      <ShoppingCartButton total={0}/>
    </header>
  );
}

export default Header;
