const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

const acct = [
	{
		username: 'Anjon123',
		password: 'Anjon123_'
	},
	{
		username: 'Elle',
		password: 'Peniel123_'
	}
];

const cats = [
	{
		id: 1,
		cname: 'Elio',
		age: 3,
		gender: 'Male',
		color: 'Ginger',
		place: 'Quezon',
		photo: 'assets/elio.jpg'
	},
	{
		id: 2,
		cname: 'Heki',
		age: 1,
		gender: 'female',
		color: 'Calico',
		place: 'Meycauayan',
		photo: 'assets/heki.png'
	}
];

app.get('/home', (req, res) => {
	res.render('home', { cats });
});

app.get('/adopt', (req, res) => {
	res.render('adopt', { cats });
});

app.post('/login', (req, res) => {
	const { username, password } = req.body;
	if (username === 'Anjon123' && password === 'Anjon123_') {
		console.log('welcome');
	} else {
		console.log('wrong');
	}
	console.log(username, password);
	res.redirect('/home');
});

app.post('/current', (req, res) => {
	const { cname, age, years, gender, color, place } = req.body;
	const id = cats.length + 1;

	cats.push({ id, cname, age, years, gender, color, place });
	res.redirect('/current');
});

app.get('/', (req, res) => {
	res.render('home', { cats });
});

app.listen('720', () => {
	console.log('LISTENING ON PORT 720');
});
