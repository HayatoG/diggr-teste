<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Editar empresa</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Nome da Empresa</label>
                    <input type="text" v-model="model.empresa" class="form-control" name="nEmpresa"/>
                </div>
                <div class="mb-3">
                    <label for="">Nome do Funcionario</label>
                    <input type="text" v-model="model.funcionario.nome" class="form-control" name="nFuncionario"/>
                </div>
                <div class="mb-3">
                    <label for="">Salario</label>
                    <input type="text" v-model="model.funcionario.salario" class="form-control" name="salario"/>
                </div>
                <div class="mb-3">
                    <label for="">Cargo</label>
                    <input type="text" v-model="model.funcionario.cargo" class="form-control" name="cargo"/>
                </div>
                <div class="mb-3">
                    <button type="button" @click="AtualizarEmpresa" class="btn btn-primary" name="atualizar">Atualizar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "empresaEditar",
    data() {
        return {
            model: {
                _id: '',
                empresa: '',
                funcionario: {
                    nome: '',
                    salario: '',
                    cargo: ''
                }
            }
        }
    },

    mounted() {
        console.log(this.$route.params.id);

        this.getEmpresasData(this.$route.params.id)
    },


    methods: {

        getEmpresasData(EmpresaID) {
            axios.get('http://localhost:3001/api/empresas/' + EmpresaID).then(res => {
                console.log(res.data.empresa);

                this.model.empresa = res.data.empresa
                this.model.funcionario.nome = res.data.funcionario.nome
                this.model.funcionario.salario = res.data.funcionario.salario
                this.model.funcionario.cargo = res.data.funcionario.cargo
            });
        },

        AtualizarEmpresa() {
            axios.put('http://localhost:3001/api/empresas/'+this.$route.params.id, this.model).then(res => {
                console.log(res.data);
            })
        }
    }
}

</script>