import { useCallback, useContext } from 'react';

import { ModalContext } from '../providers/ModalProvider';
import { toggleBodyOverflow } from '../utils/toggleBodyOverflow';

const useModal = () => {
	const { activeModals, setActiveModals } = useContext(ModalContext);
	const showModal = useCallback(modalElement => {
		console.warn('[useModal]: re-render showModal');
		toggleBodyOverflow(false);

		//Note: Performance??
		setActiveModals([...activeModals, modalElement]);
	}, []);

	const hideModal = useCallback(() => {
		console.warn('[useModal]: re-render hideModal');

		if (activeModals.length === 1) toggleBodyOverflow(true);

		//Note: Performance??
		activeModals.pop();
		setActiveModals([...activeModals]);
	}, []);

	return { showModal, hideModal };
};

export default useModal;
