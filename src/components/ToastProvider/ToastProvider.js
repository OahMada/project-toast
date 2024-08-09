import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export let ToastContext = React.createContext();

function ToastProvider({ children }) {
	let [toastStack, setToastStack] = React.useState([]);

	let dismissSingleToast = React.useCallback((id) => {
		setToastStack((previousToastStack) => {
			return previousToastStack.filter((toast) => toast.id !== id);
		});
	}, []);

	let addNewToast = React.useCallback((toastMessage, toastOption) => {
		let newToastToStack = {
			id: crypto.randomUUID(),
			toastMessage,
			toastOption,
		};
		setToastStack((previousToastStack) => [...previousToastStack, newToastToStack]);
	}, []);

	let dismissAllToast = React.useCallback(() => setToastStack([]), []);

	useEscapeKey(dismissAllToast);

	let value = React.useMemo(() => ({ toastStack, dismissSingleToast, addNewToast }), [addNewToast, dismissSingleToast, toastStack]);

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
