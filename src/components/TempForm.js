import React, { useState } from 'react'

const TempForm = (props) => {
    const initValues = {
        name: "",
        description: "",
        number: 0,
        id: new Date()
    }
    const [formState, setFormState] = useState(initValues)

    const handleChange = evt => {
        setFormState({
            ...formState,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        //push to context state
        setFormState(initValues)
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label htmlFor="nameInput">
                <input type="text"
                name="name"
                placeholder="Input a name"
                value={formState.name}
                onChange={handleChange} />
            </label>
            <label htmlFor="descriptionInput">
                <input type="test"
                name="description"
                placeholder="Input a description"
                value={formState.description}
                onChange={handleChange} />
            </label>
            <label htmlFor="numberInput">
                <input type="number"
                name="number"
                value={formState.number}
                onChange={handleChange} />
            </label>
            <button>Example Submit</button>
            <input type="submit"
            name="altSubmit"
            value="Alt Submit"
            onClick={handleSubmit} />
        </form>
     );
}
 
export default TempForm;