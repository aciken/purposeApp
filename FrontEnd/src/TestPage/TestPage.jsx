import { useState } from 'react';
import { TestStep } from '../Components/TestStep';

export function TestPage() {


    const [currentStep, setCurrentStep] = useState(0);  
    const [steps, setSteps] = useState([
        {
            step: "1",
            title: "YouTube Search History",
            placeholder: "Search",
            inputNumber: "5",
        },
        {
            step: "2",
            title: "Browser Search History",
            placeholder: "Search",
            inputNumber: "5",
        },
        {
            step: "3",
            title: "Bookmarks",
            placeholder: "Bookmark",
            inputNumber: "5",
        },
        {
            step: "4",
            title: "Favourite Movie",
            placeholder: "Movie",
            inputNumber: "1",
        },
        {
            step: "5",
            title: "Books You Read Cover to Cover",
            placeholder: "Book",
            inputNumber: "5",
        },
        {
            step: "6",
            title: "Ask people close to you what you talk about all the time",
            placeholder: "What you talk about",
            inputNumber: "1",
        },
        {
            step: "7",
            title: "What do you spend money on",
            placeholder: "Thing",
            inputNumber: "5",
        },
        {
            step: "8",
            title: "What is your personality type",
            placeholder: "personality type",
            inputNumber: "1",
        }
    ]);

    const incrementStep = () => {
        setCurrentStep(currentStep + 1);
        console.log(currentStep);
    };
    const decrementStep = () => {
        setCurrentStep(currentStep - 1);
        console.log(currentStep);
    };

    return(
        <div className="flex flex-row justify-center items-center h-[100vh]">
            <TestStep
            step = {steps[currentStep].step}
            title = {steps[currentStep].title}
            placeholder = {steps[currentStep].placeholder}
            inputNumber = {steps[currentStep].inputNumber}
            onNext={incrementStep}
            onBack={decrementStep}            
            />
        </div>
    )

}