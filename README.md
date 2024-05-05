# First App
Deployed by [link](http://63.250.57.185:4200)

## To Quick Run using docker compose

Clone repo, navigate to root folder and run `docker compose up`

```
  git clone https://github.com/g0odf3els/First-App.git first-app
  cd first-app
  docker compose up
```

## Starting Frontend
- Navigate to folder `.\frontend\`
- Install required packages using `npm install`
- Run using  `ng serve`

## Starting Backend
- Navigate to folder `.\backend\WebApi\`
- Set the environment variable  `PostgresSQLConnection:ConnectionString` in `WebApi` with your own
- Run the API using `dotnet run`
