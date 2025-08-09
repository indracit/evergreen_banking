// src/mocks/browser.js
import { setupWorker } from 'msw/browser'
import { http, HttpResponse } from 'msw';


const handlers = [
  http.get('/test', () => {
    return HttpResponse.json({"mesage": "Hello from MSW!"});
  }),

  http.get('/routes', () => HttpResponse.json([
        { path: '/', element: 'Home' }
      ])),

  http.post('/login', async ({ request }) => {
    const body = await request.json(); // ✅ parse incoming request
    return HttpResponse.json({
      received: body,
      message: "Login successful (mocked)"
    });
  }),
]

export const worker = setupWorker(...handlers);