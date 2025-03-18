import dotenv from 'dotenv';
dotenv.config()
import cowsay from 'cowsay';

console.log(cowsay.say({
    text : "My name is " + process.env.NAME + " and y live in " + process.env.CAMPUS,
    e : "oO",
    T : "U "
}));