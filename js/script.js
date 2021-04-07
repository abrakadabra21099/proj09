/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)
const promoAdv = document.getElementsByClassName('promo__adv'),
    promoContent = document.getElementsByClassName('promo__content');

promoAdv[0].remove();
promoContent[0].style.cssText = 'width:calc(100% - 300px)';

// 2)
promoContent[0].getElementsByClassName('promo__genre')[0].textContent = 'ДРАМА';

// 3)
promoContent[0].getElementsByClassName('promo__bg')[0].style.cssText = 'background:url("../img/bg.jpg"';
// promoContent[0].style.cssText = 'promo__bg{height:360px;background:url("../img/bg.jpg")'

// 4-5)
const iList = promoContent[0].getElementsByClassName('promo__interactive-list')[0].getElementsByClassName('promo__interactive-item');

movieDB.movies.sort().forEach((element, index) => {
    iList[index].textContent = `${index + 1}. ${element}`
});
