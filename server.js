const express = require('express')
const path = require('path');
const app = express()
const port = process.env.PORT || 3001
app.use(express.json())

const dbConnection = require('./db')

app.use('/api/cars/', require('./routes/carsRoute'))
app.use('/api/users/', require('./routes/userRoute'))
app.use('/api/bookings', require('./routes/bookingRoute'))


// Step 1:
app.use(express.static(path.resolve(__dirname, "./client/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

//app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Node js server started at  ${port}`));