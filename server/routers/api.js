const express = require('express');
const router = express.Router();
const _env = process.env;
const pgp = require("pg-promise")();
const db = pgp({
    host: _env.DB_HOST,
    port: _env.DB_PORT,
    database: _env.POSTGRES_DB,
    user: _env.POSTGRES_USER,
    password: _env.POSTGRES_PASSWORD,
});

router.get('/', async (req, res) => {
    const result = await db.query("select * from public.user");
    res.send(await result);
});

module.exports = router;