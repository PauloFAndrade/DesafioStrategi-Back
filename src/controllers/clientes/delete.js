const knex = require('../../database/connection');

const deleteCliente = async (req, res) => {
    const { id } = req.params;
    try {

        //const clienteDeletado = await knex('clientes').del().where({ id });

        const clienteDesativado = await knex('clientes').where({ id }).update({status: 0});

        if (clienteDesativado === 0) {
            return res.status(400).json({
                error: 'Não Foi Possivel Desativar o Usuário'
            });
        };

        res.status(200).json({
            success: 'Usuário Desativado Com Sucesso'
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = deleteCliente;