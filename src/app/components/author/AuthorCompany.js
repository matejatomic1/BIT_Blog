import React from 'react'

const AuthorCompany = (props) => (

    <section className='flex-container'>
        <div>
            <h3>Company</h3>

            <p>name: {props.company.company} </p>
            <p>slogan: {props.company.slogan} </p>

        </div>

    </section>

)

export default AuthorCompany