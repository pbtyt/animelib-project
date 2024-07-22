import React from 'react';

import { Star } from 'lucide-react';

const Start = ({ stared = false, index }) => {
	// #ebebf580
	return (
		<Star
			fill={`${stared ? '#ffb656' : '#ebebf580'}`}
			strokeWidth={0}
			width={34}
			height={34}
			style={{ flexGrow: '1' }}
		/>
	);
};

export default Start;
