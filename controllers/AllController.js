const ProductsModel = require('../models/products');
const MaterialsModel = require('../models/materials');

class AllController {

    static async deleteItem(req, res) {
        const { itemType, id } = req.params;

        try {
            let result;
            if (itemType === 'product') {
                result = await ProductsModel.delete(id);
            } else if (itemType === 'material') {
                result = await MaterialsModel.delete(id);
            } else {
                return res.status(400).send({ errno: 400, error: 'Invalid item type' });
            }

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Item not found' });
            } else {
                res.send({ success: true, message: 'Item deleted successfully' });
            }
        } catch (error) {
            console.error("Error deleting item:", error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async addProduct(req, res) {
        try {
            const datos = req.body;
            const result = await ProductsModel.insert(datos);
            res.send({ success: true, id: result });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async addMaterial(req, res) {
        try {
            const datos = req.body;
            const result = await MaterialsModel.insert(datos);
            res.send({ success: true, id: result });
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async search(req, res) {
        try {
            const { query } = req.query;
            const productos = await ProductsModel.search(query);
            const materiales = await MaterialsModel.search(query);
            const results = {
                productos,
                materiales
            };
            res.send(results);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async getNameById(req, res) {
        try {
            const { id } = req.params;
            const productName = await ProductsModel.getNameById(id);
            if (productName) {
                res.send({ name: productName });
            } else {
                res.status(404).send({ errno: 404, error: 'Product not found' });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexGet(req, res) {
        try {
            const productos = await ProductsModel.consult();
            const materiales = await MaterialsModel.consult();
            const data = {
                productos,
                materiales
            };
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexGetRecent(req, res) {
        try {
            const recentProducts = await ProductsModel.getRecentItems();
            const recentMaterials = await MaterialsModel.getRecentItems();
            const allRecentItems = [...recentProducts, ...recentMaterials];
            res.send(allRecentItems);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async getProductNameById(req, res) {
        try {
            const { id } = req.params;
            const name = await ProductsModel.getNameById(id);
            if (!name) {
                res.status(404).send({ errno: 404, error: 'Product not found' });
            } else {
                res.send({ name });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async getMaterialNameById(req, res) {
        try {
            const { id } = req.params;
            const name = await MaterialsModel.getNameById(id);
            if (!name) {
                res.status(404).send({ errno: 404, error: 'Material not found' });
            } else {
                res.send({ name });
            }
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async consultById(req, res) {
        try {
            const { id } = req.params;
            const product = await ProductsModel.consultById(id);
            if (product) {
                res.send(product);
            } else {
                const material = await MaterialsModel.consultById(id);
                if (material) {
                    res.send(material);
                } else {
                    res.status(404).send({ errno: 404, error: 'Item not found' });
                }
            }
        } catch (error) {
            console.error("Error in consultById controller:", error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }
}

module.exports = AllController;
