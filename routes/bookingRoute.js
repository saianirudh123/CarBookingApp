const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel");
const Car = require("../models/carModel");
const { v4: uuidv4 } = require("uuid");
const stripe = require("stripe")(
  "sk_test_51KvIqiSGCMzYtcS6cm5pWR3OWxQdaIN2Qgqdo2Yz1L4w2aFOJMzKMnKxb2I9eAbTgO9nRH5h7BIUg89M2x4Dh0rx00SAK0Kxgw"
);

router.post("/bookcar", async (req, res) => {
  
  const { token } = req.body;
  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const payment = await stripe.paymentIntents.create(
      {
        amount: req.body.totalAmount * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email
      },
    );
    
    console.log(payment)
    if (payment) {
      req.body.transactionId = payment.id;
      console.log(req.body)
      const newBooking = new Booking(req.body);
      await newBooking.save();
      const car = await Car.findById({ _id: req.body.car });
      car.bookedTimeSlots.push(req.body.bookedTimeSlots);

      await car.save();

      res.send("Your booking was successful");
    } else {
      return res.status(400).json(error);
    }
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
});

router.get("/getallbookings", async(req, res) => {

  try {

      const bookings = await Booking.find().populate('car')
      res.send(bookings)
      
  } catch (error) {
      return res.status(400).json(error);
  }

});



module.exports = router;
