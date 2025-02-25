import { createContext, useState, useContext, useCallback, ReactNode } from "react";
import Toast from "../components/Toast/Toast";

interface ToastContextType {
  addToast: (message: string, type?: string) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

interface ToastType {
  id: number;
  message: string;
  type: string;
}

const ToastContext = createContext<ToastContextType>({ addToast: () => {} });

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const addToast = useCallback((message: string, type: string = "success") => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message, type }]);
    setTimeout(() => removeToast(id), 3000);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <Toast key={toast.id} message={toast.message} type={toast.type} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};
