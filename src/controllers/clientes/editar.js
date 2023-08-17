const knex = require('../../database/connection');
const clientesSchema = require('../../validations/clientesSchema');

const editarCliente = async (req, res) => {
    const { id, nome, cpf, email, telefone } = req.body;

    try {
        await clientesSchema.validate(req.body);

        const cliente = await knex('clientes').where({ id }).first();

        if (cliente.cpf !== cpf) {
            const clienteExistente = await knex('clientes').where({ cpf }).first();

            if (clienteExistente) {
                return res.status(400).json({
                    error: 'Este CPF Já Está Cadastrado'
                });
            };
        };

        if (cliente.email !== email) {
            const clienteExistente = await knex('clientes').where({ email }).first();

            if (clienteExistente) {
                return res.status(400).json({
                    error: 'Este Email Já Está Cadastrado'
                });
            };
        };

        const newDadosDocliente = {
            nome,
            cpf,
            email,
            telefone
        };

        const clienteEditado = await knex('clientes').where({ id }).update(newDadosDocliente);

        if (clienteEditado === 0) {
            return res.status(400).json({
                error: 'Não Foi PossÍvel Fazer a Edição Do Cadastro Do Cliente, Tente Novamente'
            });
        };

        res.status(200).json({
            success: 'Cadastro Do Cliente Editado Com Sucesso'
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = editarCliente;
