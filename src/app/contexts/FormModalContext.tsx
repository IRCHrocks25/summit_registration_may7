import { createContext, useContext, useState, ReactNode } from "react";
import { FormModal } from "../components/FormModal";

interface FormModalContextType {
  openForm: () => void;
  closeForm: () => void;
  isOpen: boolean;
}

const FormModalContext = createContext<FormModalContextType | undefined>(
  undefined
);

export function FormModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => setIsOpen(true);
  const closeForm = () => setIsOpen(false);

  return (
    <FormModalContext.Provider value={{ openForm, closeForm, isOpen }}>
      {children}
      <FormModal open={isOpen} onOpenChange={setIsOpen} />
    </FormModalContext.Provider>
  );
}

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (context === undefined) {
    throw new Error("useFormModal must be used within a FormModalProvider");
  }
  return context;
}

