# Запуск приложения

Спроекторованна приложение через [Create React App](https://github.com/facebook/create-react-app).

## Начальные скрипты

стартовать приложение вы можете загрузив с начала все нужные библиотеки с помощью команды:

### `npm install`

затем

### `npm start`

на локальном хосте в удобном для вас браузере [http://localhost:3000](http://localhost:3000)

#### Регистрация и авторизация была сделана через firebase а все данные пользователей лежат внутри файла db.json

Чтобы получить доступ и отопразить БД устонавливается отдельно [json-server](https://www.npmjs.com/package/json-server) с помощью команды:

### `npm i json-server`

Потом в отдельном терминале вводя команду

### `json-server --watch db.json --port 8000`

получаем данные и так же при входе через аккаунт пользователя

##### логин: spiderman@gmail.com

##### пароль: 12345678

при желании можете зарегестрироваться как другой пользователь
в приложении присутствуют такие функции как:

#### - регистрация

#### - авторизация

#### - добавление контакта (на правом верхнем углу навбара)

#### - удаление контакта

#### - редактирование контакта (при нажатии на контакт появляются две кнопки удаления и редактирование )
