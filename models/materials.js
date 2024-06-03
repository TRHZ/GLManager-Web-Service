const db = require('../dbconnection');

class MaterialsModel {

    static async insert(materiales) {
        try {
            const result = await db('materiales').insert(materiales);
            return result[0];
        } catch (error) {
            throw new Error(`Error al insertar producto: ${error.message}`);
        }
    }

    static async search(query) {
        try {
            const materiales = await db('materiales')
                .where('nombre', 'like', `%${query}%`);
            return materiales;
        } catch (error) {
            throw new Error(`Error al buscar materiales: ${error.message}`);
        }
    }

    static async getNameById(id) {
        try {
            const material = await db.select('nombre').from('materiales').where('id', id).first();
            return material ? material.nombre : null;
        } catch (error) {
            throw new Error(`Error al obtener el nombre del material por ID: ${error.message}`);
        }
    }

    static async getRecentItems() {
        try {
            const recentMaterials = await db('materiales').orderBy('fecha_entrada', 'desc').limit(15);
            return recentMaterials;
        } catch (error) {
            throw new Error(`Error al obtener materiales recientes: ${error.message}`);
        }
    }

    static async getLowStockItems() {
        try {
            const lowStockMaterials = await db('materiales').where('cantidad', '<', db.raw('stock_minimo'));
            return lowStockMaterials;
        } catch (error) {
            throw new Error(`Error al obtener materiales con bajo stock: ${error.message}`);
        }
    }
    
    

    static async consult() {
        try {
            const materiales = await db.select('*').from('materiales');
            return materiales;
        } catch (error) {
            throw new Error(`Error al consultar materiales: ${error.message}`);
        }
    }

    static async consultById(id) {
        try {
            const material = await db('materiales').where('id', id).first();
            return material;
        } catch (error) {
            console.error("Error fetching material by ID:", error);
            throw new Error("Error fetching material by ID");
        }
    }

    static async update(id, campos) {
        try {
            const result = await db('materiales').where('id', id).update(campos);
            return result;
        } catch (error) {
            throw new Error(`Error al actualizar material: ${error.message}`);
        }
    }

    static async delete(id) {
        try {
            const result = await db('materiales').where('id', id).del();
            return result;
        } catch (error) {
            throw new Error(`Error al borrar material: ${error.message}`);
        }
    }

    static async replace(id, newData) {
        try {
            await db.transaction(async trx => {
                await trx('materiales').where('id', id).del();
                await trx('materiales').insert({ ...newData, id });
            });
            return id;
        } catch (error) {
            throw new Error(`Error al reemplazar material: ${error.message}`);
        }
    }
}

module.exports = MaterialsModel;
