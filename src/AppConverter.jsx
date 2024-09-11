import { useEffect, useState } from 'react'
import converteIcon from './assets/Transfer.png'
import Result from './Result';

const IOFDINHEIRO = 0.01;

export default function AppConverter(){
    const [valueDolar, setValueDolar] = useState(0);
    const [taxValue, setTaxValue] = useState(0);
    const [showResult, setShowResult]= useState(false);
    const [conversao, setConversao]= useState(1);
    const [data, setData]= useState({});
    const [paymentMethod, setPaymentMethod]= useState('Dinheiro');


    function handleSubmit(e){
        e.preventDefault();
        setShowResult(!showResult);
        const dolar = parseFloat(data.USDBRL.ask);
        setValueDolar(dolar);

        const valorConvertido = dolar + dolar * IOFDINHEIRO;
               
        setConversao(valorConvertido.toLocaleString('pt-br', {
            style: 'currency',
            currency:'BRL'
        }));
    }
    function backToHome(){
        setShowResult(!showResult);
    }
 
    useEffect(() => {
        const coins = 'USD-BRL';
        const url = `https://economia.awesomeapi.com.br/last/${coins}`;
        
        fetch(url)
            .then((response) => {
                return response.json();  
            })
            .then((data) => {
                setData(data)
                console.log(data.USDBRL);  
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados:', error);
            });
    }, []);
    
    return (
        <> {
            showResult ? 
        <Result
        backToHome={backToHome}
        conversao={conversao}
        valueDolar={valueDolar}
        taxValue={taxValue}
        paymentMethod={paymentMethod}
        /> :

            <form action="#">
                <label htmlFor="dolar">Dólar</label>
                <input type="number"  onChange={e=>setValueDolar(e.target.value)}/>
                <label htmlFor="tax">Taxa do Estado</label>
                <input type="number" onChange={e=>setTaxValue(e.target.value)}/>
                <p>Tipo de compra</p>
                <label htmlFor="money" >
                <input 
                type="radio" id="money"  
                value="Dinheiro" 
                name="paymentMethod"
                checked={paymentMethod === 'Dinheiro'} 
                onChange={e => setPaymentMethod(e.target.value)} 
                />
                    Dinheiro
                </label>
                <label htmlFor="card">
                <input
                 type="radio"
                 id="card" 
                 value="Cartão" 
                 name="paymentMethod"
                 checked={paymentMethod === 'Cartão'} 
                 onChange={e => setPaymentMethod(e.target.value)}
                 />
                    Cartão
                </label>
                <button onClick={(e)=>handleSubmit(e)} type="submit">
                    <img src={converteIcon} alt="Setas" />
                    Converter
                </button>
            </form>
        }

        </>
    )
}