import { useState } from 'react'
import styled from 'styled-components';
import Globalstyle from './Globalstyle.js';


function App() {
  
  const [ altura, setAultura] = useState("");
  const [ peso, setPeso] = useState("");

  const [mensagem, setMensagem] =useState('');

  function calcularImc(){
    let alt= altura/100;
    let imc= peso/(alt * alt);

    if( imc < 18.6){
      setMensagem("Você está abaixo do peso! Seu IMC :" +imc.toFixed(2));
    }else if(imc >= 18.6 && imc < 24.9){
      setMensagem("Peso ideal! Seu imc é "  + imc.toFixed(2));
    }else if(imc >= 24.9 && imc < 34.9){
      setMensagem("Você está levemente acima do peso! Seu imc é :" +imc.toFixed(2));
    }else if(imc > 34.9){
      setMensagem("Cuidado você está acima do peso!! Seu imc é :" +imc.toFixed(2));
    }
  };

  return (
    <>
      <Globalstyle/>
      <Container>
        <Titulo>
          <h1>Calcule seu IMC</h1>
          <p>
            Para calcular o IMC (Índice de Massa Corporal), 
            basta preencher os campos abaixo.
          </p>
        </Titulo>
        <Campos>
          <input 
                type="text"
                placeholder='Altura (m)'
                value={altura}
                onChange={ (e)=> setAultura(e.target.value)}
              />

              <input
                type="text"
                placeholder='Peso (kg)'
                value={peso}
                onChange={ (e)=> setPeso(e.target.value)}
              />

              <button onClick={calcularImc}>Calcular</button>
        </Campos>
        <Info>
          <p>{mensagem}</p>
        </Info>
      </Container>
    </>
  )
}

export default App;

//Estilos com styled-components

const Container = styled.div`
    width: 400px;
    height: 200px;

    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.30 );
    backdrop-filter: blur( 1px );
    -webkit-backdrop-filter: blur( 1px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const Titulo = styled.div`
    margin-top: 20px;
    text-align: center;

    h1{
      margin-bottom: 20px;
      font-size: 1.7rem;
      font-weight: 700;
      
      color: #ffff00;
    }
    p{
      font-size: 0.9rem;
      font-weight: 700;
      margin-bottom: 10px;
      color: white ;
    }
`;

const Campos = styled.div`
    margin-left: 10px;

    input{
      padding: 8px 0;
      margin: 0 0.1rem;
      outline: none;

      border-radius: 5px;
      border: 1px solid silver;

      text-align: center;
      color: #FFFFFF; 
      background: rgba( 255, 255, 255, 0.25 );
    }
    button{
      padding: 8px 10px;
      border: none;
      
      font-weight: 700;
      transition: all 300ms ease;
      background: rgba( 255, 255, 255, 0.25 );
      border: 1px solid white;
      border-radius: 5px;
      color: white;

      &:hover{
        background-color: #FFFF00;
        color: #0d0d0d ;
        box-shadow: 0 0 5px #FFFF00, 0 0 25px #FFFF00, 
        0 0 50px #FFFF00, 0 0 200px #FFFF00;
      }
    }
`;

const Info = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  font-size: 0.9rem;
  color: white;
`;


