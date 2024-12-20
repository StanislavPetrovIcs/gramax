# language: ru
Функция: Мерж с конфликтом

  Сценарий: Создание коммита
    Пусть смотрим на "левую панель"
    И смотрим на "нижнюю панель"
    Когда нажимаем на иконку "облачка"
    И видим форму "публикация" без заголовка
    И смотрим на активную форму
    И смотрим на "левую панель"
    И видим текст "test1.md"
    Тогда нажимаем на кнопку "Опубликовать"
    И смотрим на активную форму
    И ждём конца загрузки

  Сценарий: Переход на ветку master
    Пусть смотрим на "левую панель"
    И смотрим на "нижнюю панель"
    Когда нажимаем на кнопку "dev"
    И видим форму "Слить ветки"
    И смотрим на активную форму
    И нажимаем на поле "Поиск ветки"
    И смотрим на выпадающий список
    И ждём конца загрузки
    И нажимаем на кнопку "master"
    Тогда смотрим на активную форму
    И нажимаем на кнопку "Сменить"

  Сценарий: Создание изменений
    Пусть смотрим на "левую навигацию"
    И нажимаем на кнопку "Тест"
    И заново смотрим на редактор
    Когда нажимаем на клавиши "Control+A M"
    Тогда разметка текущей статьи содержит
      """
      M
      """

  Сценарий: Создание коммита
    Пусть смотрим на "левую панель"
    И смотрим на "нижнюю панель"
    Когда нажимаем на иконку "облачка"
    И видим форму "публикация" без заголовка
    И смотрим на активную форму
    И смотрим на "левую панель"
    И видим текст "test1.md"
    Тогда нажимаем на кнопку "Опубликовать"
    И смотрим на активную форму
    И ждём конца загрузки

  Сценарий: Открытие меню переключения веток
    Пусть смотрим на "левую панель"
    И смотрим на "нижнюю панель"
    Когда нажимаем на кнопку "master"
    Тогда видим форму "Слить ветки"

  Сценарий: Слияние веток
    Пусть смотрим на активную форму
    И смотрим на "слияние веток"
    Когда нажимаем на поле "Поиск ветки"
    И смотрим на выпадающий список
    И нажимаем на кнопку "dev"
    И смотрим на активную форму
    И ожидаем ошибку
    И нажимаем на кнопку "Слить"
    Тогда ждём конца загрузки

  Сценарий: Решение конфликта
    Пусть ожидаем ошибку
    И смотрим на активную форму
    И перезагружаем страницу
    Пусть ожидаем ошибку
    И смотрим на активную форму
    Когда нажимаем на кнопку "Решить конфликт"
    И не ожидаем ошибку
    И ждём конца загрузки
    И решаем конфликт
    И смотрим на активную форму
    И смотрим на "левую панель"
    И нажимаем на кнопку "Подтвердить"
    И смотрим на активную форму
    И ждём конца загрузки
    Тогда заново смотрим на "левую навигацию"
    И нажимаем на кнопку "Тест"
    И нажимаем на кнопку "Без названия"
    И нажимаем на кнопку "Тест"
    И разметка текущей статьи содержит
      """
      M
      """
