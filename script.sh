#!/bin/bash

# Vai nella cartella backend e avvia npm run dev
echo "Avviando il backend..."
(cd backend && npm install && npm run dev) &

# Vai nella cartella frontend e avvia npm run dev
echo "Avviando il frontend..."
(cd frontend && npm install && npm run dev) &

# Attendere tutti i processi
wait
