### NEW MARK DOWN

- npm install draft-js
- npm install --save react-draft-wysiwyg draft-js
- npm i react-katex
- npm install draftjs-to-html


# 프로젝트 이름

PNU_OpenSW_CCM_Site

## 요구사항

- Node.js >= 14
- react
- react-bootstrap
- postgres 12.4
- yarn
- docker 
## 설치방법

- Frontend :

1. git clone -b code적용 [https://github.com/ghqkd20/G-K_c_c_m.git](https://github.com/ghqkd20/G-K_c_c_m.git)
2. cd G-K_c_c_m
3. npm install
4. npm start

- Backend :

<<<<<<< HEAD
<<<<<<< HEAD
1. 깃다운
2. cd
=======
1. git clone https://github.com/rudgns9334/ccm_server-DB.git
2. cd ccm_server_DB
>>>>>>> f91d6e549c7a2cd78e29512e2f4fe0f06ad14ab6
=======
1. git clone https://github.com/rudgns9334/ccm_server-DB.git
2. cd ccm_server_DB
>>>>>>> 400953496cafa521bac530630263ef3a710bd290
3. yarn
4. copy .env env
5. yarn db:create
6. yarn db:migrate
7. yarn db:seed
8. yarn start

DataBase :

```
docker pull postgres
$ docker run -d -p 5432:5432 --name pgsql -e POSTGRES_PASSWORD=postgres postgres
```

### **테스트 환경**

```
http:// localhost:3000/
http:// localhost:5000
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
