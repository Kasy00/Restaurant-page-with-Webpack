import './style.css';
import { createHomepage } from './homepage_content';
import { createMenuPage } from './menu_content';

document.addEventListener('DOMContentLoaded', function() {
    createHomepage();
});

const homeBtn = document.getElementById('homeBtn');
const menuBtn = document.getElementById('menuBtn');
const aboutBtn = document.getElementById('aboutBtn');

homeBtn.addEventListener('click', () =>{
    createHomepage();
});

menuBtn.addEventListener('click', () => {
    createMenuPage();
});
