const ProductsModel = require('../models/products');
const MaterialsModel = require('../models/materials');

class LowStockController {
    static async indexGet(req, res) {
        try {
            // Obtener productos con bajo stock
            const lowStockProducts = await ProductsModel.getLowStockItems();

            // Obtener materiales con bajo stock
            const lowStockMaterials = await MaterialsModel.getLowStockItems();

            const data = {
                lowStockProducts,
                lowStockMaterials
            };
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }
}

module.exports = LowStockController;
