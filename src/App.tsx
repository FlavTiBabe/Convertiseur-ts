import {useEffect, useRef, useState} from 'react'
import { currencies } from './data/currencies'
import CurrencyCountryButtons from './components/buttons/currencyCountryButtons'
// Veut un titre 

export default function App() {
  const [result, setResult] = useState(0);
  const [euros, setEuros] = useState(1);
  const [selectedCurrency, setSelectedCurrency] = useState("United States Dollar");
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if(!ref.current) return;
    ref.current.focus();
    console.log(ref.current)
  }, [ref]);

  return (
    <main className="flex flex-col min-h-screen" style={{backgroundImage: "url('https://godotetfils-paris16.com/wp-content/uploads/bureau-change-devises-godot-paris-16.jpg')", backgroundRepeat: "no-repeat"}}>
  <section className="flex flex-col items-center justify-center h-1/3 border-4 border-gray-300 rounded-md shadow-lg">
    <h1 className="text-4xl font-bold mb-4">Currency Converter</h1>
    <div className="flex items-center">
      <input 
        className="rounded-md border-gray-300 px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
        type="number" 
        placeholder="Enter amount in Euros" 
        onChange={(e)=>setEuros(Number(e.target.value))}
      />
      <p className="font-medium text-gray-700">EUR</p>
    </div>
  </section>
  <section className="flex flex-col items-center justify-center gap-4 py-8">
    <h2 className="text-2xl font-bold mb-4 ">Select Currency</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {currencies.map((currency) => (
        <CurrencyCountryButtons 
          key={currency.code}
          selectedCurrency={selectedCurrency} 
          euros={euros} 
          setSelectedCurrency={setSelectedCurrency} 
          setResult={setResult} 
          {...currency}
        />
      ))}
    </div>
  </section>
  <section className="flex flex-col items-center justify-center h-1/3 mt-auto p-4 bg-gray-100 border-t-4 border-gray-300 ">
    <h2 className="text-2xl font-bold mb-4">Conversion Result</h2>
    <div className="bg-white rounded-lg p-4 shadow-md">
      <h1 className="text-4xl font-bold mb-4">{result.toFixed(2)}</h1>
      <h2 className="text-gray-700 text-xl font-medium">{selectedCurrency}</h2>
    </div>
  </section>
</main>
   )
}


