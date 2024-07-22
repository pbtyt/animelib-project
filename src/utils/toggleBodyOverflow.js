export const toggleBodyOverflow = (isNeedToVisible = true) => {
	console.warn(`[ToggleBodyOverflow]: re-render`);
	const bodyElement = document.getElementById('body');

	if (bodyElement.classList.contains('of-h') && !isNeedToVisible) return;

	if (isNeedToVisible) bodyElement.classList.remove('of-h');
	else bodyElement.classList.add('of-h');
};
