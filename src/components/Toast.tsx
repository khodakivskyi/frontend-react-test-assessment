import { useCallback, useEffect, useState } from "react";
import "../styles/Toast.css";

export type ToastType = "success" | "error" | "warning" | "info";

export type ToastProps = {
    message: string;
    type?: ToastType;
    duration?: number;
    onClose?: () => void;
    showCloseButton?: boolean;
};

export const Toast = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton = false,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsMounted(false);
      onClose?.();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setIsMounted(true);
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(timer);
  }, [message, type]);

  useEffect(() => {
    if (duration > 0 && isVisible) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration, isVisible, handleClose]);

  if (!isMounted) return null;

  return (
    <div className={`toast toast-${type} ${isVisible ? "toast-visible" : "toast-hidden"}`}>
      <div className="toast-content">
        <span className="toast-message">{message}</span>
        {showCloseButton && (
          <button
            type="button"
            className="toast-close"
            onClick={handleClose}
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
};