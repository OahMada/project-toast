import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	let [toastMessage, setToastMessage] = React.useState('');
	let [toastOption, setToastOption] = React.useState('notice');
	let [showToast, setShowToast] = React.useState(false);

	function dismissToast() {
		setShowToast(false);
	}

	function enableToast() {
		setShowToast(true);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>
			{showToast && <Toast toastOption={toastOption} dismissToast={dismissToast} toastMessage={toastMessage} />}

			<div className={styles.controlsWrapper}>
				<div className={styles.row}>
					<label htmlFor='message' className={styles.label} style={{ alignSelf: 'baseline' }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={toastMessage}
							onChange={(e) => {
								setToastMessage(e.target.value);
							}}
							required
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((variant) => {
							return (
								<label htmlFor={`variant-${variant}`} key={variant}>
									<input
										id={`variant-${variant}`}
										type='radio'
										name='variant'
										value={variant}
										checked={variant === toastOption}
										onChange={(e) => {
											setToastOption(e.target.value);
										}}
									/>
									{variant}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button onClick={enableToast}>Pop Toast!</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ToastPlayground;
