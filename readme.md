# _ЧТО ТАКОЕ DOM <span style="color:yellow">JAVA SCRIPT</span> ?_

_<span style="color:yellow">дерева</span> это язык, который позволяет вам применять сложные вещи на web странице — каждый раз, когда на web странице происходит что-то большее, чем просто её статичное отображение — отображение периодически обновляемого контента, или интерактивных карт, или анимация 2D/3D графики, или прокрутка видео в проигрывателе, и т.д. — можете быть уверены, что скорее всего, не обошлось без <span style="color:yellow">JavaScript</span>. Это третий слой слоёного пирога стандартных web технологий, два из которых (`HTML` и `CSS`) мы детально раскрыли в других частях учебного пособия._

_<span style="color:yellow">DOM</span> чаще всего используется в <span style="color:yellow">JavaScript</span>, но не является его частью, поэтому иногда с `DOM` работают в других языках._

# CТРУКТУРА 
## <span style="color:yellow">The HTML DOM Tree of Objects</span>
![alt text](image.png)

# _ЧТО ТАКОЕ BOM <span style="color:yellow">JAVA SCRIPT</span> ?_
### _Объектная модель браузера <span style="color:yellow">(Browser Object Model, BOM)</span> позволяет <span style="color:yellow">JavaScript</span> `«ОБЩАТЬСЯ»` в браузере._

# _Объектная модель браузера <span style="color:yellow">BOM</span>_
## Официальных стандартов для <span style="color:yellow">B</span>rowser <span style="color:yellow">O</span>bject <span style="color:yellow">M</span>odel `(BOM)` не существует.
### Поскольку в современных браузерах реализованы (почти) те же методы и для интерактивности JavaScript, его часто называют методами и свойства спецификации.

# Объект <span style="color:yellow">Window</span>
```JAVASCRIPT
Объект поддерживается всеми браузерами. Он представляет собой окно браузера.`window`

Все глобальные JavaScript-объекты, функции и переменные автоматически становятся Члены объекта window.

Глобальные переменные являются свойствами объекта window.

Глобальные функции являются методами объекта window.

Даже объект document (HTML DOM) является свойством окна объект:

window.document.getElementById("header");

то же самое, что:

document.getElementById("header");
```
# Размер <span style="color:yellow">окна</span>
### Для определения размера браузера можно использовать два свойства окно.
### Оба свойства возвращают размеры в Пикселей:
```javascript
* window.innerHeight - внутренняя высота окна браузера (в пикселях)
* window.innerWidth - внутренняя ширина окна браузера (в пикселях)
```
### Окно браузера `(окно просмотра браузера)` НЕ включает панели инструментов и полосы прокрутки.

# _ПРИМЕР_
```JAVASCRIPT
let w = window.innerWidth;
let h = window.innerHeight;
```
#  <span style="color:yellow">Другие</span> методы работы с окнами
### Некоторые другие методы:
```JAVASCRIPT
window.open() - открыть новое окно

window.close() - закрыть текущее окно

window.moveTo() - переместить текущее окно

window.resizeTo() - изменить размер текущего окна
```
# EVENT <span style="color:yellow">DOM</span>
## <span style="color:yellow">HTML DOM</span> позволяет JavaScript реагировать на события HTML:
### Реакция на события:
_<span style="color:yellow">JavaScript</span> может быть выполнен при наступлении какого-либо события, например, когда пользователь щелкает элемент `HTML`._

_Чтобы выполнить код, когда пользователь щелкает элемент, добавьте код JavaScript в атрибут события `HTML`:_
```javascript
onclick=JavaScript
```
### _<span style="color:yellow">Примеры</span> HTML-событий:_

```javascript
* Когда пользователь щелкает мышью       

* Когда загружается веб-страница

* После загрузки изображения

* При наведении курсора мыши на элемент

* При изменении поля ввода

* При отправке HTML-формы

* Когда пользователь нажимает клавишу
```
### _В этом примере содержимое элемента изменяется, когда пользователь нажимает на него: `<h1>`_

# <span style="color:yellow">Пример</span> :
```javascript
<!DOCTYPE html>
<html>
<body>

<h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>

</body>
</html>
```