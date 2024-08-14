import { useState } from 'react';
import { TestStep } from '../Components/TestStep';
import {useNavigate} from 'react-router-dom';

export function TestPage() {
    const navigate = useNavigate();


    const [currentStep, setCurrentStep] = useState(0);  
    const [steps, setSteps] = useState([
        {
            step: "1",
            title: "YouTube Search History",
            placeholder: "Search",
            inputNumber: "5",
            values: ['','','','','']

        },
        {
            step: "2",
            title: "Browser Search History",
            placeholder: "Search",
            inputNumber: "5",
            values: ['','','','','']
        },
        {
            step: "3",
            title: "Bookmarks",
            placeholder: "Bookmark",
            inputNumber: "5",
            values: ['','','','','']
        },
        {
            step: "4",
            title: "Favourite Movie",
            placeholder: "Movie",
            inputNumber: "1",
            values: ['']
        },
        {
            step: "5",
            title: "Books You Read Cover to Cover",
            placeholder: "Book",
            inputNumber: "5",
            values: ['','','','','']
        },
        {
            step: "6",
            title: "Ask people close to you what you talk about all the time",
            placeholder: "What you talk about",
            inputNumber: "1",
            values: ['']
        },
        {
            step: "7",
            title: "What do you spend money on",
            placeholder: "Thing",
            inputNumber: "5",
            values: ['','','','','']
        },
        {
            step: "8",
            title: "What is your personality type",
            placeholder: "personality type",
            inputNumber: "1",
            values: ['']
        }
    ]);

    const data = {
        youtube: steps[0].values,
        browser: steps[1].values,
        bookmarks: steps[2].values,
        movie: steps[3].values,
        books: steps[4].values,
        talk: steps[5].values,
        money: steps[6].values,
        personality: steps[7].values
    }

    const sendToResults = () => {
        navigate('/results', {state: data});
    }

    const incrementStep = () => {
        setCurrentStep(currentStep + 1);
        console.log(currentStep);
    };
    const decrementStep = () => {
        setCurrentStep(currentStep - 1);
        console.log(currentStep);
    };

    const updateValues = (index, value) => {
        let newSteps = [...steps];
        newSteps[currentStep].values[index] = value;
        setSteps(newSteps);
    }




    return(
        <div className="flex flex-row justify-center items-center h-[100vh] relative">
            <a href="/" className="font-poppins font-bold text-2xl absolute top-2">Logo</a>
            <TestStep
            step = {steps[currentStep].step}
            title = {steps[currentStep].title}
            placeholder = {steps[currentStep].placeholder}
            inputNumber = {steps[currentStep].inputNumber}
            onNext={incrementStep}
            onBack={decrementStep}  
            values={steps[currentStep].values}
            updateValues={updateValues}     
            results={sendToResults}     
            />
        </div>
    )

}