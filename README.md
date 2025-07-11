My DevOps Node.js App
Демонстрационный Проект DevOps: Контейнеризированное Веб-Приложение с CI/CD и Концепцией Облачного Развертывания
Этот проект служит практической демонстрацией ключевых навыков DevOps, охватывающих разработку веб-приложений, контейнеризацию, автоматизацию CI/CD и принципы облачного развертывания и мониторинга.

Цели проекта:
Разработать простое веб-приложение на Node.js.

Контейнеризовать приложение с использованием Docker для упрощения развертывания.

Настроить автоматизированный CI/CD пайплайн (GitHub Actions), включающий сборку и тестирование.

Продемонстрировать понимание принципов облачного развертывания и мониторинга (концептуально).

Используемые технологии и практики:
Node.js & Express.js: Для разработки легковесного веб-сервера.

Docker: Для контейнеризации приложения, обеспечения переносимости и изоляции.

Docker Compose: Для определения и запуска многоконтейнерных приложений (в данном случае, одного сервиса), управления его жизненным циклом и связывания портов/томов.

morgan (Node.js middleware): Для HTTP-логирования запросов в консоль приложения.

Mocha & Chai: Фреймворк для тестирования и библиотека для утверждений, используемые для юнит-тестирования приложения.

GitHub: Для управления версиями исходного кода и хостинга репозитория.

GitHub Actions: Для автоматизации CI/CD пайплайна (сборка, тестирование).

Структура проекта:
my-devops-node-app/
├── public/                     # Статические файлы (HTML, CSS)
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── style.css
├── test/                       # Файлы с тестами
│   └── app.test.js
├── index.js                    # Основной файл приложения Node.js
├── package.json                # Описание проекта и его зависимостей
├── package-lock.json           # Заблокированные версии зависимостей
├── Dockerfile                  # Инструкции для сборки Docker-образа
├── docker-compose.yml          # Определение сервисов Docker Compose
├── .dockerignore               # Файлы и папки, игнорируемые при сборке Docker-образа
└── README.md                   # Этот файл

Запуск приложения локально (с Docker Compose):
Клонируйте репозиторий:

git clone https://github.com/ArtemRivnyi/my-devops-node-app.git
cd my-devops-node-app

Убедитесь, что Docker Desktop запущен.

Запустите приложение с помощью Docker Compose:

docker-compose up -d --build

up: Создает и запускает сервисы.

-d: Запускает в фоновом режиме.

--build: Пересобирает образ, если есть изменения в Dockerfile или package.json.

Проверьте состояние контейнера:

docker-compose ps

Статус должен быть Up.

Просмотрите логи приложения (в реальном времени):

docker-compose logs -f web

Откройте приложение в браузере:
Перейдите по адресу: http://localhost:3000/

Локальный запуск тестов:
Установите зависимости для разработки:

npm install

Запустите тесты:

npm test

Вы должны увидеть отчет Mocha о пройденных тестах.

Концептуальное Облачное Развертывание (без фактических затрат):
Хотя это приложение не развернуто в реальной облачной среде из-за ограничений по стоимости, ниже описан подход, который был бы использован для развертывания на AWS EC2 с использованием Docker.

Подготовка AWS-окружения:
Создание VPC и подсетей: Настройка виртуальной частной сети для изоляции ресурсов.

Настройка Security Group: Открытие порта 3000 (HTTP) для входящего трафика.

Создание IAM Role: Роль с минимальными необходимыми разрешениями для EC2-инстанса (например, для доступа к S3, CloudWatch Logs).

Провизионирование EC2-инстанса:
Запуск экземпляра Amazon EC2 (например, t2.micro или t3.micro для тестовых целей) с операционной системой, поддерживающей Docker (например, Amazon Linux 2 или Ubuntu Server).

Присоединение созданной IAM Role к инстансу.

Установка Docker на EC2:
Подключение по SSH к EC2-инстансу.

Установка Docker и Docker Compose (если требуется для оркестрации нескольких контейнеров) на инстанс.

Развертывание приложения:
Вариант 1 (Docker Run): Загрузка Docker-образа напрямую из Docker Hub (если образ опубликован) и запуск его с маппингом портов:

docker run -d -p 80:3000 my-devops-node-app:latest

(Предполагается, что на хосте EC2 порт 80 будет мапиться на 3000 в контейнере, а трафик на 80 разрешен в Security Group).

Вариант 2 (Docker Compose): Клонирование репозитория на EC2-инстанс и запуск с помощью docker-compose up -d.

Доступ к приложению:
Приложение будет доступно по публичному IP или DNS-имени EC2-инстанса.

Мониторинг и Логирование (концептуально):
Для полноценного DevOps-проекта критически важен мониторинг и централизованный сбор логов.

Логирование в приложении:
Как продемонстрировано в index.js, приложение использует morgan для логирования HTTP-запросов и console.log для важных системных событий. Эти логи выводятся в stdout/stderr контейнера.

Централизованный сбор логов:
В облачной среде (например, AWS) эти логи могут быть автоматически собраны сервисом AWS CloudWatch Logs. Docker-контейнеры могут быть настроены для отправки своих логов напрямую в CloudWatch.

Альтернативно, можно использовать ELK-стек (Elasticsearch, Logstash, Kibana) или Grafana Loki для сбора и анализа логов.

Мониторинг производительности:
Для мониторинга здоровья и производительности EC2-инстанса и контейнера можно использовать AWS CloudWatch Metrics.

Для более детального мониторинга на уровне приложения (CPU, RAM, использование диска, количество запросов, задержки) можно интегрировать Prometheus с Grafana или использовать Application Performance Monitoring (APM) инструменты, такие как New Relic или Datadog.

CI/CD Пайплайн (GitHub Actions):
Проект включает базовый CI/CD пайплайн, реализованный с помощью GitHub Actions. Этот пайплайн автоматически:

Собирает Docker-образ при каждом push в репозиторий.

Запускает юнит-тесты и интеграционные тесты для Node.js приложения.

(Концептуально) может быть расширен для автоматического push Docker-образа в Docker Hub или AWS ECR.

Следующие шаги для развития проекта:
Расширить CI/CD пайплайн для автоматического push Docker-образа в Docker Hub или AWS ECR.

Настроить полноценное облачное развертывание (если появятся возможности).

Интегрировать реальные инструменты мониторинга и логирования.

Добавить более сложные тесты (например, интеграционные тесты с использованием Supertest) для проверки HTTP-маршрутов и ответов приложения.