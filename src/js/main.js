import data from '../data/menu.json';
import creatCards from '../templates/card.hbs';
import { refs } from './refs';
import { Theme, key } from './var';
import { setDataLocalStorage, getDataLocalStorage} from './localstorage'


const template = creatCards(data);

refs.menu.insertAdjacentHTML('afterbegin', template);

refs.switch.addEventListener('input', toggleTheme)

function toggleTheme(event) {
    let themeColor = 'LIGHT';
    if (event.target.checked) {
        themeColor = 'DARK';
    };
    updatePage(themeColor);
    setDataLocalStorage(key, themeColor);

}

function updatePage(theme) {
    console.log(theme);
    refs.body.classList.remove(Theme.LIGHT, Theme.DARK);
    refs.body.classList.add(Theme[theme])
};

function start() {
    const dataLocStor = getDataLocalStorage(key);
    if (!dataLocStor) return;
    if (dataLocStor === 'DARK') {
        updatePage(dataLocStor)
        toggle()
    } 
};
start();

function toggle() {
    refs.switch.checked = true;

}