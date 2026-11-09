# Student Authentication API

Node.js, Express, and MongoDB authentication API for Club Apex students.

## Setup

```sh
npm install
copy .env.example .env
npm test
```

Set a long, random `JWT_SECRET` in `.env`. `JWT_EXPIRES_IN` defaults to `1d`, and `CLIENT_ORIGIN` controls the credentialed CORS origin.

## API

### `POST /api/auth/login`

```json
{ "email": "ada@example.com", "password": "password123" }
```

Returns `200` with `{ "success": true, "data": { "student": {} } }` and an httpOnly authentication cookie. Invalid credentials return `401` with the same generic response whether the email exists or not. The route permits five attempts per IP per 15 minutes.

### `GET /api/auth/me`

Requires the authentication cookie or `Authorization: Bearer <token>`. Returns `200` with the sanitized student record; missing, invalid, or expired tokens return `401`.

### `POST /api/auth/logout`

Always returns `200` and clears the cookie. Logout is intentionally stateless and idempotent because no token denylist or refresh-token store exists.

All error responses use `{ "success": false, "message": "..." }`; validation errors additionally include an `errors` array.

## Manual verification

```sh
curl -i -c cookies.txt -H "Content-Type: application/json" -d "{\"email\":\"ada@example.com\",\"password\":\"password123\"}" http://localhost:5000/api/auth/login
curl -i -b cookies.txt http://localhost:5000/api/auth/me
curl -i -b cookies.txt -X POST http://localhost:5000/api/auth/logout
```
