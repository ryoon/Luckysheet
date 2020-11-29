import en from './en'
import zh from './zh'
import es from './es'
import ja from './ja'
import Store from '../store';

const localeObj = {
    'en':en,
    'zh':zh,
    'es':es,
    'ja':ja
}

function locale(){
    return localeObj[Store.lang];
}

export default locale;
