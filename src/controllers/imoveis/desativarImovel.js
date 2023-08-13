const knex = require('../../database/connection');

const desativarImovel = async (req, res) => {
    const { id } = req.params;
    try {
        const imovelDesativado = await knex('imoveis').where({ id }).update({status: 0});

        if (imovelDesativado === 0) {
            return res.status(400).json({
                error: 'Não Foi Possível Desativar O Imovel'
            });
        };

        res.status(200).json({
            success: 'Imovel Desativado Dom Sucesso'
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = desativarImovel;