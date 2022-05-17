import { useContext } from "react";
import { TransactionsContext } from "../TransactionsContext";

export const useTransaction = () =>
  useContext(TransactionsContext);
