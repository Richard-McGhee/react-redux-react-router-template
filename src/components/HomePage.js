import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyleExample = styled.div`
    color: #999900;
    h1{
        text-align: center;
    }
    section{
        display: flex;
        justify-content: space-around;
        align-items: center;
        div{
            width: 30%;
            text-align: center;
            p{
                color: black;
            }
        }
        .mid-child{
            border-left: 2px solid #999900;
            border-right: 2px solid #999900;
            padding: 0 2%;
        }
    }

    a{
        text-decoration: none;
        color: black;
        &:hover {
            color: #999900;
        }
    }
`

const HomePage = () => {
    return ( 
        <StyleExample>
            <h1>
                Home Page<br/>
                Styled up with Styled Components
            </h1>
            <section>
                <div>
                    <h2>
                        <Link to="/componentExample">Redux</Link>
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p> {/* Give a summary about this component and its use in this template */}
                </div>
                <div className="mid-child">
                    <h2>
                        <Link to="/formExample">Context API (Form)</Link>
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p> {/* Give a summary about this component and its use in this template */}
                </div>
                <div>
                    <h2>
                        <Link to="/dynamicRoutingExample">Dynamic Routing</Link>
                    </h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores et, voluptatum, ex assumenda non delectus, consequatur accusantium explicabo incidunt unde ipsum animi blanditiis quis doloribus officiis atque? Repellendus minima harum sit, exercitationem pariatur, eaque, dolorum porro earum blanditiis vel repellat! Reiciendis neque recusandae totam expedita.</p> {/* Give a summary about this component and its use in this template */}
                </div>
            </section>
        </StyleExample>
     );
}
 
export default HomePage;