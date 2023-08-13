const knex = require('../../database/connection');

const reativarCliente = async (req, res) => {
    const { id } = req.params;
    try {

        const clienteReativado = await knex('clientes').where({ id }).update({status: 1});

        if (clienteReativado === 0) {
            return res.status(400).json({
                error: 'Não Foi Possível Reativar O Cadastro Do Cliente'
            });
        };

        res.status(200).json({
            success: 'Cadastro Do Usuario Reativado Com Sucesso'
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = reativarCliente;