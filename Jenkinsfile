pipeline{
  agent none
    stages{
      stage('Git Checkout'){
      agent {label 'Node 1'}
          steps{ 
          git credentialsId: 'Gitcredentials', url: 'https://github.com/PitchairamanJobs/nodejs-docker.git'
          }
      }
      stage('Docker Build'){
      agent {label 'Node 1'}
          steps{
          bat 'docker build -t pitchairaman/nodejsapp:v1 .'
          }
      }
      stage('Docker Image Push'){
      agent {label 'Node 1'}
         withCredentials([string(credentialsId: 'dockerPass', variable: 'dockerPassword')]) {
            bat "docker login -u pitchairaman -p ${dockerPassword}"
         }
            bat 'docker push pitchairaman/nodejsapp:v1'
       }
    }
        
   }
 


















