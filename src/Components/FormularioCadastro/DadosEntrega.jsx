import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
   // const [errosNumero, setErrosNumero] = useState({numero:{valido:true, texto:""}});   

    return(
        <form 
            onSubmit={(event) => {
                event.preventDefault();
                aoEnviar({cep, endereco, numero, estado, cidade});
        }}>
            <TextField 
            value= {cep}
            onChange={(event)=>{
                setCep(event.target.value)
            }}
            id= "cep" 
            label="CEP" 
            type="number"
            variant="outlined" 
            margin="normal"
            fullWidth 
            required
            />
            <TextField 
            value= {endereco}
            onChange={(event)=>{
                setEndereco(event.target.value)
            }}
            id= "endereço" 
            label="Endereço" 
            type="text"
            variant="outlined" 
            margin="normal"
            fullWidth 
            required
            />
            <TextField 
            value= {numero}
            onChange={(event)=>{
                setNumero(event.target.value)
            }}
            // onBlur={(event)=>{
            //     const ehValido = validarNumero(numero)
            //     setErrosNumero({numero:ehValido});
            // }}
            // error={!errosNumero.numero.valido}
            //     helperText={errosNumero.numero.texto}
            id= "numero" 
            label="Número" 
            type="number"
            variant="outlined" 
            margin="normal"
            fullWidth 
            required
            />
            <TextField 
            value= {estado}
            onChange={(event)=>{
                setEstado(event.target.value)
            }}
            id= "estado" 
            label="Estado" 
            type="text"
            variant="outlined" 
            margin="normal"
            required
            />
            <TextField 
            value= {cidade}
            onChange={(event)=>{
                setCidade(event.target.value)
            }}
            id= "cidade" 
            label="Cidade" 
            type="text"
            variant="outlined" 
            margin="normal"
            required
            
            />
             <Button type="submit" variant="contained" color="primary" fullWidth>
                Finalizar Cadastro
            </Button>


        </form>
    );

}

export default DadosEntrega;
