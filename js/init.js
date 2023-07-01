import {clearPage} from 'clearpage.js';
import {createHeader} from 'createheader.js';
import {createPagination} from 'createpagination.js';
import {createForm} from 'createform.js';
import {createAside} from 'createaside.js';

const initPage = () => {
    clearPage();
    createHeader();
    createPagination();
    createForm();
    createAside();
}
initPage();