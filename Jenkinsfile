pipeline {
    agent any

    tools {
        nodejs 'node-20'
    }

    environment {
        MEU_TOKEN = credentials('meu-token')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Instalando dependencias...'
                bat 'npm install'
            }
        }

        stage('Testes em Paralelo') {
            parallel {
                stage('Lint') {
                    steps {
                        echo 'Executando analise estatica de código (Lint)...'
                        bat 'npm run --if-present lint'
                    }
                }
                stage('Unit Test') {
                    steps {
                        echo 'Executando testes unitarios...'
                        bat 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Realizando Deploy...'
                bat 'echo Realizando deploy com o token %MEU_TOKEN%'
            }
        }
    }
}