import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';
import "fontsource-roboto";
import { validarCPF, validarSenha } from './models/cadastro';
class App extends Component {
  render(){
  return (
    <Container component="article" maxWidth="sm" >
    <Typography variant='h3' align='center'component='h1'>Formulário de Cadastro</Typography>
    <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{validarCPF, validarSenha}}/>
    </Container>
  );
 }
}

function aoEnviarForm(dados){
  console.log(dados);
}

// function validarNumero (numero){
//   if(numero.length !== 3)
//     {return {valido:false, texto: "Número deve ter 3 dígitos."}
//   }else {
//     return {valido:true, texto: ""}
//   }
// }

export default App;
