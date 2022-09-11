import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Date, requried: true },
    phoneNumber: {type: Number, required: true},
    qualification: { type: String, required: true },
    speciality: { type: String, required: true },
    hospital: { type: String, required: true },
    avatar: { type: String },
    appointmentsBooked: {
        appointmentName: String,
        appointmentDate: Date,
    },
    reviews: {
        rating: { type: Number, default: 5, min: 0, max: 5 },
        numberOfReviews: { type: Number, default: 0 },
    }
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;
/* 
name - stores the doctor's name
age - this will be stored as a date of their BOD
phoneNumber - this is stores phone number
qualification - stores their degree and from which uni
speciality - stores which area of medicine they specilize in
hospital - stores the hospital they currently work at
avatar - this is the image they input for the avatar this is stored as string as it will be converted to base64
apointmentsBooked:
    appointmentName - name of apointment
    appointmentDate - stores date of appointment
reviews:
    rating - stores the average rating given from paitents
    numberOfReviews - stores number of reviews on the doctor to be able to calculate an average
*/