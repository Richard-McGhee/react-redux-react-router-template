import React from 'react'
import styled from 'styled-components'

const StyleExample = styled.div`
    color: #999900;
    section{
        display: flex;
        justify-content: space-around;
        padding: 0 2%;
    }
`

const HomePage = () => {
    return ( 
        <StyleExample>
            <h1>Home Page</h1>
            <section>
                <div>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p>
                </div>
                <div>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p>
                </div>
                <div>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p>
                </div>
            </section>
        </StyleExample>
     );
}
 
export default HomePage;