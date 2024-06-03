const ProductModel = require('../models/products');

class ProductController {

    static async insert(req, res) {
        try {
            console.log("Datos recibidos:", req.body);
            const { nombre, descripcion, cantidad, stock_minimo, stock_maximo, fecha_entrada, lote } = req.body;
            const newProduct = {
                nombre,
                descripcion,
                cantidad,
                stock_minimo,
                stock_maximo,
                fecha_entrada,
                lote
            };
            const result = await ProductModel.insert(newProduct);
            res.status(201).json(result); // Corregido aquí
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }
    
    

    /* static async insert(req, res) {
        try {
            console.log("Datos recibidos:", req.body);
            const { nombre, descripcion, cantidad, stock_minimo, stock_maximo, fecha_entrada, lote } = req.body;
            const newProduct = {
                nombre,
                descripcion,
                cantidad,
                stock_minimo,
                stock_maximo,
                fecha_entrada,
                lote
            };
            const result = await ProductModel.insert(newProduct);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error al crear el producto:", error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    } */

    static async consultById(req, res) {
        try {
            const id = req.params.id;
            const product = await ProductModel.consultById(id);
            if (product) {
                res.send(product);
            } else {
                res.status(404).send({ errno: 404, error: 'Product not found' });
            }
        } catch (error) {
            console.error(`Error al consultar el producto por ID: ${error.message}`);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }
    
    static async indexGet(req, res) {
        try {
            const data = await ProductModel.consult();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    

    static async delete(req, res) {
        try {
            const id = req.params.id;
            const result = await ProductModel.delete(id);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfully deleted' });
            }
        } catch (error) {
            console.error("Error al borrar el producto:", error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const result = await ProductModel.update(id, updatedData);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfully updated' });
            }
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }
}

module.exports = ProductController;
