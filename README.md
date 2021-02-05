# App for HZ Frequencies

This is an express application with information on hz frequencies and links to listen to them. 
<br>



<br>

### To Update CONFIG.JSON
*make these changes to config.json file:*
```js 
{
  "development": {
    "username": "postgres",
    "password": "[your password]",
    "database": "[yourprojectname]_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": "[your password]",
    "database": "[yourprojectname]_auth_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": "[your password]",
    "database": "[yourprojectname]_auth_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```
<br>

### To See This Project:
<strong>run</strong>
<br>
*npm start + localhost:3000* 
<br>
<strong>OR</strong> 
<br>
*node app + localhost:3000* 
<br>
<strong>from command line</strong>

<br>

<strong>OR</strong>

<br>

https://hzfreq.herokuapp.com/

<br>

### To Deploy on Heroku
*heroku create [app_name]* - <strong>create app in heroku</strong> <br>
*git push heroku main* - <strong>push code to heroku app</strong> <br>
*heroku ps:scale web=1* - <strong>check deployment</strong> <br>
*heroku open* - <strong>open app in heroku</strong> <br>

<br>

<hr>
<br>

### DEV NOTE:
<br>
This application is constantly undergoing construction. There will be ongoing commits and pushes to git as well as heroku. <br>
<br>
Please check back for updates, fixes, and cool new features! <br>
<br>
:)))