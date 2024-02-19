import {MakeImage} from './menu_module.js';
import {Components} from './loadpage.js';
import {AboutPage} from './about_page_module.js';
import './style.css';

document.getElementById('menu').onclick = ()=>MakeImage();
document.getElementById('home').onclick=()=>Components();
document.getElementById('contact').onclick=()=>AboutPage();
Components();
