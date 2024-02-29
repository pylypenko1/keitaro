// mobile
const currentPath = location.pathname.split('/');
const checkCurrentPage = url => {
    switch (url) {

        case 'trading':
            document.querySelectorAll('.mobile-nav__item')[0].classList.add('active'); 
            break;
        case 'ipif':
            document.querySelectorAll('.mobile-nav__item')[1].classList.add('active');
            break;
        case 'pension':
            document.querySelectorAll('.mobile-nav__item')[2].classList.add('active');
            break;
        case 'academy':
            document.querySelectorAll('.mobile-nav__item')[3].classList.add('active');
            break;
        case 'junior':
            document.querySelectorAll('.mobile-nav__item')[4].classList.add('active');
            break;
        case 'radar':
            document.querySelectorAll('.mobile-nav__item')[5].classList.add('active');
            break;
        case 'esg':
            document.querySelectorAll('.mobile-nav__item')[6].classList.add('active');
            break;
        default:
            break;
    }
}
checkCurrentPage(currentPath[currentPath.length - 1]);


// desktop
const currentPathPc = location.pathname.split('/');
const checkCurrentPagePc = url => {
    switch (url) {
        case 'tariffs':
            document.querySelectorAll('.header-links__link')[0].classList.add('active'); 
            break;
        case 'ipif':
            document.querySelectorAll('.header-links__link')[1].classList.add('active'); 
            break;
        case 'pension':
            document.querySelectorAll('.header-links__link')[2].classList.add('active');
            break;
        case 'academy':
            document.querySelectorAll('.header-links__link')[3].classList.add('active');
            break;
        case 'junior':
            document.querySelectorAll('.header-links__link')[4].classList.add('active');
            break;
        case 'radar':
            document.querySelectorAll('.header-links__link')[5].classList.add('active');
            break;
        default:
            break;
    }
}
checkCurrentPagePc(currentPathPc[currentPathPc.length - 1]);


// language
const currentPathLang = location.pathname.split('/');


const checkCurrentPageLang = url => {
    if (url === 'kz' || url === 'en') {
        switch (url) {
            case 'kz':
            document.querySelectorAll('.mobile-nav__lang-link')[0].classList.add('active') || document.querySelectorAll('.mobile-nav__lang-link')[3].classList.add('active');
            break;
            case 'en':
            document.querySelectorAll('.mobile-nav__lang-link')[2].classList.add('active') || document.querySelectorAll('.mobile-nav__lang-link')[5].classList.add('active');
            break;
            default:
            break;
        }
    }  else {
        document.querySelectorAll('.mobile-nav__lang-link')[1].classList.add('active') || document.querySelectorAll('.mobile-nav__lang-link')[4].classList.add('active');
    }
}

checkCurrentPageLang(currentPathLang[currentPathLang.length -2]);

