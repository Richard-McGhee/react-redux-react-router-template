import React, { useContext } from 'react'
import { ExampleContext } from './ContextComponent'

const ContextChild = () => {
    const { exampleState } = useContext(ExampleContext)
    return ( 
        <div>
            {exampleState.examples.map(item => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h3>{item.description}</h3>
                    <p>Arbitrary number --{">"} {item.number}</p>
                </div>
            ))}
        </div>
     );
}
 
export default ContextChild;