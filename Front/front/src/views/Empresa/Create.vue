<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Criar empresa</h4>
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
                    <button type="button" @click="SalvarEmpresa" class="btn btn-primary" name="salvar">Salvar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: "empresaCriar",
    data() {
        return {
            model: {
                empresa: '',
                funcionario: {
                    nome: '',
                    salario: '',
                    cargo: ''
                }
            }
        }
    },
    methods: {

        SalvarEmpresa() {

            axios.post('http://localhost:3001/api/empresa', this.model).then(res => {

                this.model = {
                    empresa: '',
                    funcionario: {
                        nome: '',
                        salario: '',
                        cargo: ''
                    }
                },
                alert("Cadastro feito com sucesso!")
            })
        }
    }
}

</script>