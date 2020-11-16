
# 프로젝트 

PNU_OpenSW_CCM_Site

## 요구사항

 1. 백엔드 실행
 2. Docker 실행
 3. 프론트엔드 실행

- Node.js >= 14
- react
- react-bootstrap
- react-codemirror2
- postgres 12.4
- yarn
- axios 
- draft-js
- docker 
- react-draft-wysiwyg
- draftjs-to-html
- draft-js-plugins-editor
- draft-js-mathjax-plugin

## 설치방법

- Frontend :
1. git clone -b code적용 [https://github.com/ghqkd20/G-K_c_c_m.git](https://github.com/ghqkd20/G-K_c_c_m.git)
2. cd G-K_c_c_m
3. npm install
4. npm start

- Backend :
1. git clone https://github.com/rudgns9334/ccm_server-DB.git
2. cd ccm_server_DB
3. yarn
4. copy .env env
5. yarn db:create
6. yarn db:migrate
7. yarn db:seed
8. yarn dev

- DataBase :
1. docker pull postgres
2. docker run -d -p 5432:5432 --name pgsql -e POSTGRES_PASSWORD=postgres postgres

- OnlineJudge compile server : (for_judge branch 참조 )
1. docker pull ghqkd20/onlinejudge:0.2
2. docker run -d -p 3000:3000 ghqkd20/onlinejudge:0.2
* docker 환경설정 원할시  
 memory 설정 = > --memory=1g ,cpu설정 => --cpu-shares=2048
 ex> docker run -d -p 3000:3000 --memory=1g ghqkd20/onlinejudge:0.2

### **테스트 환경**

```
http:// localhost:3001/
http:// localhost:5000
http:// localhost:3000
```

## 참여인원

- 허정훈, [gjwjdgnsrnlg@naver.com](mailto:gjwjdgnsrnlg@naver.com) ,
- 정경훈, [rudgns8285@naver.com](mailto:rudgns8285@naver.com) ,
- 유태준, [zxc8283@daum.net](mailto:zxc8283@daum.net) ,

## 참고

 - Create React App([https://create-react-app.dev/docs/getting-started](https://create-react-app.dev/docs/getting-started/))

 - React-Bootstrap ([https://react-bootstrap.github.io/](https://react-bootstrap.github.io/))
 
 - Sequelize Manual([https://sequelize.org/master/manual/models-usage.html](https://sequelize.org/master/manual/models-usage.html))

## 라이센스

- CodeMirror([https://codemirror.net/](https://codemirror.net/)) : MIT
- react-markdown([https://www.npmjs.com/package/react-markdown](https://www.npmjs.com/package/react-markdown)) : MIT
- Draft-js ([https://www.npmjs.com/package/draft-js](https://draftjs.org/)) : MIT
- react-draft-wysiwyg ([https://www.npmjs.com/package/react-draft-wysiwyg](https://jpuri.github.io/react-draft-wysiwyg/#/))  : MIT
- draftjs-to-html ([https://www.npmjs.com/package/draftjs-to-html](https://github.com/jpuri/draftjs-to-html))  : MIT
- draft-js-mathjax-plugin ([https://www.npmjs.com/package/draft-js-mathjax-plugin](github.com/efloti/draft-js-mathjax-plugin)) : MIT
