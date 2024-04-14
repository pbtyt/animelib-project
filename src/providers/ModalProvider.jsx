import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeModal, setActiveModal] = useState(<></>);
    return (
        <ModalContext.Provider
            value={{ isModalOpen, setIsModalOpen, activeModal, setActiveModal }}
        >
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider