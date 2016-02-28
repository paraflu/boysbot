#!/bin/sh
export TELEGRAM_TOKEN=180378752:AAGm_LERBrPgPWNN8YMth6oxCtNsO5DKfAY
export TELEGRAM_WEBHOOK=serene-wave-12563.herokuapp.com
export DATABASE_URL=postgres://etrpblywcdfeoj:VVNzPzXW_g8SXQRsn6_oY9X_Va@ec2-54-225-215-233.compute-1.amazonaws.com:5432/d8adsn2btjot7s

bin/hubot -a telegram

