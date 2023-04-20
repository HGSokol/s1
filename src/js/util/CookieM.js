export function getAllCookies() {
	const pairs = document.cookie.split(';');
	const cookies = {};

	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i].split('=');
		cookies[(pair[0] + '').trim()] = decodeURIComponent(pair[1]);
	}

	return cookies;
}

export function getCookie(name) {
	const cookies = getAllCookies();

	return cookies[name];
}

export function setCookie(name, value = '', days = 30) {
	const date = new Date();
	date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

	const chunks = [`${name}=${value}`, `expires=${date.toUTCString()}`, 'path=/'].join('; ');

	document.cookie = chunks;
}
