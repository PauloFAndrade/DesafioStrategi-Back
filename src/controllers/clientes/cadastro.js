const knex  = require('../../database/connection');
const clientesSchema = require('../../validations/clientesSchema');

const cadastroClientes = async (req, res) => {
    const { nome, cpf, email, telefone } = req.body;

    try {
        await clientesSchema.validate(req.body);

        const emailCliente = await knex('clientes').where({email}).first();

        console.log(emailCliente)

        const cpfCliente = await knex('clientes').where({cpf}).first();

        if(emailCliente && emailCliente.status == 0){
            console.log('Gostaria de Reativar (EMAIL)?')
        }else if(emailCliente){
            return res.status(400).json({
                error: 'Email já cadastrado'
            });
        }

        if(cpfCliente && cpfCliente.status == 0){
            console.log('Gostaria de Reativar (CPF)?')
        }else if(cpfCliente){
            return res.status(400).json({
                error: 'Cpf já cadastrado'
            });
        }

        const dataDeCadastro = new Date();

        const newCliente = {
            nome,
            cpf,
            email,
            telefone,
            data_de_cadastro: dataDeCadastro,
            status: 1
        };

        const insertNewCliente = await knex("clientes").insert(newCliente);

        if(insertNewCliente.rowCount === 0){
           return res.status(400).json({
                error: 'Não Foi Possível Fazer O Cadastro Do Cliente, Tente Novamente'
            });
        };

        res.status(200).json({
            success: 'Cliente Cadastrado Com Sucesso'
        });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

module.exports = cadastroClientes;