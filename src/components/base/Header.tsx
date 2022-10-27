import React from "react";
import Logo from "./Logo";
import ShoppingCartButton from "../cart/ShoppingCartButton";
import "../../resources/styles/components/header.css";

function Header(props: IProps) {
  return (
    <header>
      <Logo />
      <ShoppingCartButton total={props.total} />
    </header>
  );
}

interface IProps {
  total: number;
}

export default Header;
