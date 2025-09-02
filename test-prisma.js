const {PrismaClient} = require('@prisma/client');
const p = new PrismaClient();
const keys = Object.keys(p);
console.log('Models:', keys.filter(k => k[0] !== '$' && k[0] !== '_'));