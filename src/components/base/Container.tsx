import React from "react";
import "../../resources/styles/components/container.css";

function Container(props: IProps) {
  const { children, title, className } = props;
  return (
    <section className={`container ${className ? className : ""}`}>
      <div className="title">{title && <h2>{title}</h2>}</div>
      <div className="body">{children}</div>
    </section>
  );
}

interface IProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  className?: string;
}

export default Container;
