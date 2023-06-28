import { useRef } from "react";

export const useModal = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const onOpen = () => modalRef.current?.showModal();
  const onClose = () => modalRef.current?.close();
  return { modalRef, onOpen, onClose };
};
