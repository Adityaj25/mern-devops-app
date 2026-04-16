pipeline {
    agent any

    stages {

        stage('Build Docker Images') {
            steps {
                bat 'docker-compose build'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d'
            }
        }

        stage('Test Backend') {
            steps {
                bat 'docker exec backend node test.js'
            }
        }
    }
}
