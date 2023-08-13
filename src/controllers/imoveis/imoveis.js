const knex = require('../../database/connection');

const getImoveis = async (req, res) => {

    try {
        const imoveis = await knex('imoveis').where({status: 1});

        res.status(200).json({
            success: imoveis
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getImoveis;