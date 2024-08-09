import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
	let { toastStack } = React.useContext(ToastContext);

	return (
		<ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
			{toastStack.map(({ toastOption, id, toastMessage }) => {
				return (
					<li className={styles.toastWrapper} key={id}>
						<Toast toastOption={toastOption} id={id}>
							{toastMessage}
						</Toast>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
