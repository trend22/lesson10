'use strict';

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');
const advertisement = document.querySelector('.adv');
const book2Change = books[4].querySelector('a');

const bookListPart2 = books[0].querySelectorAll('li');
const bookListPart5 = books[5].querySelectorAll('li');
const bookListPart6 = books[2].querySelectorAll('li');

let clonePartOfBook6;

//упорядочиваем книги
books[1].after(books[0]);
books[0].after(books[4]);
books[5].after(books[2]);

//замена фона body
body.classList.add('bodyChangeBackgroundFoto');

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
book2Change.innerText = 'Книга 3. this и Прототипы Объектов';

//удаляем рекламу
advertisement.remove();

//восстанавливаем порядок глаз во второй и пятой книге
bookListPart2[1].after(bookListPart2[3]);
bookListPart2[3].after(bookListPart2[6]);
bookListPart2[6].after(bookListPart2[8]);
bookListPart2[8].after(bookListPart2[4]);
bookListPart2[4].after(bookListPart2[5]);
bookListPart2[5].after(bookListPart2[7]);
bookListPart2[7].after(bookListPart2[9]);
bookListPart2[9].after(bookListPart2[2]);
bookListPart2[2].after(bookListPart2[10]);

bookListPart5[1].after(bookListPart5[9]);
bookListPart5[9].after(bookListPart5[3]);
bookListPart5[3].after(bookListPart5[4]);
bookListPart5[4].after(bookListPart5[2]);
bookListPart5[2].after(bookListPart5[6]);
bookListPart5[6].after(bookListPart5[7]);
bookListPart5[7].after(bookListPart5[5]);
bookListPart5[5].after(bookListPart5[8]);
bookListPart5[8].after(bookListPart5[10]);

//добавляем “Глава 8: За пределами ES6” в шестую книгу
clonePartOfBook6 = bookListPart6[7].cloneNode();
clonePartOfBook6.innerText = 'Глава 8: За пределами ES6';
bookListPart6[8].append(clonePartOfBook6);

//------------- мусорный блок вывода в консоль---------


