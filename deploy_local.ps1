# deploy_local.ps1
# Этот скрипт имитирует CI/CD пайплайн для локального развертывания Docker-образа.

Write-Host "--- Запуск локального CI/CD пайплайна ---" -ForegroundColor Green

# 1. Определение переменных
$PROJECT_ROOT = Get-Item -Path $PSScriptRoot
$IMAGE_NAME = "my-node-webapp-local" # Имя локального Docker-образа

Write-Host "Рабочая директория проекта: $($PROJECT_ROOT.FullName)" -ForegroundColor Cyan
Write-Host "Имя Docker-образа: $IMAGE_NAME" -ForegroundColor Cyan

# 2. Остановка и удаление предыдущих контейнеров (если есть)
Write-Host "`n--- Остановка и удаление предыдущего контейнера Docker (если запущен) ---" -ForegroundColor Yellow
$runningContainerId = docker ps -aq --filter "ancestor=$IMAGE_NAME"
if ($runningContainerId) {
    Write-Host "Найден запущенный контейнер с образом '$IMAGE_NAME', ID: $runningContainerId" -ForegroundColor Yellow
    docker stop $runningContainerId
    Write-Host "Контейнер остановлен." -ForegroundColor Yellow
    docker rm $runningContainerId
    Write-Host "Контейнер удален." -ForegroundColor Yellow
} else {
    Write-Host "Запущенных контейнеров с образом '$IMAGE_NAME' не найдено." -ForegroundColor DarkYellow
}

# 3. Удаление старого Docker-образа (для чистой сборки)
Write-Host "`n--- Удаление старого Docker-образа (если существует) ---" -ForegroundColor Yellow
$oldImageId = docker images -q $IMAGE_NAME
if ($oldImageId) {
    Write-Host "Найден старый образ '$IMAGE_NAME', ID: $oldImageId" -ForegroundColor Yellow
    docker rmi $oldImageId
    Write-Host "Образ удален." -ForegroundColor Yellow
} else {
    Write-Host "Старый образ '$IMAGE_NAME' не найден." -ForegroundColor DarkYellow
}

# 4. Сборка нового Docker-образа
Write-Host "`n--- Сборка нового Docker-образа ---" -ForegroundColor Green
# Переходим в корневую директорию проекта, где находится Dockerfile
Set-Location $PROJECT_ROOT.FullName
docker build -t $IMAGE_NAME .
if ($LASTEXITCODE -ne 0) {
    Write-Host "Ошибка при сборке Docker-образа. Выход." -ForegroundColor Red
    exit 1
}
Write-Host "Docker-образ '$IMAGE_NAME' успешно собран." -ForegroundColor Green

# 5. Запуск нового Docker-контейнера
Write-Host "`n--- Запуск нового Docker-контейнера ---" -ForegroundColor Green
# Порт 3000 на хосте маппируется на порт 3000 внутри контейнера
docker run -d -p 3000:3000 --name my-node-app-container $IMAGE_NAME
if ($LASTEXITCODE -ne 0) {
    Write-Host "Ошибка при запуске Docker-контейнера. Возможно, порт 3000 занят." -ForegroundColor Red
    Write-Host "Попробуйте вручную освободить порт 3000 или перезапустить Docker Desktop." -ForegroundColor Red
    exit 1
}
Write-Host "Docker-контейнер '$IMAGE_NAME' успешно запущен на порту 3000." -ForegroundColor Green
Write-Host "Приложение доступно по адресу: http://localhost:3000" -ForegroundColor Green

Write-Host "`n--- Локальный CI/CD пайплайн завершен ---" -ForegroundColor Green