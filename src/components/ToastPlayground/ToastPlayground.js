import React from 'react';

import Button from '../Button';
import ToastShelf from '../ToastShelf';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	let [toastMessage, setToastMessage] = React.useState('');
	let [toastOption, setToastOption] = React.useState('notice');
	let [toastStack, setToastStack] = React.useState([]);

	function handleSubmit(e) {
		e.preventDefault();
		let newToastToStack = {
			id: crypto.randomUUID(),
			toastMessage,
			toastOption,
		};
		setToastStack([...toastStack, newToastToStack]);
		setToastMessage('');
		setToastOption('notice');
	}

	function dismissSingleToast(id) {
		let modifiedToastStack = toastStack.filter((toast) => toast.id !== id);
		setToastStack(modifiedToastStack);
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>
			<ToastShelf toastStack={toastStack} dismissSingleToast={dismissSingleToast} />

			<form className={styles.controlsWrapper} onSubmit={handleSubmit}>
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
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
