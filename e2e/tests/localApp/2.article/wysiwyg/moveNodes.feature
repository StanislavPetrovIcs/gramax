# language: ru
Функция: Перемещение блоков и элементов списка

#  Перемещение блоков

    Сценарий: переместить параграф на блоком выше:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      Чеснок

      Зеленый лук

      Петрушка(*)
      """
    Когда жмем "Control+ArrowUp"
    Тогда документ будет содержать
      """
      Чеснок

      Петрушка(*)

      Зеленый лук
      """

Сценарий: переместить параграф на блоком ниже:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      Чеснок(*)

      Зеленый лук

      Петрушка
      """
    Когда жмем "Control+ArrowDown"
    Тогда документ будет содержать
      """
      Зеленый лук

      Чеснок(*)

      Петрушка
      """

Сценарий: переместить список на блоком ниже:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      -  (*)Чеснок

      -  Зеленый лук

      Петрушка

      Укроп
      """
    Когда жмем "Control+ArrowDown"
    Тогда документ будет содержать
      """
      Петрушка

      -  (*)Чеснок

      -  Зеленый лук

      Укроп
      """
Сценарий: переместить список на два блока выше:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      Петрушка

      Укроп

      -  (*)Чеснок

      -  Зеленый лук
      """
    Когда жмем "Control+ArrowUp Control+ArrowUp"
    Тогда документ будет содержать
      """
      -  (*)Чеснок

      -  Зеленый лук

      Петрушка

      Укроп
      """

Сценарий: переместить заметку с таблицей внутри на на блок выше:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      Петрушка

      [cut:Овощи:true]

      челы из школы

      [/cut]

      :::note Фрукты

      Нектарин(*)

      ||||
      |-|-|-|
      ||||
      ||||

      :::
      """
    Когда жмем "Control+ArrowUp"
    Тогда документ будет содержать
      """
      Петрушка

      :::note Фрукты

      Нектарин(*)

      ||||
      |-|-|-|
      ||||
      ||||

      :::

      [cut:Овощи:true]

      челы из школы

      [/cut]
      """

Сценарий: переместить заметку с таблицей на блок ниже:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      Петрушка

      :::note Фрукты

      Нектарин(*)

      ||||
      |-|-|-|
      ||||
      ||||

      :::

      [cut:Овощи:true]

      челы из школы

      [/cut]
      """
    Когда жмем "Control+ArrowDown"
    Тогда документ будет содержать
      """
      Петрушка

      [cut:Овощи:true]

      челы из школы

      [/cut]

      :::note Фрукты

      Нектарин(*)

      ||||
      |-|-|-|
      ||||
      ||||

      :::
      """

  # Перемещение элементов списка

  Сценарий: переместить пункт списка на два пункта ниже:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      -  петрушка

      -  зеленый лук(*)

      -  апельсин

      -  мандарин

      -  виноград
      """
    Когда жмем "Control+ArrowDown Control+ArrowDown"
    Тогда документ будет содержать
      """
      -  петрушка

      -  апельсин

      -  мандарин

      -  зеленый лук(*)

      -  виноград
      """

Сценарий: переместить пункт списка на два пункта выше:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      -  петрушка

      -  зеленый лук

      -  апельсин

      -  мандарин(*)

      -  виноград
      """
    Когда жмем "Control+ArrowUp Control+ArrowUp"
    Тогда документ будет содержать
      """
      -  петрушка

      -  мандарин(*)

      -  зеленый лук

      -  апельсин

      -  виноград
      """

  Сценарий: переместить вложенный пункт списка на два пункта выше:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      -  петрушка

         -  зеленый лук

            -  апельсин

               -  мандарин

               -  

               -  виноград(*)
      """
    Когда жмем "Control+ArrowUp Control+ArrowUp"
    Тогда документ будет содержать
      """
      -  петрушка
      
         -  зеленый лук
      
            -  апельсин
      
               -  виноград(*)
      
               -  мандарин
      
               -  

      """
  Сценарий: переместить вложенный пункт списка на два пункта ниже:
    Пусть находимся в "newCatalog > newArticle"
    И документ содержит
      """
      -  петрушка

         -  зеленый лук

            -  апельсин

               -  (*)

               -  мандарин

               -  виноград
      """
    Когда жмем "Control+ArrowDown Control+ArrowDown"
    Тогда документ будет содержать
      """
      -  петрушка

         -  зеленый лук

            -  апельсин

               -  мандарин

               -  виноград

               -  (*)
      """