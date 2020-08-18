import React, { useState, createContext } from 'react'
import ContextChild from './ContextChild'
import TempForm from './ContextForm'
import { Link } from 'react-router-dom'

export const ExampleContext = createContext()

const ContextComponent = () => {
    const initValues = {
        examples: [
            {
            name: "Default Example",
            description: "Description of default example.",
            number: 1,
            id: 1
            }
        ]
    }
    const [exampleState, setExampleState] = useState(initValues)

    return ( 
        <div>
            <ExampleContext.Provider value={{exampleState, setExampleState}}>
                <Link to="/">Home</Link>
                <TempForm />
                {exampleState.examples.length > 0 && <ContextChild />}
            </ExampleContext.Provider>  
        </div>
     );
}
 
export default ContextComponent;