import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    username: {
        type: String,
        required: 'Enter an username'
    },
    email: {
        type: String,
        required: 'Enter an email'
    },
    password: {
        type: String,
        required: 'Enter a password'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})