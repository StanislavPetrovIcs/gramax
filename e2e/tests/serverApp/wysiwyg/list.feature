#language: ru

Функция: Работа с маркированным списком.

        Сценарий: Пользователь создает маркированный список с помощью клавиатуры.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть фокус пользователя находится на 0 уровне в статье.
            Когда нажимаем "-" и пробел.
            То появляется значок маркированного списка.
            И пункт списка находится на 2 уровне в статье.

        Сценарий: Пользователь создает маркированный список с помощью панели.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть фокус пользователя находится на 0 уровне в статье.
            Когда нажимаем на панели редактирования кнопку <Маркированный список>.
            То появляется значок списка.
            И пункт списка находится на 2 уровне в статье.

        Сценарий: Пользователь вводит текст в пункт списка.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт маркированного списка без текста.
            Пусть фокус пользователя находится в пункте списка.
            Когда вводим текст "текст" и нажимаем Enter.
            То фокус переходит на следующую строку.
            И появляется значок маркированного списка.

        Сценарий: Пользователь пишет абзац после списка.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт маркированного списка с текстом "текст".
            Пусть фокус пользователя находится в пункте списка после слова "текст".
            Когда нажимаем Enter.
            То фокус переходит на следующую строку.
            И появляется значок маркированного списка.
            Когда нажимаем Enter.
            То пункт маркированного списка пропадает.
            И фокус находится на 0 уровне в статье.

        Сценарий: Пользователь удаляет текст из пункта списка, а затем отменяет это действие.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт маркированного списка с текстом "текст".
            Пусть фокус пользователя находится в пункте списка после слова "текст".
            Когда нажимаем Bacspace.
            То удаляется последняя буква "т".
            Когда нажимаем Cmd+Bacspace.
            То удаляется все слово "текс".
            Но пункт маркированного списка остается.
            Когда нажимаем Cmd+Z.
            То в пункте появляется слово "текс".
            Когда нажимаем Cmd+Z.
            То в пункте к слову "текс" добавляется "т".
        
        Сценарий: Пользователь создает вложенные списки.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт маркированного списка с текстом "текст".
            Пусть фокус пользователя находится в пункте списка после слова "текст".
            Когда нажимаем Enter, а затем Tab.
            То создается маркированный пункт списка на 3 уровне в статье.
            Когда вводим "тест", нажимаем Enter, а затем Tab.
            То создается маркированный пункт списка на 4 уровне в статье.
            Когда вводим "тест", нажимаем Enter, а затем Tab.
            То создается маркированный пункт списка на 5 уровне в статье.

Функция: Работа с нумерованным списком.

        Сценарий: Пользователь создает нумерованный список с помощью панели.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть фокус пользователя находится на 0 уровне в статье.
            Когда нажимаем на панели редактирования кнопку <Нумерованный список>.
            То появляется значок нумерованного списка с цифрой 1.
            И пункт списка находится на 2 уровне в статье.

        Сценарий: Пользователь создает нумерованный список с помощью клавиатуры.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть фокус пользователя находится на 0 уровне в статье.
            Когда нажимаем "1." и пробел.
            То появляется значок нумерованного списка с цифрой 1.
            И пункт списка находится на 2 уровне в статье.

        Сценарий: Пользователь вводит текст в пункт списка.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт нумерованного списка "1" без текста.
            Пусть фокус пользователя находится в пункте списка.
            Когда вводим текст "текст" и нажимаем Enter.
            То фокус переходит на следующую строку.
            И появляется значок нумерованного списка "2".

        Сценарий: Пользователь пишет абзац после списка.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт маркированного списка "1" с текстом "текст".
            Пусть фокус пользователя находится в пункте списка после слова "текст".
            Когда нажимаем Enter.
            То фокус переходит на следующую строку.
            И появляется значок нумерованного списка "2".
            Когда нажимаем Enter.
            То пункт маркированного списка пропадает.
            И фокус находится на 0 уровне в статье.

        Сценарий: Пользователь удаляет текст из пункта списка, а затем отменяет это действие.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт нумерованного списка "1" с текстом "текст".
            Пусть фокус пользователя находится в пункте списка после слова "текст".
            Когда нажимаем Bacspace.
            То удаляется последняя буква "т".
            Когда нажимаем Cmd+Bacspace.
            То удаляется все слово "текс".
            Но пункт нумерованного списка остается.
            Когда нажимаем Cmd+Z.
            То в пункте появляется слово "текс".
            Когда нажимаем Cmd+Z.
            То в пункте к слову "текс" добавляется "т".
        
        Сценарий: Пользователь создает вложенные списки.
            Пусть пользователь находится в разделе "localapp > wysiwyg > list".
            Пусть в статье содержится 1 пункт нумерованного списка "1" с текстом "текст".
            Пусть фокус пользователя находится в пункте списка после слова "текст".
            Когда нажимаем Enter, а затем Tab.
            То создается нумерованный пункт списка "1" на 3 уровне в статье.
            Когда вводим "тест", нажимаем Enter, а затем Tab.
            То создается нумерованный пункт списка "1" на 4 уровне в статье.
            Когда вводим "тест", нажимаем Enter, а затем Tab.
            То создается нумерованный пункт списка "1" на 5 уровне в статье.

            
