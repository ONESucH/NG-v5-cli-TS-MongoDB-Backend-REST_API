<h2>Стартовый шаблон настройки Angular5 CLI + Node.js + TypeScript + MongoDB + REST API + Express</h2><br><br>

<h4>Необходимо для работы</h4><br>

<ol>
  <li><a href="https://nodejs.org/en/">NodeJs</a></li><br>
  <li><a href="https://www.mongodb.com/download-center?jmp=homepage#community">MongoDB</a></li><br>
  <li><a href="https://git-scm.com/downloads">GitBush</a></li><br>
</ol><br><br>

<h4>Небольшая документация для развертывания проекта</h4><br>

<ol>
<li>git clone https://github.com/ONESucH/NG-v5-cli-TS-MongoDB-Backend-REST_API.git</li><br>
<li>cd NG-v5-cli-TS-MongoDB-Backend-REST_API/</li><br>
<li>npm install</li><br>
</ol><br>

<h4>Что мы сделали?</h4><br>

<ul>
<li>1. Склонировали к себе репозиторий с необходимыми файлами</li><br>
<li>2. С помощью консоли перешли в нужную деррикторию</li><br>
<li>3. Устанавливаем все зависимости записанные в <a href="">package.json</a></li><br>
</ul><br>

<span>Запускаем - <a href="">"npm start"</a></span><br><br>

<span>Проект развернули, но БД MongoDB - пуста, заполним её немного json файлами</span><br><br>

<p>Пишем в консоли:(mongoDB должен быть запущенным <a href="">"npm start"</a>)</p><br>
<p>curl -i -X POST -H 'Content-Type: application/json' -d '{"title":"Book name", "img":"http://qblog.be/imagecube/imagecube.php?stickers=yyyyggygrrygryyrrryrgrrgggg&size=200", "author":"Name author", "description":"Book description", "update_date":"10.10.2000"}' localhost:5050/book</p><br>
<p>Заполним штук 5 пользователей(для наглядности)</p><br><br>

<h3>Браузер должен открыть страницу в браузере по url <a href="">localhost:5050</a> - если страница не открылась открываем в ручную</h3><br><br>

Ссылка на <a href="https://onesuch.github.io/NG-v5-cli-TS-MongoDB-Backend-REST_API/dist">Demo</a> работу. (необходим curl | mongoDB) <br>

<h4>Как пользоваться curl?</h4><br>
<ol>
<li>
  Получить полный список, узнать hash(id)<br>
  curl localhost:5050/book
</li><br>
<li>
  Удалить по hash(id) - чтобы узнать hash используйте GET запрос, см. 1 вариант<br>
  curl -i -X DELETE localhost:5050/book/5a57244e1bee3011d838a156
</li><br>
<li>
  Добавить запись в БД MongoDB<br>
  curl -i -X POST -H 'Content-Type: application/json' -d '{"title":"Book name", "img":"http://qblog.be/imagecube/imagecube.php?stickers=yyyyggygrrygryyrrryrgrrgggg&size=200", "author":"Name author", "description":"Book description", "update_date":"10.10.2000"}' localhost:5050/book
</li><br>
<li>
  Отредактировать данные по hash(id), в нашем слуае hash -> 5a57244e1bee3011d838a156 <- имеет такой вид <br>
  curl -i -X PUT -H 'Content-Type: application/json' -d '{"numberofsaves": "272"}' localhost:5050/book/5a57244e1bee3011d838a156
</li><br>
</ol>
