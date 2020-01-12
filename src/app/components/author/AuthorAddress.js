import React from 'react'

const AuthorAddress = (props) => (

    <section className='flex-container'>
        <div>
            <h3>Address</h3>

            <p>Street: {props.address.street} </p>
            <p>city: {props.address.city} </p>
            <p>zipcode: {props.address.zipcode}</p>

        </div>


        <iframe
            width="100%"
            height="100%"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            title={props.address.name}
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://maps.google.com/maps?q=${props.address.lat},${props.address.lng}&z=15&output=embed`} />


    </section>

)

export default AuthorAddress

