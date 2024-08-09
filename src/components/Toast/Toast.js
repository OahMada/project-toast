import React from 'react';
import { AlertOctagon, AlertTriangle, CheckCircle, Info, X } from 'react-feather';
import { ToastContext } from '../ToastProvider';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
	notice: Info,
	warning: AlertTriangle,
	success: CheckCircle,
	error: AlertOctagon,
};

function Toast({ toastOption, id, children }) {
	let ToastIcon = ICONS_BY_VARIANT[toastOption];
	let { dismissSingleToast } = React.useContext(ToastContext);

	return (
		<div className={`${styles.toast} ${styles[toastOption]}`}>
			<div className={styles.iconContainer}>
				<ToastIcon size={24} />
			</div>
			<p className={styles.content}>
				<VisuallyHidden>{`${toastOption} - `}</VisuallyHidden>
				{children}
			</p>
			<button className={styles.closeButton} onClick={() => dismissSingleToast(id)} aria-label='Dismiss message' aria-live='off'>
				<X size={24} />
			</button>
		</div>
	);
}

export default Toast;
