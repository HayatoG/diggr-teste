<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h4>
                    Lista de Empresas - MongoDB
                    <RouterLink to="/empresa/criar" class="btn btn-primary float-end" name="adicionar">
                        Adicionar empresa
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Empresa</th>
                            <th>Nome</th>
                            <th>Salario</th>
                            <th>Cargo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(empresa, index) in this.empresas" :key="index">
                            <td name="id">{{ empresa._id }}</td>
                            <td name="nomeEmpresa">{{ empresa.empresa }}</td>
                            <td name="nomeFuncionario">{{ empresa.funcionario.nome }}</td>
                            <td name="funcionarioSalario">{{ empresa.funcionario.salario }}</td>
                            <td name="funcionarioCargo">{{ empresa.funcionario.cargo }}</td>
                            <td>
                                <RouterLink :to="{ path: '/empresas/'+empresa._id}" class="btn btn-primary" name="editar">
                                    Editar
                                </RouterLink>
                                <button type="button" @click="deletarEmpresa(empresa._id)" class="btn btn-danger" id="deletar">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
    name: 'empresas',
    data() {
        return {
            empresas: []
        }
    },
    mounted() {
        console.log('Estou aqui!')
        this.getEmpresas();
    },
    methods: {
        getEmpresas() {
            axios.get('http://localhost:3001/api/empresas').then(res => {
                this.empresas = res.data
            });
        },

        deletarEmpresa(empresaId) {
            axios.delete(`http://localhost:3001/api/empresas/${empresaId}`).then(res => {
                alert("Exclusão do usuário feito com sucesso!");
            });
        }
    },
}

</script>