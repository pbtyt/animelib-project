export const toggleBodyOverflow = (isNeedToVisible = true) => {
	console.warn(`[ToggleBodyOverflow]: re-render`);
	if (isNeedToVisible) document.getElementById('body').classList.remove('of-h');
	else document.getElementById('body').classList.add('of-h');
};
