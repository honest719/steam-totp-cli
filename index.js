#!/usr/bin/env node

const totp = require('steam-totp');
const secret = process.argv[2];

if (!secret) {
  console.log('Usage: node index.js <secret>');
  process.exit(1);
}

const token = totp.generateAuthCode(secret);
console.log(token);