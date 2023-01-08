# Чат

- Опубликованное в Netlify приложение: []()
- Опубликованное в Heroku (через контейнер docker) приложение: []()

## Что это?

Cамостоятельная практическая работа, выполняемая в рамках обучения на курсе [Мидл фронтенд-разработчик](https://praktikum.yandex.ru/middle-frontend/) от [Яндекс.Практикум](https://praktikum.yandex.ru) на спринтах №1-4.

## Текущий этап

Спринт 4 из 4

## Спринт 1

- Свёрстан макет приложения чата.
- Настроена сборка с использованием [Parcel](https://parceljs.org/) и раздача статики сервером на Express
- Свёрстаны основные страницы приложения с использованием шаблонизатора pug
- Приложение автоматически деплоится на [Netlify](https://www.netlify.com/) из ветки `deploy`

## Спринт 2

- Переход на TypeScript
- Реализация шины событий (`EventBus.ts`)
- Реализация компонента (`Block.ts`) с собственными пропсами, жизненным циклом и реактивным ререндером при изменении пропсов (использованы `Proxy`)
- Приложение переписано с учётом новых компонентов
- На основных формах реализована клиентская валидация
- Реализация аналога fetch для запросов к серверу (`HTTPTransport.ts`)

## Спринт 3

- Реализация клиентского роутера (`Route.ts`, `Router.ts`)
- Добавлен слой `api`
- Добавлен слой `controllers`
- Реализация центрального хранилища (`Store.ts`)
- Использован `WebSocket` для сообщений чата
- Реализован виртуальный список для сообщений чата (подгрузка сообщений по частям)
- Частично покрыто тестами (`Mocha`, `Chai`)
- В приложении реализованы следующее возможности:
  - Регистрация
  - Логин
  - Выход
  - Обновление данных профиля
  - Изменение аватара
  - Отправка и получение текстовых сообщений

## Спринт 4

- Переход с Parcel на [Webpack](https://webpack.js.org/)
- Dockerfile для создания [docker](https://www.docker.com/) -контейнера с дистрибутивом и сервером на Express
- Деплой контейнера на Heroku
- Настроен pre commit ([husky](https://typicode.github.io/husky/#/))

## Установка и запуск

### Установка

Установка зависимостей проекта:

```bash
npm i
```

### Сборка и запуск

Подготовка проекта (установка Husky):

```bash
npm run prepare
```

Сборка проекта. Используемый сборщик [Webpack](https://webpack.js.org/):

```bash
npm run build
```

Сборка контейнера docker (`./dist` + `./server`):

```bash
npm run build
```

Старт сервера Express для раздачи статики из `./dist`:

```bash
npm run start
```

Запуск тестов

```bash
npm run test
```

Статический анализ css и scss файлов. Используются правила Airbnb.

```bash
npm run stylelint
```
