import User from "../models/User.js";
import Doctor from "../models/Doctor.js";
import Paitent from "../models/Patient.js";
import jwt from "jsonwebtoken";

//Creating the jwt token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
    return jwt.sign({ id }, process.env.SECRET, {
        expiresIn: maxAge,
    })
}
//functions
    //signing up
export const postSignin = async (req, res) => {
    try {
        let info = ""
        const { email, password, isDoctor, name, age, phoneNumber, qualification, speciality, hospital, avatar} = req.body;
        if (isDoctor) {
            info = await Doctor.create({name, age, phoneNumber, qualification, speciality, hospital, avatar, appointmentsBooked: {}})
        }
        else {
            info = await Paitent.create({ name, age, appointmentsBooked: {}})
        }
        const user = await User.create({ email, password, isDoctor, infoId: info._id });
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
        res.status(201).json({ user: user._id });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err });
    }
}
    //logging in
export const postLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.login(email, password);
        const token = createToken(user._id);
        res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
       console.log(email, password)
       console.log(user)
        res.status(201).json({ user: user._id });
    } catch (err) {
        console.log(err);
        res.status(400).json({ err });
    }
};
    //logout
export const getLogout = async (req, res) => {
    res.cookie("jwt", '', { maxAge: 1 });
};