const express = require('express')
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())

const dbConnection = require('./db')

app.use('/api/cars/', require('./routes/carsRoute'))
app.use('/api/users/', require('./routes/userRoute'))
app.use('/api/bookings', require('./routes/bookingRoute'))

const path = require('path');
if(process.env.NODE_ENV === 'production'){
    app.use('/',express.static('client'))

    app.get('*', function (req, res) {
        res.redirect('/login');});
}

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Node js server started at  ${port}`));