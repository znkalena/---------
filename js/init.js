import {clearPage} from './clearpage.js';
import {createHeader} from './createheader.js';
import {createPagination} from './createpagination.js';
import {createForm} from './createform.js';
import {createAside} from './createaside.js';
import { createBtns } from './createbtns.js';

const header = document.querySelector('header');
const app =document.querySelector('.app');

const initPage = () => {
    clearPage();
    createHeader(header);
    createPagination(app);
    createForm(app);
    createAside(app);
    createBtns(app);
}
initPage();

