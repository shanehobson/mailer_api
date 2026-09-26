# Mailer API

A small Node.js/Express service that receives contact-form submissions and forwards them as HTML emails through Gmail with Nodemailer. It was built as the backend for the contact forms on the [Hobson Electric website](https://github.com/shanehobson/hobson_electric).

> Built in 2018. This project is not actively maintained.

## Features

- Accepts form data as JSON or URL-encoded bodies
- Sends a formatted email with the sender's name, phone number, email address, and message
- Separate endpoints for each form on the site (general, commercial, residential, about)
- Permissive CORS headers so a static front end on another origin can post to it
- Serves static files from a `dist/` directory if present

## Tech Stack

- Node.js
- Express
- Nodemailer (Gmail transport)
- body-parser

## Getting Started

```bash
npm install
npm start
```

The server listens on the port in the `PORT` environment variable, or `3002` if it isn't set.

### Configuration

The Gmail password is read from a local `secrets.js` file in the project root, which is git-ignored:

```js
// secrets.js
module.exports = { password: '<gmail app password>' };
```

The sending account and recipient addresses are set in `emailer.js`.

## API Endpoints

All endpoints accept the same body and send the same email.

| Method | Path | Description |
| --- | --- | --- |
| POST | `/` | General contact form |
| POST | `/commercial` | Commercial services form |
| POST | `/residential` | Residential services form |
| POST | `/about` | About page form |

Request body:

| Field | Description |
| --- | --- |
| `name` | Sender's name |
| `number` | Sender's phone number |
| `email` | Sender's email address |
| `message` | Message text |

## Project Structure

```
server.js    # Express app, CORS, and routes
emailer.js   # Nodemailer transport and email template
```
