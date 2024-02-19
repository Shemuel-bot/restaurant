import {MakeImage} from './menu_module.js';
import {Components} from './loadpage.js';
import './style.css';

document.getElementById('menu').onclick = ()=>MakeImage();
document.getElementById('home').onclick=()=>Components();
Components();
