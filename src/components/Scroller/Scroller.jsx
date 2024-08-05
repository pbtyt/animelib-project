import React, { useRef, useState } from 'react';
import styles from './Scroller.module.css';

import { MoveLeft, MoveRight } from 'lucide-react';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';

const Scroller = ({
	children,
	scrollStep = 80,
	style = {},
	controls = true,
}) => {
	const [isHoverL, setIsHoverL] = useState(false);
	const [isHoverR, setIsHoverR] = useState(false);
	const scrollerRef = useRef(null);

	const isMobile = useCheckMobileScreen();

	return (
		<div className={styles.scrollerWrapper} style={style}>
			<div className={styles.scroller} ref={scrollerRef}>
				{children}
			</div>

			{controls && !isMobile && (
				<div
					className={styles.arrowWrapper}
					style={{ right: '0', justifyContent: 'end' }}
					onMouseEnter={() => setIsHoverR(true)}
					onMouseLeave={() => setIsHoverR(false)}
				>
					<button
						className={`${styles.rightArrow} ${
							isHoverR ? styles.hoveredR : ''
						}`}
						onClick={() => {
							if (scrollerRef.current.scrollLeft === 300) setIsHoverR(false);
							console.log(scrollerRef.current.scrollLeft);
							scrollerRef.current.scrollLeft += scrollStep;
						}}
					>
						<MoveRight color='#bfbfbf' width={15} height={15} />
					</button>
				</div>
			)}
			{controls && !isMobile && (
				<div
					className={styles.arrowWrapper}
					style={{ left: '0', justifyContent: 'start' }}
					onMouseEnter={() => setIsHoverL(true)}
					onMouseLeave={() => setIsHoverL(false)}
				>
					<button
						className={`${styles.leftArrow} ${isHoverL ? styles.hoveredL : ''}`}
						onClick={() => {
							if (scrollerRef.current.scrollLeft === 0) setIsHoverL(false);
							console.log(scrollerRef.current.scrollLeft);
							scrollerRef.current.scrollLeft -= scrollStep;
						}}
					>
						<MoveLeft color='#bfbfbf' width={15} height={15} />
					</button>
				</div>
			)}
		</div>
	);
};

export default Scroller;
