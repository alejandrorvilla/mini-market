import React from "react";
import "../resources/styles/components/container.css";

function Container(props: Props) {
  const { children, title } = props;
  return (
    <section className="container">
      <div className="title">{title && <h2>{title}</h2>}</div>
      <div className="body">{children}</div>
    </section>
  );
}

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export default Container;
