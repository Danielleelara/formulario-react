import React,{useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validarCPF , validarNumero}){ 
    const [etapaAtual, setEtapaAtual] = useState(0);
    const formularios = [
        <DadosUsuario aoEnviar={proximo}/>, 
        <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>, 
        <DadosEntrega validarNumero={validarNumero} aoEnviar={aoEnviar} />
    ];

    function proximo(){
        setEtapaAtual(etapaAtual+1);
    }
    
    return <>{formularios[etapaAtual]}</>;
}



export default FormularioCadastro;