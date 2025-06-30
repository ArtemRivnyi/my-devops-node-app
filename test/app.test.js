// test/app.test.js

// Импортируем 'chai' для утверждений (assertions) с использованием синтаксиса ES-модулей
import { expect } from 'chai';
// Импортируем 'express'
import express from 'express';

// Описываем тестовый набор (suite) для нашего приложения
describe('Node.js Express App', () => {
  // Тест-кейс: проверяем, что Express приложение может быть создано
  it('should create an Express app instance', () => {
    const app = express();
    // Утверждаем, что 'app' является функцией
    expect(app).to.be.an('function');
  });

  // Тест-кейс: проверяем, что порт по умолчанию установлен корректно
  it('should have a default port of 3000 if not specified', () => {
    const PORT = process.env.PORT || 3000;
    expect(PORT).to.equal(3000);
  });
});
