import { ReactNode, ReactElement } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Props = {
  children: ReactNode;
};

export const ToastProvider = ({ children }: Props): ReactElement => (
  <>
    {children}
    <ToastContainer
      position="top-right"
      autoClose={15000}
      hideProgressBar
      newestOnTop
      closeOnClick={false}
      rtl={false}
      draggable
      pauseOnHover
    />
  </>
);
