import React from 'react';

const TProfilePageFilterSectionItem = ({ title = 'None', count = '0' }) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<span style={{ flexGrow: '1' }}>{title}</span>
			<span style={{ fontSize: '12px', color: '#ebebf580' }}>{count}</span>
		</div>
	);
};

export default TProfilePageFilterSectionItem;
