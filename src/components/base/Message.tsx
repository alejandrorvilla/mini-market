import React from "react";
import ReactDOM from "react-dom";
import { IMessage } from "../../model/transaction";
import { AiFillAlert } from "react-icons/ai";
import "../../resources/styles/components/message.css";
import Button from "./Button";

function Message(props: IProps) {
  const { message, onHide } = props;
  const isError = message.type === "error";
  return ReactDOM.createPortal(
    <div className="message">
      <div className={`content ${isError ? "error" : "success"}`}>
        <h2>
          {isError ? "Error" : "Approved"} <AiFillAlert />
        </h2>
        <p>{message.message}</p>
        <Button className="btn-accept" onClick={() => onHide(message.type)}>
          Accept
        </Button>
      </div>
    </div>,
    document.querySelector("#modal") as Element
  );
}

interface IProps {
  message: IMessage;
  onHide: (type: string) => void;
}

export default Message;
