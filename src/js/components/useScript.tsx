import { useEffect } from 'react';

const useScript = (url: string, onload: any, onerror?: any) => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = url;
		script.onload = onload;
		script.onerror = onerror;

		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, [url, onload]);
};

export default useScript;
