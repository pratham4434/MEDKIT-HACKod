import mongoose from "mongoose";

const paitentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Date, requried: true },
    appointmentsBooked: {
        appointmentName: String,
        appointmentDate: Date,
    },
});

const Paitent = mongoose.model("Paitent", paitentSchema);

export default Paitent;
/* 
name - stores the doctor's name
age - this will be stored as a date of their BOD
apointmentsBooked:
    appointmentName - name of apointment
    appointmentDate - stores date of appointment
*/