/* Задания на урок 30:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

/* Задания на урок 33:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */


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
