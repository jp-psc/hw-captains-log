const Log = require('../models/logs')

module.exports.create = async (req, res) => {

if(req.body.shipIsBroken) {
    req.body.shipIsBroken = true
}else {
    req.body.shipIsBroken = false
}

try {
    // use the model to interact with db and create a new document in the fruit collection
    const result = await Log.create(req.body)
    console.log(result)
} catch(err) {
    console.log(err)
}

res.redirect('/logs')

}

module.exports.index = async (req, res) => {

    try {
       
        const logs = await Log.find() 
        console.log('inside controller')

        
        res.render('Index', { logs })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}

module.exports.show = async (req, res) => {
    try {
        const log = await Log.findById(req.params.id)
        res.render('Show', { log })
    } catch(err) {
        console.log(err)
        res.send(err.message)
    }
}