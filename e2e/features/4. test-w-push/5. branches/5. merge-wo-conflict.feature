# language: ru
Функция: Мерж

  Сценарий: Открытие меню переключения веток
    Пусть отменяем все изменения
    Когда смотрим на "левую панель"
    И смотрим на "нижнюю панель"
    И нажимаем на кнопку "dev"
    Тогда видим форму "Слить ветки"

  Сценарий: Слияние веток
    Пусть смотрим на активную форму
    И смотрим на "слияние веток"
    Когда нажимаем на поле "Поиск ветки"
    И смотрим на выпадающий список
    И нажимаем на кнопку "master"
    И смотрим на активную форму
    И нажимаем на кнопку "Удалить ветку"
    И нажимаем на кнопку "Слить"
    Тогда ждём конца загрузки
