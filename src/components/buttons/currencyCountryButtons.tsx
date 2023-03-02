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
  <button 
    type="button"
    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    onClick={() => updateResult()}>
    {name}
  </button>
  )
}
