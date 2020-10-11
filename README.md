# libur-nasional-backend

Libur Nasional Indonesia

## Setup App

1. Install global dependency:
   ```sh
   npm i -g sequelize-cli
   # or
   yarn global add sequelize-cli
   ```
2. Install local dependencies:
   ```sh
   npm i
   # or
   yarn
   ```
3. Edit `.env`

## Starting App

Without migrations

```sh
npm start
# or
yarn start
```

Access API server by opening http://localhost:8000

## API Endpoints

### /api/v1

| Endpoint   | HTTP | Description              | Body |
| ---------- | ---- | ------------------------ | ---- |
| `/api/v1/` | GET  | List of national holiday | -    |
