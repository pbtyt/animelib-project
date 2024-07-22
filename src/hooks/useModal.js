import { useCallback, useContext } from 'react';

import { ModalContext } from '../providers/ModalProvider';
import { toggleBodyOverflow } from '../utils/toggleBodyOverflow';

const useModal = () => {
	const { setActiveModal } = useContext(ModalContext);
	const showModal = useCallback(modalElement => {
		console.warn('[useModal]: re-render showModal');
		toggleBodyOverflow(false);
		setActiveModal(modalElement);
	}, []);

	const hideModal = useCallback(() => {
		console.warn('[useModal]: re-render hideModal');
		toggleBodyOverflow(true);
		setActiveModal();
	}, []);

	return { showModal, hideModal };
};

export default useModal;
