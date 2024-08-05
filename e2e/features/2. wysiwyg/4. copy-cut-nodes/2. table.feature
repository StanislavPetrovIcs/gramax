# language: ru
Функция: Начало работы

  Сценарий: Копирование таблицы
    Пусть смотрим на редактор
    И заполняем документ
      """
      | 1 (*) | 2 | 3 |
      |---|---|---|
      | 4 | 5 | 6 |
      | 7 | 8 | 9 |
      """
    Когда нажимаем на клавиши "Shift+ArrowDown+ArrowRight+ArrowDown+ArrowRight Control+KeyC"
    И нажимаем на иконку редактора "корзина"
    И нажимаем на клавиши "Control+KeyV"
    Тогда разметка текущей статьи содержит
      """


      | 1 | 2 | 3 |
      |---|---|---|
      | 4 | 5 | 6 |
      | 7 | 8 | 9 |
      """

  Сценарий: Копирование нескольких ячеек таблицы
    Пусть смотрим на редактор
    И заполняем документ
      """
      | 1 (*) | 2 | 3 |
      |---|---|---|
      | 4 | 5 | 6 |
      | 7 | 8 | 9 |
      """
    Когда нажимаем на клавиши "Shift+ArrowDown+ArrowRight Control+KeyC"
    И нажимаем на иконку редактора "корзина"
    И нажимаем на клавиши "Control+KeyV"
    Тогда разметка текущей статьи содержит
      """
      
      
      | 1 | 2 |
      |---|---|
      | 4 | 5 |
      """
  Сценарий: Копирование одной ячейки таблицы
    Пусть смотрим на редактор
    И заполняем документ
      """
      | 1 (*) | 2 | 3 |
      |---|---|---|
      | 4 | 5 | 6 |
      | 7 | 8 | 9 |
      """
    Когда нажимаем на клавиши "Shift+ArrowDown+ArrowUp Control+KeyC"
    И нажимаем на иконку редактора "корзина"
    И нажимаем на клавиши "Control+KeyV"
    Тогда разметка текущей статьи содержит
      """
      
      
      1 
      """