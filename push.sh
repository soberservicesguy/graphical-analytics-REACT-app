#!/usr/bin/expect -f
. ../../pipeline/push.sh --source-only

appName='socialapp'

# Set docker image location
dockerLocation='Local'
# dockerLocation='DockerRegistery'

# change for each project
baseURL_for_Heroku='https://social-mern-stack.herokuapp.com'
aws_s3_accessKeyId='AKIAW2YVB4HUWASTJCER'
aws_s3_secretAccessKey='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'
aws_s3_bucket='portfolio-apps-mern-native'

# almost same in all
baseURL_for_App='http://localhost:3001'
baseURL_for_Containerized_Version='http://localhost:80'
baseURL_for_Kubernetes_Version='http://hello-world.info:80'

# FIXED FOR ALL
frontendURL_for_App='http://localhost:3000'
frontendURL_for_Containerized_Version=$baseURL_for_Containerized_Version
frontendURL_for_Kubernetes_Version=$baseURL_for_Kubernetes_Version
frontendURL_for_Heroku=$baseURL_for_Heroku
utilities_file_path='./App/frontend/src/utilities.js'
app_frontend_file_path='./App/frontend/'
app_backend_file_path='./App/backend/'
app_backend_env_file_path='./App/backend/.env'
docker_images_path='./Containers_Version/image_sources'
kubernetes_containers_path='./Kubernetes_Version/container_sources'
kubernetes_path='./Kubernetes_Version'


# updateBackendRoutesIntoContainersAndKubernetesFolders $app_backend_file_path $docker_images_path $kubernetes_containers_path
# generateVersionAppBuildAndCopyToBackend $baseURL_for_App $utilities_file_path
# generateVersionContainerBuildAndCopyToBackend $baseURL_for_Containerized_Version $utilities_file_path  
# generateVersionKubernetesBuildAndCopyToBackend $baseURL_for_Kubernetes_Version $utilities_file_path
# generateDockerImages $kubernetes_containers_path $kubernetes_path $dockerLocation $appName $kubernetes_containers_path $kubernetes_path
# deployApp $baseURL_for_Heroku $app_backend_file_path $docker_images_path $kubernetes_containers_path $baseURL_for_Containerized_Version $baseURL_for_Kubernetes_Version $utilities_file_path $aws_s3_accessKeyId $aws_s3_secretAccessKey $aws_s3_bucket $app_backend_env_file_path
# createNewGithubPR $baseURL_for_App $app_backend_file_path $docker_images_path $kubernetes_containers_path $baseURL_for_Containerized_Version $baseURL_for_Kubernetes_Version $app_backend_env_file_path


echo 'running cd frontend'
cd frontend
echo 'running npm install'
npm install
echo 'running npm run build'
npm run build
echo 'running rm -rf ../backend/build/*'
rm -rf ../backend/build/*
echo 'running cp -r ./build/* ../backend/build/'
cp -r ./build/* ../backend/build/
echo 'running cd ../backend'
cd ../backend

echo 'Deploying to Heroku'
echo 'git add -A'
git add -A
echo 'git commit  -m "updated the app"'
git commit  -m "updated the app"
echo 'git push -u heroku master'
git push -u heroku master



echo 'Pushing to Github'
echo 'running cd ..'
cd ..
echo 'running git add -A'
git add -A
echo 'running git rm --cached my_own_pipeline_heroku_aws.sh'
git rm --cached my_own_pipeline_heroku_aws.sh
echo 'running git rm --cached node_modules'
git rm --cached node_modules -r

currentDateTimestamp=$(date +%d-%b_At_%H-%M)
echo 'running git checkout -b $currentDateTimestamp'
git checkout -b $currentDateTimestamp
echo 'running git commit -m "worked more"'
git commit -m "worked more"
echo 'running git push -u origin $currentDateTimestamp'
git push -u origin $currentDateTimestamp