# backgammon
A new backgammon board game from scratch

init project:
1.download node + npm
2.download angular cli
3.fork project

init Server:

1. create a node server + express using npm in the server folder
    a. create a folder name 'server'
    b. install express using generator: 'install -g express-generator@4'
    d. create app: 'express'
    e. type 'npm install' to get all dependencies.
2. to start run - 'DEBUG=server:* npm start'

init client:

1. create  an angular 2 project
    a. create a folder name client
    b. install angular cli: 'npm install -g angular-cli'
    c. create a new project in client folder: 'ng new backgammon'
2. to start run 'cd backgammon' +  'ng serve'
3. browser to: 'http://localhost:4200/'.


build a new backgammon game:

client:

1. create a new component :
    a. add components folder inside 'app' folder
    b. add new component: piece - 'ng g component piece'
    c. add new component: dice - 'ng g component dice'
    d. add new component: point - 'ng g component point'
    e. add new component: player - 'ng g component player'

2.
