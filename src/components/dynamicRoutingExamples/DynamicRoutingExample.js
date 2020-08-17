import React, { useState } from 'react'
import uuid from 'react-uuid'
import DynamicRoutingPostSnippet from './DynamicRoutingPostSnippet'
import { Link } from 'react-router-dom'

const DynamicRoutingExample = (props) => {
    const initValues = {
        name: "",
        description: "",
        number: 0
    }
    const [formValues, setFormValues] = useState(initValues)
    const { DRState, setDRState } = props

    const handleChange = evt => {
        setFormValues({
            ...formValues,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        setDRState({
            ...DRState,
            tempArr: [...DRState.tempArr,
            {...formValues,
            id: uuid()
            }]
        })
        setFormValues(initValues)
    }

    return ( 
        <div>
            <Link to="/">Home</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">
                    <input type="text"
                    name="name"
                    placeholder="Input a name"
                    value={formValues.name}
                    onChange={handleChange} />
                </label>
                <label htmlFor="descriptionInput">
                    <input type="test"
                    name="description"
                    placeholder="Input a description"
                    value={formValues.description}
                    onChange={handleChange} />
                </label>
                <label htmlFor="numberInput">
                    <input type="number"
                    name="number"
                    value={formValues.number}
                    onChange={handleChange} />
                </label>
                <button>Example Submit</button>
                <input type="submit"
                name="altSubmit"
                value="Alt Submit"
                onClick={handleSubmit} />
            </form>
            {DRState.tempArr.length > 0 && DRState.tempArr.map(item => (
                <Link to={`/dynamicRoutingExample/routedTo/${item.id}`} key={item.id} >
                    <DynamicRoutingPostSnippet item={item} />
                </Link>
            ))}                
            
        </div>
    );
}
 
export default DynamicRoutingExample;