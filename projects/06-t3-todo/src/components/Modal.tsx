import { ReactNode, forwardRef } from "react";

export const Modal = forwardRef(
  ({ children }: { children: ReactNode }, ref: any) => {
    return (
      <dialog ref={ref} className="modal">
        {children}
      </dialog>
    );
  }
);
