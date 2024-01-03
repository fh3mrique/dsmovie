#!/bin/bash

echo "Qual stack você quer rodar?"
echo "1 - Stack Japão: React no front com Java Spring no back."
echo "2 - Stack Mobile: Flutter e node js"
read -p "Digite o número correspondente à sua escolha: " opcao

if [ "$opcao" == "1" ]; then
    # Stack Japão
    echo "Iniciando a Stack Japão..."
    
    echo "Passo 1: Iniciando o frontend..."
    cd frontend
    npm install
    npm run dev &
    sleep 10
    
    echo "Passo 2: Levando a API..."
    cd ../backend
    ./mvnw spring-boot:run &
    
    echo "Processo finalizado para a Stack Japão."
elif [ "$opcao" == "2" ]; then
    # Stack Mobile
    echo "Iniciando a Stack Mobile..."
    echo "Uma aplicação Flutter e mobile deverá ser iniciada."
    # Incluir aqui comandos ou mensagens relacionados ao Flutter e Node.js
else
    echo "Opção inválida. Por favor, escolha 1 ou 2."
fi