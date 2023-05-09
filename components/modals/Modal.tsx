'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secAction?: () => void;
  secLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secAction,
  secLabel
}) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) return;

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) return;

    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecAction = useCallback(() => {
    if (disabled || !secAction) return;

    secAction();
  }, [disabled, secAction]);

  if (!isOpen) return null;

  return (
    <>
      <div className="grid place-items-center fixed inset-0 bg-neutral-800/70">
        <div className="w-full max-w-lg h-full md:h-auto">
          <div
            className={`
              h-full
              translate
              duration-300
              ${showModal ? 'translate-y-0' : 'translate-y-full'}
              ${showModal ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <article className="w-full h-full md:h-auto flex flex-col relative translate rounded-lg shadow-lg bg-white">
              <header className="flex items-center justify-center p-4 relative border-b-[1px] rounded-t">
                <h2 className="text-lg font-semibold">{title}</h2>
                <button
                  className="p-1 absolute right-5 transition hover:opacity-70"
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
              </header>
              <div className="px-5 py-4 relative flex-auto">{body}</div>
              <footer className="flex flex-col gap-2 px-5 py-4">
                <div className="w-full flex items-center gap-4">
                  {secAction && secLabel && (
                    <Button
                      label={secLabel}
                      disabled={disabled}
                      onClick={handleSecAction}
                      outline
                    />
                  )}
                  <Button
                    label={actionLabel}
                    disabled={disabled}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </footer>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal;
