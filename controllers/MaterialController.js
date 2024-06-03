const MaterialModel = require('../models/materials');

class MaterialController {

    static async insert(req, res) {
        try {
            console.log("Datos recibidos:", req.body);
            const { nombre, descripcion, cantidad, stock_minimo, fecha_entrada } = req.body;
            const newMaterial = {
                nombre,
                descripcion,
                cantidad,
                stock_minimo,
                fecha_entrada
            };
            const result = await MaterialModel.insert(newMaterial);
            res.status(201).json(result);
        } catch (error) {
            console.error("Error al crear el material:", error);
            // No enviar ningún mensaje de error
            res.status(500).end();
        }
    }

    /* static async insert(req, res) {
        try {
            console.log("Datos recibidos:", req.body);
            const { nombre, descripcion, cantidad, stock_minimo, fecha_entrada } = req.body;
            const newMaterial = {
                nombre,
                descripcion,
                cantidad,
                stock_minimo,
                fecha_entrada
            };
            const result = await MaterialModel.insert(newMaterial);
            res.status(201).send(result);
        } catch (error) {
            console.error("Error al crear el material:", error);
            // No enviar ningún mensaje de error
            res.status(500).end();
        }
    } */

    static async consultById(req, res) {
        try {
            const id = req.params.id;
            const material = await MaterialModel.consultById(id);
            if (material) {
                res.send(material);
            } else {
                res.status(404).send({ errno: 404, error: 'Material not found' });
            }
        } catch (error) {
            console.error(`Error al consultar el material por ID: ${error.message}`);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    static async indexGet(req, res) {
        try {
            const data = await MaterialModel.consult();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }

    

    static async delete(req, res) {
        try {
            const id = req.params.id;
            const result = await MaterialModel.delete(id);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfully deleted' });
            }
        } catch (error) {
            console.error("Error al borrar el material:", error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async update(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const result = await MaterialModel.update(id, updatedData);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfully updated' });
            }
        } catch (error) {
            console.error("Error al actualizar el material:", error);
            res.status(500).send({ errno: 500, error: 'Internal Server Error' });
        }
    }
}

module.exports = MaterialController;
