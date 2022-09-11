import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    email: {type:String, required: true},
    password: {type:String, required: true},
    isDoctor: {type:Boolean, required: true},
    infoId: {type:String, required: true},
});
//hashing the password before password is saved
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

//logging in the user by comparing the stored email and password with the ones entered
userSchema.statics.login = async function (email,password) {
    const user = await this.findOne({ email });
    if (user) {
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return user;
        }
        else {
            throw Error("Incorrect password")
        }
    }
    else {
        throw Error("Incorrect email")
    }
}

const User = mongoose.model('User', userSchema);
export default User;