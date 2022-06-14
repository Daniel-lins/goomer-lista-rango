import { ReactElement } from "react";
import { Container, HeaderModal, CloseModalButton } from "./styles";

import xIcon from "../../assets/images/x-icon.jpg";

interface ModalProps {
  isOpen: boolean;
  children: ReactElement;
  closeModal: () => void;
}
export const Modal = ({ isOpen, closeModal, children }: ModalProps) => {
  return (
    <Container isOpen={isOpen} ariaHideApp={false} onRequestClose={closeModal}>
      {" "}
      <HeaderModal>
        <CloseModalButton onClick={closeModal}>
          <img src={xIcon} alt="x-icon" />
        </CloseModalButton>
      </HeaderModal>
      {children}
    </Container>
  );
};
