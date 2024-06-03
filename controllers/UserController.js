const UserModel = require("../models/users");

class UserController {

    static async indexGet(req, res) {
        try {
            const data = await UserModel.consult();
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: "Internal Server Error" });
        }
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;
            const insertedId = await UserModel.insert(newData);
            res
                .status(201)
                .header("Location", `/user/${insertedId}`)
                .send({ status: 201, message: "Created" });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: "Bad Request" });
        }
    }

    static async itemGet(req, res) {
        try {
            const id = req.params.id;
            const data = await UserModel.consultById(id);
            if (!data) {
                res.status(404).send({ errno: 404, error: "Not found" });
                return;
            }
            res.send(data);
        } catch (error) {
            console.error(error);
            res.status(500).send({ errno: 500, error: "Internal Server Error" });
        }
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;
            const result = await UserModel.replace(id, updatedData);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: "Not found" });
            } else {
                res.send({ message: "Updated successfully" });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: "Bad Request" });
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;
            const result = await UserModel.update(id, updatedFields);
            if (result === 0) {
                res.status(404).send({ errno: 404, error: "Not found" });
            } else {
                res.send({ message: "Successfully updated" });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: "Bad Request" });
        }
    }

    static async login(req, res) {
        const { username, password } = req.body;
        console.log("Login request received:", { username, password }); // Log para depuración
        try {
            const usuario = await UsuariosModel.consultByUsername(username);
            console.log("User found:", usuario); // Log para depuración
            if (!usuario || usuario.password !== password) {
                return res
                    .status(401)
                    .send({ message: "Credenciales inválidas. Inténtalo de nuevo." });
            }
            res
                .status(200)
                .send({ message: "Inicio de sesión exitoso", user: usuario });
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).send({ message: "Error interno del servidor" });
        }
    }

    static async registrarSalario(req, res) {
        try {
            const { salario } = req.body;
            const { id } = req.params;
            await UserModel.update(id, { salario });
            res.status(200).send({ message: "Salario registrado exitosamente" });
        } catch (error) {
            res.status(500).send({ error: "Error al registrar el salario" });
        }
    }

    static async crearCuenta(req, res) {
        try {
            const { nombre, email, password } = req.body;
            const nuevoUsuario = await UserModel.insert({
                nombre,
                email,
                password,
            });
            res.status(201).send({ user: nuevoUsuario });
        } catch (error) {
            res.status(500).send({ error: "Error al crear la cuenta" });
        }
    }
}

module.exports = UserController;
