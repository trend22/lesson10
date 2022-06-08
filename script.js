'use strict';

const books = document.querySelectorAll('.book');
const body = document.querySelector('body');

//упорядочиваем книги
books[1].after(books[0]);
books[0].after(books[4]);
books[5].after(books[2]);

//замена фона body
body.classList.add('bodyChangeBackgroundFoto');

//Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
books[4].innerText = 'Книга 3. this и Прототипы Объектов\nВведение\nПредисловие\nГлава 1: this Or That?\nГлава 2: this теперь приобретает смысл!\nГлава 3: Объекты\nГлава 4: Смешивая объекты \"классов\"\nГлава 5: Прототипы\nГлава 6: Делегирование поведения\nПриложение A: ES6 классы\nПриложение B: Благодарности!"'

console.dir();


