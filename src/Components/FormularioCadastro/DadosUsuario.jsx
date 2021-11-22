import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import ValidacoesCadastro from "../../Contexts/ValidaçõesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const validacoes = useContext(ValidacoesCadastro);
  const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return (
        <form onSubmit = {(event)=>{
            event.preventDefault();
            if(possoEnviar()){
                aoEnviar({email, senha});
            }
        }}>
            <TextField 
            value= {email}
            onChange={(event)=>{
                setEmail(event.target.value)
            }}
            id="email"
            label="email"
            name="email" 
            type="email"
            variant="outlined" 
            margin="normal"
            fullWidth
            required 
            />
            <TextField 
            value= {senha}
            onChange={(event)=>{
                setSenha(event.target.value)
            }}
            onBlur={validarCampos}
            error={!erros.senha.valido}
            helperText={erros.senha.texto}
            id= "senha" 
            name="senha"
            label="senha" 
            type="password"
            variant="outlined" 
            margin="normal"
            fullWidth 
            required 
            />
            <Button type="submit" variant="contained" color="primary">
              Próximo
            </Button>
        </form>
    );
}

export default DadosUsuario;