# language: ru
Функция: Блоки

  Сценарий: Выйти из цитаты по двум нажатиям Enter
    Пусть смотрим на "редактор"
    И заполняем документ
      """
      > text(*)
      """
    Когда нажимаем на клавиши "Enter Enter"
    И вводим "text"
    Тогда разметка текущей статьи содержит
      """
      > text
      
      text
      """
