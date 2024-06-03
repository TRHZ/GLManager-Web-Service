const knex = require('knex');

const db = knex({
    client: 'mysql2',
    connection: {
        host: 'mysql',
        user: 'root',
        password: '12345',
        database: 'greenlink'
    }
});

// Aquí concedemos todos los privilegios al usuario 'user_greenlink' desde cualquier host
db.raw("GRANT ALL PRIVILEGES ON greenlink.* TO 'user_greenlink'@'%'")
    .then(() => console.log("Permisos concedidos correctamente"))
    .catch(err => console.error("Error al conceder permisos:", err));

module.exports = db;
