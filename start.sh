#!/bin/bash

echo 'Iniciando frontend....'
cd frontend

npm install 
npm run dev &

sleep 10

echo 'Levando API....'
cd ../backend

./mvnw spring-boot:run &

echo 'Processo finalizado'