import React from 'react';
import styles from './Comment.module.css';

import { Ellipsis, MoveDown, MoveUp } from 'lucide-react';

const Comment = () => {
	return (
		<div className={styles.commentWrapper}>
			<div className={styles.commentHeader}>
				<div className={styles.commentAvatar}>
					<img
						src='../avatar.jpg'
						alt='avatar'
						className={styles.commentAvatar}
					/>
				</div>
				<span className={styles.commentNickname}>bladee</span>
				<span className={styles.time}>12 часов назад</span>
				<div style={{ flexGrow: '1' }}></div>
				<div className={styles.score}>
					<MoveUp color='rgba(235, 235, 245, .5)' size={13} strokeWidth={3} />
					<span className={styles.scoreText}>25</span>
					<MoveDown color='rgba(235, 235, 245, .5)' size={13} strokeWidth={3} />
				</div>
			</div>
			<p className={styles.commentText}>
				Аниме не плохое, интересный сюжет и персонажи. Годжо love...
			</p>
			<div className={styles.commentFooter}>
				<button className={styles.commentButton}>ответить</button>
				<button className={styles.commentButton}>жалоба</button>
				<Ellipsis strokeWidth={1} size={16} cursor={'pointer'} />
			</div>
		</div>
	);
};

export default Comment;
