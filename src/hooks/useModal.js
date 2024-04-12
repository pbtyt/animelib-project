import { useCallback, useContext } from 'react'

import { toggleBodyOverflow } from '../utils/toggleBodyOverflow'
import { ModalContext } from '../providers/ModalProvider'


const useModal = () => {
    const { setIsModalOpen } = useContext(ModalContext);
    const showModal = useCallback(() => {
        console.warn('[useModal]: re-render showModal');
        toggleBodyOverflow(false);
        setIsModalOpen(true);
    }, [])

    const hideModal = useCallback(() => {
        console.warn('[useModal]: re-render hideModal');
        toggleBodyOverflow(true);
        setIsModalOpen(false);
    }, [])

    return { showModal, hideModal }
}

export default useModal