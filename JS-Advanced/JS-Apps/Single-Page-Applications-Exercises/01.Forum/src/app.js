import { onCancel } from './clearInputs.js';
import { onPublic } from './postTopic.js';
import { getTopic } from './getTopic.js';
import { changePage } from './changePage.js'

document.querySelector('nav a').addEventListener('click', changePage('home'));


getTopic();
document.querySelector('.public').addEventListener('click', onPublic)
document.querySelector('.cancel').addEventListener('click', onCancel)




