const navLgn = document.querySelector('#nav-lgn');
const logInBgB = document.querySelector('#logInBgB');
const logInBgW = document.querySelector('#logInBgW');

navLgn.addEventListener('click', () => {
	logInBgB.classList.remove('dsply-hd');
});

logInBgW.addEventListener('click', (e) => {
	if (e.target.id === 'logInBgW') {
		logInBgB.classList.add('dsply-hd');
	}
});
