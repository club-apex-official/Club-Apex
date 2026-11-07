# Backend

Express and MongoDB API for Club Apex student registration.

## Setup

```sh
cd server
npm install
copy .env.example .env
```

Configure these environment variables in `.env`:

| Variable | Description | Default |
| --- | --- | --- |
| `PORT` | HTTP port | `5000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://127.0.0.1:27017/club-apex` |
| `CLIENT_ORIGIN` | Allowed frontend origin | `http://localhost:5173` |

Run the service with `npm run dev`, run normally with `npm start`, or run the test suite with `npm test`.

## Register a student

`POST /api/students/register`

Request:

```json
{
  "fullName": "Ada Lovelace",
  "prn": "PRN12345",
  "email": "ada@example.com",
  "password": "password123"
}
```

Success (`201`):

```json
{
  "success": true,
  "message": "Student registered successfully",
  "data": { "id": "...", "fullName": "Ada Lovelace", "prn": "PRN12345", "email": "ada@example.com", "createdAt": "..." }
}
```

Validation error (`400`):

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [{ "field": "email", "message": "Email must be valid" }]
}
```

Duplicate PRN or email (`409`):

```json
{ "success": false, "message": "A student with this PRN already exists" }
```
