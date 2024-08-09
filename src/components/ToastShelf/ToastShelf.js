import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastStack, dismissSingleToast }) {
	return (
		<ol className={styles.wrapper}>
			{toastStack.map(({ toastOption, id, toastMessage }) => {
				return (
					<li className={styles.toastWrapper} key={id}>
						<Toast toastOption={toastOption} dismissSingleToast={dismissSingleToast} id={id}>
							{toastMessage}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
