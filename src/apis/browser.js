// src/mocks/browser.js
import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw';
import jwt from "jsonwebtoken";

const accessTokenSecret = "IndraCITS";  
const refreshTokenSecret = "jithupandian";


function generateAccessToken(user) {
  return jwt.sign({ userId: user.id, email: user.email }, accessTokenSecret, { expiresIn: '15m' });
}

function generateRefreshToken(user) {
  return jwt.sign({ userId: user.id, email: user.email }, refreshTokenSecret, { expiresIn: '7d' });
}


const handlers = [
  http.get('/test', () => {
    return HttpResponse.json({"mesage": "Hello from MSW!"});
  }),

  http.get('/routes', () => HttpResponse.json([
        { path: '/', element: 'Home' }
      ])),

  http.get('/login', () => HttpResponse.json({
        "message": "Login successful!"
      })),
]

export const worker = setupWorker(...handlers);