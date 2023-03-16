import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Show View</h1>
            <p>On <strong>{props.log.title}</strong>: {props.log.shipIsBroken ? 'We are sinking' : 'We must maintain!'}</p>
            <p>Today's entry: {props.log.entry}</p>
            <p>{props.date}</p>


            <a href={`/logs/${props.log._id}/edit`}>Edit</a>
            
            <br /><br />


            <form action={`/logs/${props.log._id}?_method=DELETE`} method="POST">
                <button>Delete</button>
            </form>

            <br />

            

            <a href="/logs">Back</a>
        </div>
    )
}

export default Show;