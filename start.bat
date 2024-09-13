@echo off
start cmd /k "cd backend && npm install && nodemon .\server.js"
start cmd /k "cd frontend && npm install && npm run dev"
