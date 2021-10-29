const $ = require('jquery');
import './header.css';

$('body').append('<header></header>');
$('header').append('<h1>Holberton Dashboard</h1>');
$('header').append('<div id="logo"></div>');
console.log('Init header');
