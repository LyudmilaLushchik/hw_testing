# Домашнее задание к занятию "4.Организация тестирования"



Правила сдачи задания:

1. **Важно**: в рамках этого ДЗ можно использовать любой менеджер пакетов
1. **Важно**: всё должно собираться через Webpack (включая картинки и стили) и 
выкладываться на Github Pages через Appveyor.
1. Всё задание можно выполнить в виде одного Github-репозитория
1. В README.md должен быть размещён бейджик сборки и ссылка на Github Pages
1. В качестве результата присылайте проверяющему ссылки на ваши GitHub-проект(ы)

В качестве примера организации e2e-тестирования используйте код из каталога 
[`e2e`](https://github.com/netology-code/ahj-homeworks/blob/video/testing/e2e).

---

### Credit Card Validator

#### Легенда

Вам пришла задача: сделать виджет, позволяющий вводить номер карты (можете в 
качестве общего развития почитать про PCI DSS).

Общий вид виджета должен выглядеть следующим образом:

![](https://github.com/netology-code/ahj-homeworks/raw/video/testing/pic/validator.png)

Скриншот взят с сайта http://www.validcreditcardnumber.com.

Вам нужно провести исследовательскую работу и выяснить - на базе чего 
определяется, какой платёжной системе принадлежит определённая карта (не забудьте
про "Мир").

#### Описание

Используйте [следующий алгоритм](https://en.wikipedia.org/wiki/Luhn_algorithm) 
для проверки валидности номера карты.

Изображения для карт необходимо найти самостоятельно (помните, про авторские 
права и недопустимость нелегального использования). Обычно информацию об 
использованных изображениях размещают в файле `licenses.txt` и кладут в корень 
сайта (настройте для этого соответствующим образом Webpack).

Разделите логику проверки номера карты, выяснения принадлежности определённой 
платёжной системе и взаимодействия с DOM.

Напишите авто-тесты на функции проверки номера карты и принадлежности 
определённой платёжной системе.

В качестве источника номеров карт используйте сервис [FreeFormatter](https://www.freeformatter.com/credit-card-number-generator-validator.html).

Удостоверьтесь, что всё работает при прогоне тестов в Appveyor.

<details>
<summary>Подсказка</summary>

Для поиска изображений можете воспользоваться сервисом https://findicons.com**
</details>