import React from 'react';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = forwardRef(function Modal(props: { children: React.ReactNode }, ref) {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current?.showModal();
      },
      close: () => {
        dialog.current?.close();
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {props.children}
    </dialog>,
    document.getElementById('modal') as HTMLElement
  );
});

export default Modal;
