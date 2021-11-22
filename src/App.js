import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import "fontsource-roboto";
import { validarCPF, validarSenha } from './models/cadastro';
import ValidacoesCadastro from './Contexts/ValidaçõesCadastro';

class App extends Component {
  render(){
  return (
    <Container component="article" maxWidth="sm" >
    <Typography variant='h3' align='center'component='h1'>Formulário de Cadastro</Typography>
    <ValidacoesCadastro.Provider 
    value={{cpf:validarCPF, senha:validarSenha, nome:validarSenha}}>
    <FormularioCadastro aoEnviar={aoEnviarForm}/>
    </ValidacoesCadastro.Provider>
    </Container>
  );
 }
}

function aoEnviarForm(dados){
  console.log(dados);
}

export default App;
