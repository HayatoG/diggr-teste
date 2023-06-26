const { Empresa: EmpresaModel, Empresa } = require("../models/Empresa");

const empresaController = {
    
    create: async(req, res) => {
        try {
            const empresa = {
                empresa: req.body.empresa,
                funcionario: req.body.funcionario
            };

            const response = await EmpresaModel.create(empresa);

            res.status(201).json({response, msg: "Empresa criada com sucesso!"});

        } catch (error) {
            console.log(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const empresas = await EmpresaModel.find();
            res.json(empresas);
        } catch (error) {
            console.log(error);
        }
    },

    get: async(req, res) => {
        try {
            const id = req.params.id;
            const empresa = await EmpresaModel.findById(id);

            if(!empresa) {
                res.status(404).json({ msg: "Empresa não encontrada." });
                return;
            }

            res.json(empresa);
        } catch (error) {
            console.log(error);
        }
    },

    delete: async(req, res) => {
        try {
            const id = req.params.id;

            const empresa = await EmpresaModel.findById(id);

            if(!empresa) {
                res.status(404).json({ msg: "Empresa não encontrada." });
                return;
            }

            const deleteEmpresa = await EmpresaModel.findByIdAndDelete(id);

            res.status(200).json({ deleteEmpresa, msg: "Empresa excluída com sucesso" })
        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {
        const id = req.params.id;

        const empresa = {
            empresa: req.body.empresa,
            funcionario: req.body.funcionario
        };

        const updatedEmpresa = await EmpresaModel.findByIdAndUpdate(id, empresa);

        if (!updatedEmpresa) {
            res.status(404).json({ msg: "Empresa não encontrada." });
            return;
        }
        res.status(200).json({empresa, msg: "Empresa atualizada com sucesso" });
    }

}

module.exports = empresaController;