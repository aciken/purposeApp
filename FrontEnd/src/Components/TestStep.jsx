import PropTypes from 'prop-types';

export function TestStep({step, title, placeholder, inputNumber, onNext, onBack, values, updateValues, results}) {
    return(
        <div className="flex flex-col ">
            <h1 className="font-poppins font-semibold text-emerald-500 text-4xl">{step} out of 8</h1>
            <div className="flex flex-col border-2 border-emerald-500 rounded-xl p-6 w-[460px]">
                <h1 className="font-poppins font-semibold text-gray-700 text-xl mb-4">{title}</h1>
                <div className='flex flex-col space-y-4'>
                {Array.from({ length: inputNumber }).map((_, i) => (
            <input
              key={i}
                value={values[i]}
              type="text"
                onChange={(e) => updateValues(i, e.target.value)}
              placeholder={`${placeholder} ${i + 1}`}
              className="w-full border border-gray-400 rounded-lg p-2 mt-1 focus:outline-emerald-500 placeholder:font-poppins placeholder:text-gray-400 placeholder:font-medium"
            />
          ))}
                </div>
            </div>
            {step != 1 && step != 8 ? (
            <div className='flex flex-row justify-between mt-2'>
            <button onClick={onBack} className="px-8 py-1 ronded-2xl font-poppins font-medium text-lg text-emerald-200 bg-emerald-500 rounded-xl hover:bg-emerald-600">Back</button>
            <button onClick={onNext} className="px-8 py-1 ronded-2xl font-poppins font-medium text-lg text-emerald-200 bg-emerald-500 rounded-xl hover:bg-emerald-600">Next</button>
        </div>
            ) : step == 8 ? (

            <div className='flex flex-row justify-between mt-2'>
                <button onClick={onBack} className="px-8 py-1 ronded-2xl font-poppins font-medium text-lg text-emerald-200 bg-emerald-500 rounded-xl hover:bg-emerald-600">Back</button>
                <button onClick={results} className="px-8 py-1 ronded-2xl font-poppins font-medium text-lg text-emerald-200 bg-emerald-500 rounded-xl hover:bg-emerald-600">Finish</button>
            </div>
                
            ) : (
<div className='flex flex-row justify-end mt-2'>
                <button onClick={onNext}  className="px-8 py-1 ronded-2xl font-poppins font-medium text-lg text-emerald-200 bg-emerald-500 rounded-xl hover:bg-emerald-600">Next</button>
            </div>
            )
        }

        </div>
    )
} 

TestStep.propTypes = {
    step: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    inputNumber: PropTypes.number.isRequired,
    onNext: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired,
    updateValues: PropTypes.func.isRequired,
    results: PropTypes.func.isRequired
  };