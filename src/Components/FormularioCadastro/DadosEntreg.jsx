import React from 'react';
import { TextField } from '@material-ui/core';

function DadosEntrega() {

    return(
        <form>
            <TextField id= "cep" 
            label="CEP" 
            type="number"
            variant="outlined" 
            margin="normal"
            fullWidth 
            />
            <TextField id= "endereço" 
            label="Endereço" 
            type="text"
            variant="outlined" 
            margin="normal"
            fullWidth 
            />
            <TextField 
            id= "numero" 
            label="Número" 
            type="number"
            variant="outlined" 
            margin="normal"
            fullWidth 
            />
            <TextField id= "estado" 
            label="Estado" 
            type="text"
            variant="outlined" 
            margin="normal"
            
            />
            <TextField id= "cidade" 
            label="Cidade" 
            type="text"
            variant="outlined" 
            margin="normal"
            
            />


        </form>
    );

}

export default DadosEntrega;
