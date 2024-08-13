import { useNavigate } from 'react-router-dom';


import emeraldLine from "../../assets/images/emerald-line.png"

export function MainPage() {

  const navigate = useNavigate();

    return (
<div className="h-full flex flex-col">
  <div className="flex flex-row justify-between items-center h-16 p-4">
    <h1 className="text-white">Logo</h1>
    <div className="flex flex-row space-x-4">
      <button onClick={() => navigate('/sign-in')} className="bg-white text-emerald-500 border border-emerald-500 py-2  px-4 rounded-full font-poppins font-medium hover:bg-gray-100">sign in</button>
      <button onClick={() => navigate('/previous-resaults')} className="bg-emerald-500 text-white py-2  px-4 rounded-full font-poppins font-medium hover:bg-emerald-600">previous results</button>
    </div>

  </div>

  <div className="flex flex-col items-center mt-32">
  <div className="relative">
  <h1 className="text-4xl font-poppins font-semibold">
    Find your <span className="text-emerald-500 font-bold relative" id="passion-word">passion</span> business
  </h1>
  <img src={emeraldLine} className="w-40 absolute top-0 left-1/2 transform -translate-x-1/2 mt-1"  />
</div>
      <div className="flex flex-col items-center mt-12">
        <h1 className="font-poppins font-medium text-gray-600 text-2xl text">Stop spending time doing business that you are not born for.</h1>
        <h1 className="font-poppins font-medium text-gray-600 text-2xl">Find your thing, then go all in</h1>
      </div>
      <button onClick={() => navigate('/test')} className="bg-emerald-500 text-emerald-100 py-2 px-12 rounded-full text-2xl font-poppins font-medium mt-20 hover:bg-emerald-600">take a test</button>

    
  </div>
</div>
    );
    }
