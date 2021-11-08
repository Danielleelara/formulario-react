import React, { useState } from 'react';
import DadosEntrega from './DadosEntreg';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
function FormularioCadastro(aoEnviar, validarCPF){ 
    return(
        <>
            <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
            <DadosUsuario />
            <DadosEntrega />

        </>
    );
}

export default FormularioCadastro;