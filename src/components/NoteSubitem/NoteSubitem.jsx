import React from 'react';

import { Link } from 'lucide-react';

import HeaderButton from '../../ui/HeaderButton/HeaderButton';

const NoteSubitem = () => {
	return (
		<div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
			<HeaderButton
				additionalStyles={{ padding: '10px' }}
				icon={<Link color='#ebebf580' width={10} height={10} strokeWidth={3} />}
				text=''
			/>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					fontSize: '14px',
					letterSpacing: '.4px',
				}}
			>
				<span
					style={{ fontWeight: '400', color: '#ebebf580', fontSize: '12px' }}
				>
					Параграф <span>1</span>
				</span>
				<span style={{ fontWeight: '500' }}>Best Chapter</span>
			</div>
		</div>
	);
};

export default NoteSubitem;
