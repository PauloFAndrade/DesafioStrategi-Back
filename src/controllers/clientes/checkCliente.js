const knex = require('../../database/connection');

const checkCliente = async (req, res) => {

    const { cpf, email } = req.body;

    try {
        const clienteEmail = await knex('clientes').where({email: email, status: 0}).first();
        const clienteCPF = await knex('clientes').where({cpf: cpf, status: 0}).first();

        if(clienteEmail || clienteCPF){
            res.status(200).json({ exists: true , id: clienteEmail ? clienteEmail.id : clienteCPF.id});
        }else{
            res.status(200).json({ exists:false })
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    };

};

module.exports = checkCliente;
