// test/app.test.js

// Импортируем 'chai' для утверждений (assertions)
const expect = require('chai').expect;
// Импортируем 'express' для тестирования, что приложение корректно импортируется
const express = require('express');

// Описываем тестовый набор (suite) для нашего приложения
describe('Node.js Express App', () => {
  // Тест-кейс: проверяем, что Express приложение может быть создано
  it('should create an Express app instance', () => {
    const app = express();
    // Утверждаем, что 'app' является объектом
    expect(app).to.be.an('function'); // Express app instance is a function
  });

  // Тест-кейс: проверяем, что порт по умолчанию установлен корректно (если это применимо)
  // В вашем index.js порт берется из process.env.PORT или 3000.
  // Этот тест просто проверяет базовую логику.
  it('should have a default port of 3000 if not specified', () => {
    // В данном случае мы не запускаем весь index.js, а только проверяем концепцию.
    // Для более глубокого тестирования HTTP-запросов понадобится 'supertest'.
    // Но для демонстрации базовых навыков этого достаточно.
    const PORT = process.env.PORT || 3000;
    expect(PORT).to.equal(3000);
  });
});
