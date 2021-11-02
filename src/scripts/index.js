import 'regenerator-runtime';
import '../styles/styles.css';
import App from './views/app';

const app = new App ({
    content: document.querySelector('#mainContent'),
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer')
});

window.addEventListener('hashchange', ()=>{
    app.renderPage();
});

window.addEventListener('load', ()=>{
    app.renderPage();
});