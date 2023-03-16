import React from 'react'

// res.send('<h1></h1>')

function Edit(props) {
    return ( 
        <div>
            <h1>Edit Log</h1>
            <form action={`/logs/${props.log._id}?_method=PUT`} method="POST">
                <label htmlFor="ttl">Title:</label><br />
                <input type="text" id="nme" name="title" defaultValue={props.log.title} /><br /><br />

                <label htmlFor="en">Entry:</label><br />
                <input type="textarea" id="en" name="entry" defaultValue={props.log.entry} /><br /><br />

                <label htmlFor="sib">Is ship broken?</label>
                <input type="checkbox" id="sib" name="shipIsBroken" defaultChecked={props.log.shipIsBroken} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    );
}

export default Edit;