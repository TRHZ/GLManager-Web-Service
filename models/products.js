const db = require('../dbconnection');

class ProductsModel {

    static async insert(datos) {
        try {
            const result = await db('productos').insert(datos);
            return result[0];
        } catch (error) {
            throw new Error(`Error al insertar producto: ${error.message}`);
        }
    }

    static async search(query) {
        try {
            const productos = await db('productos')
                .where('nombre', 'like', `%${query}%`)
                .orWhere('lote', 'like', `%${query}%`);
            return productos;
        } catch (error) {
            throw new Error(`Error al buscar productos: ${error.message}`);
        }
    }

    static async getNameById(id) {
        try {
            const product = await db.select('nombre').from('productos').where('id', id).first();
            return product ? product.nombre : null;
        } catch (error) {
            throw new Error(`Error al obtener el nombre del producto por ID: ${error.message}`);
        }
    }

    static async getRecentItems() {
        try {
            const recentProducts = await db('productos').orderBy('fecha_entrada', 'desc').limit(15);
            return recentProducts;
        } catch (error) {
            throw new Error(`Error al obtener productos recientes: ${error.message}`);
        }
    }

    static async getLowStockItems() {
        try {
            const lowStockProducts = await db('productos').where('cantidad', '<', db.raw('stock_minimo'));
            return lowStockProducts;
        } catch (error) {
            throw new Error(`Error al obtener productos con bajo stock: ${error.message}`);
        }
    }
    
    


    static async consult() {
        try {
            const productos = await db.select('*').from('productos');
            return productos;
        } catch (error) {
            throw new Error(`Error al consultar productos: ${error.message}`);
        }
    }

    static async consultById(id) {
        try {
            const product = await db('productos').where('id', id).first();
            return product;
        } catch (error) {
            console.error("Error fetching product by ID:", error);
            throw new Error("Error fetching product by ID");
        }
    }

    

    static async update(id, campos) {
        try {
            const result = await db('productos').where('id', id).update(campos);
            return result;
        } catch (error) {
            throw new Error(`Error al actualizar producto: ${error.message}`);
        }
    }

    static async delete(id) {
        try {
            const result = await db('productos').where('id', id).del();
            return result;
        } catch (error) {
            throw new Error(`Error al borrar producto: ${error.message}`);
        }
    }

    static async replace(id, newData) {
        try {
            await db.transaction(async trx => {
                await trx('productos').where('id', id).del();
                await trx('productos').insert({ ...newData, id });
            });
            return id;
        } catch (error) {
            throw new Error(`Error al reemplazar producto: ${error.message}`);
        }
    }
}

module.exports = ProductsModel;
