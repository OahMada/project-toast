import React from 'react';
import useEscapeKey from '../../hooks/useEscapeKey';

export let ToastContext = React.createContext();

function ToastProvider({ children }) {
	let [toastStack, setToastStack] = React.useState([]);
	function dismissSingleToast(id) {
		let modifiedToastStack = toastStack.filter((toast) => toast.id !== id);
		setToastStack(modifiedToastStack);
	}

	function addNewToast(newToast) {
		setToastStack([...toastStack, newToast]);
	}

	function dismissAllToast() {
		setToastStack([]);
	}

	useEscapeKey(dismissAllToast);

	let value = React.useMemo(() => ({ toastStack, dismissSingleToast, addNewToast }), [toastStack]);

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
