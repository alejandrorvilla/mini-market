import React from "react";
import ReactDOM from "react-dom";
import { IMessage } from "../../model/transaction";
import { AiFillAlert } from "react-icons/ai";
import "../../resources/styles/components/message.css";

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
        <button type="button" onClick={() => onHide(message.type)}>
          Accept
        </button>
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
