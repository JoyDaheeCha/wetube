# WeTube

## Demo video
![](demo.gif)

## Description

Cloning Youtube with Vanilla JS and NodeJS.  
I made this project to study overall flow of website making for front-end and back-end.  
바닐라 JS와 NodeJs를 이용한 유튜브 클로닝 프로젝트입니다.  
웹사이트 개발 전반 과정에 대해 익히고 싶어서 만들게 되었습니다.

## Pages

- Home
  - Show entire videos
- Join / Login
  - General
  - Social accounts : git /  facebook
- Search
- User Detail
- Edit Profile
- Change Password
- Upload
- Video Detail
  - Show video information with user comments
- Edit Video

## How to execute the project

1. add .env file on your route folder.  
   The file has to include MONGO_URL, PORT, COOKIE_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, FB_ID,FB_SECRET, AWS_KEY, AWS_SECRET, MONGO_USERNAME, MONGO_PW

2. npm run build

3. npm run start

4. For more detail, please refer the scripts below.
   "dev:server": "nodemon --exec babel-node src/init.js --ignore '\*.scss'",  
   "dev:assets": "cd src && cross-env WEBPACK_ENV=development webpack -w",  
   "build:assets": "cd src && cross-env WEBPACK_ENV=production webpack",  
   "build:server": "babel src --out-dir build",  
   "copyAll": "xcopy .\\src\\static .\\build\\static\\ /s /y && xcopy .\\src\\views .\\build\\views\\ /s /y",  
   "build": "npm run build:server && npm run build:assets && npm run copyAll",  
   "prebuild": "rm -rf build",  
   "tunnel": "lt --port 4000",  
   "start": "node build/init.js"

## What I used for this project

- UI
    - Pug (View engine)
    - SCSS
- Bundler
    - Webpack
- Server
  - NodeJs
  - ExpressJS
- User Authentication
  - Passport
- DB
  - MongoDB Atlas

## To Do
- Deploy
