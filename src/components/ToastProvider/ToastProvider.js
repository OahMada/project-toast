import React from 'react';

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

	let value = React.useMemo(() => ({ toastStack, dismissSingleToast, setToastStack, addNewToast }), [toastStack]);

	React.useEffect(() => {
		function handleKeyDown(e) {
			if (e.code === 'Escape') {
				setToastStack([]);
			}
		}
		window.addEventListener('keydown', handleKeyDown);
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
