const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
app.use(express.json());
app.use(cors());

const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: "./spences_party.sqlite"
    }
});

//TODO Secure request JWT
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/events', async (req, res) => {
    //TODO Filter by user
    const listEvents = await knex('events').orderBy('date', 'asc')
    console.log(listEvents)
    res.json({ status: 'OK', data: listEvents })
})

app.post('/events', async (req, res) => {
    const event = await knex('events').insert(req.body)
    console.log("Creating event", event);
    res.json({ status: 'OK', data: event })
})

app.post('/spences', async (req, res) => {
    console.log("Create spence", req.body)
    await knex('event_spences').insert(req.body)
    res.json({ status: 'OK' })
})

app.get('/spences/:eventId', async (req, res) => {
    console.log("LOADING spences")
    const spences = await knex('event_spences').where({ eventId: req.params.eventId })
    res.json({ status: 'OK', data: spences })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})