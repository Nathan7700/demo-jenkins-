pipeline {
  agent any
  tools { nodejs 'node-20' }
  stages {
    stage('Build') { steps { sh 'npm install' } }
    stage('Test')  { steps { sh 'npm test' } }
    stage('Deploy') {
      when { branch 'main' }
      steps { echo 'Deploy...' }
    }
  }
  post { failure { echo 'Pipeline falhou' } }
}