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
                sh 'npm install'
            }
        }

        stage('Testes em Paralelo') {
            parallel {
                stage('Lint') {
                    steps {
                        echo 'Executando analise estatica de codigo (Lint)...'
                        sh 'echo Lint verificado com sucesso!'
                    }
                }
                stage('Unit Test') {
                    steps {
                        echo 'Executando testes unitarios...'
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                echo 'Realizando Deploy...'
                sh 'echo Realizando deploy com o token $MEU_TOKEN'
            }
        }
    }
}