pipeline{
    agent any

    environment{
        CONTAINER_NAME = "nestjs-app"
        IMAGE_NAME = "nestjs-image"
        EMAIL = "omkarbarbade12800@gmail.com"
        PORT = "3000"
    }

    stages{
        stage('Clone Repo'){
            steps{
                git branch : 'main',url : 'https://github.com/Omkar9689/NestJS-Hosting-using-CICD.git'
            }
        }

        stage('Build Docker Image'){
            steps{
                sh 'docker build -t $IMAGE_NAME .'
            }
        }
        
        
        stage('Stop and Remove Previoud Container'){
            steps{
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                '''
            }
        }

        stage('Docker Container run'){
            steps{
                sh '''
                    docker run -d -p ${PORT}:${PORT} --name $CONTAINER_NAME $IMAGE_NAME
                '''
            }
        }

        stage('Send Email Notification'){
            steps{
                emailtext(
                    subject: "NestJS App Deployed Successfully on EC2!",
                    body: "Your Nest JS app is Deployed! http://16.170.165.12:${PORT}/",
                    to: "${EMAIL}"
                )
            }
        }
    }
}