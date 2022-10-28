export interface ITransaction {
  id: string;
  reference: string;
  status: string;
}

export interface IMessage {
  type: "error" | "success";
  message: string;
}
