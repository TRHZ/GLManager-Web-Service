const db = require('../dbconnection');

class UserModel {
    // Consultar todos los usuarios
    static async consult() {
        try {
            const usuarios = await db.select('*').from('users');
            return usuarios;
        } catch (error) {
            throw new Error(`Error al consultar usuarios: ${error.message}`);
        }
    }

    // Consultar usuario por ID
    static async consultById(id) {
        try {
            const usuario = await db.select('*').from('users').where('id', id).first();
            return usuario;
        } catch (error) {
            throw new Error(`Error al consultar usuario por ID: ${error.message}`);
        }
    }

    // Consultar usuario por email
    static async consultByEmail(email) {
        try {
            const usuario = await db.select('*').from('users').where('email', email).first();
            return usuario;
        } catch (error) {
            throw new Error(`Error al consultar usuario por email: ${error.message}`);
        }
    }

    // Insertar un nuevo usuario
    static async insert(datos) {
        try {
            const result = await db('users').insert(datos);
            return result[0]; // Retorna el ID del nuevo usuario insertado
        } catch (error) {
            throw new Error(`Error al insertar usuario: ${error.message}`);
        }
    }
    
    // Actualizar un usuario existente
    static async update(id, campos) {
        try {
            const result = await db('users').where('id', id).update(campos);
            return result; // Retorna la cantidad de registros actualizados
        } catch (error) {
            throw new Error(`Error al actualizar usuario: ${error.message}`);
        }
    }

    // Reemplazar un usuario existente
    static async replace(id, newData) {
        try {
            await db.transaction(async trx => {
                await trx('users').where('id', id).del();
                await trx('users').insert({ ...newData, id });
            });
            return id;
        } catch (error) {
            throw new Error(`Error al reemplazar usuario: ${error.message}`);
        }
    }
}

module.exports = UserModel;
