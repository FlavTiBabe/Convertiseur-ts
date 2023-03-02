import {useEffect} from 'react'

interface CurrencyCountryButtons extends Currency {
    setResult: React.Dispatch<React.SetStateAction<number>>;
    setSelectedCurrency: React.Dispatch<React.SetStateAction<string>>;
    euros: number;
    selectedCurrency: string;
}



export default function CurrencyCountryButtons({selectedCurrency,euros,name,rate,setResult,setSelectedCurrency}:CurrencyCountryButtons) {
const updateResult = ()=> {
   setResult(euros * rate)
   setSelectedCurrency(name);
}

useEffect(()=>{ 
 if(selectedCurrency != name) return ;
 updateResult();
},[euros])

return (
    <button onClick={()=> updateResult()}>{name}</button>
  )
}
