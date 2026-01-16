import {
  createContext,
  useCallback,
  useMemo,
  useState,
  type FC,
  type ReactNode,
} from 'react';
import ModalCustom from '../components/modal';

export interface ModalContextType {
  hideModal: () => void;
  openModal: (modalInfo: ReactNode) => void;
}

interface ModalProviderProps {
  children: ReactNode;
}

const ModalContext = createContext<ModalContextType>({
  hideModal: () => {},
  openModal: () => {},
});

const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);

  const openModal = useCallback((modalInfo: ReactNode): void => {
    setContent(modalInfo);
    setVisible(true);
  }, []);

  const hideModal = useCallback((): void => {
    setVisible(false);
  }, []);

  const value = useMemo(
    (): ModalContextType => ({
      hideModal,
      openModal,
    }),
    [hideModal, openModal]
  );

  return (
    <ModalContext.Provider value={value}>
      <ModalCustom
        isOpen={isVisible}
        onClose={() => {
          setVisible(false);
        }}
      >
        {content}
      </ModalCustom>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
export { ModalContext };
