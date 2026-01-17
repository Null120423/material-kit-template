import { useContext } from 'react';
import { type ModalContextType, ModalContext } from './modal-context';

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
};
