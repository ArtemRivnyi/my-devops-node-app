// index.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`[Server] Приложение запускается на порту: ${PORT}`);
console.log(`[Server] Текущая директория: ${__dirname}`);

// Middleware для отдачи статических файлов (HTML, CSS, JS) из папки 'public'
// Все файлы в 'public' будут доступны по корневому URL.
// Например, public/style.css будет доступен по /style.css
const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));
console.log(`[Server] Настроена отдача статических файлов из: ${publicPath}`);

// Middleware для обработки данных формы (парсинг URL-encoded данных)
app.use(bodyParser.urlencoded({ extended: true }));
console.log('[Server] Включен Body-Parser для обработки форм.');

// Вспомогательная функция для безопасной отправки HTML-файлов
const sendHtmlFile = (fileName, req, res) => {
  const filePath = path.join(publicPath, fileName);
  console.log(`[Request] ${req.method} ${req.originalUrl} -> Попытка отправить: ${filePath}`);
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error(`[Error] Ошибка при отправке файла ${fileName}:`, err);
      // Если файл не найден или другая ошибка, отправляем 404
      res.status(404).send('<h2>Ошибка 404: Страница не найдена</h2><p>Извините, запрашиваемая страница не существует.</p><a href="/">Вернуться на главную</a>');
    } else {
      console.log(`[Success] Файл ${fileName} успешно отправлен для ${req.originalUrl}`);
    }
  });
};

// Маршрут для главной страницы
app.get('/', (req, res) => {
  sendHtmlFile('index.html', req, res);
});

// Маршрут для страницы "О сайте"
app.get('/about', (req, res) => {
  sendHtmlFile('about.html', req, res);
});

// Маршрут для страницы "Связаться"
app.get('/contact', (req, res) => {
  sendHtmlFile('contact.html', req, res);
});

// Маршрут для обработки отправки формы
app.post('/submit-contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('--- Получено сообщение с формы ---');
  console.log(`Имя: ${name || 'N/A'}`); // Добавлено N/A, если поле пустое
  console.log(`Email: ${email || 'N/A'}`);
  console.log(`Сообщение: ${message || 'N/A'}`);
  console.log('---------------------------------');

  // В реальном приложении здесь вы бы сохранили данные, отправили email и т.д.
  // Для демонстрации просто отправляем подтверждение.
  res.status(200).send('<h2>Спасибо за ваше сообщение!</h2><p>Мы свяжемся с вами в ближайшее время.</p><br><a href="/">Вернуться на главную</a>');
});

// Обработка всех остальных (не найденных) маршрутов - 404 Not Found
app.use((req, res) => {
  console.warn(`[Warning] Запрос к несуществующему маршруту: ${req.originalUrl}`);
  res.status(404).send('<h2>Ошибка 404: Страница не найдена</h2><p>Извините, запрашиваемая страница не существует.</p><a href="/">Вернуться на главную</a>');
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`[Server] Сервер запущен и слушает на http://localhost:${PORT}`);
});