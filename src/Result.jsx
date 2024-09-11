/* eslint-disable */
import leftArrow from './assets/LeftArrow.png'

export default function({backToHome, conversao, valueDolar, taxValue, paymentMethod}){
    return(
    <>
        <div>
            <button onClick={()=>backToHome()}> 
                <img src={leftArrow} alt="Seta para Voltar" />
                Voltar
            </button>
            <p>O resultado do cálculo é</p>
            <h3>{conversao}</h3>
            <p>Compra no {paymentMethod} e taxa de {taxValue} %</p>
            <p>Cotação do dólar: U$ 1,00 = {valueDolar.toLocaleString('pt-br', {
        style: 'currency',
        currency:'BRL'
    })}</p>
        </div>
    </>

    )
}