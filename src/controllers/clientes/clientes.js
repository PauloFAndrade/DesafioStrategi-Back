const knex = require('../../database/connection');

const getClientes = async (req, res) => {

    try {
        const clientes = await knex('clientes').where('status',1);

        res.status(200).json({
            success: clientes
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    };

};

module.exports = getClientes;