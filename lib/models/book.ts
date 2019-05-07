import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const BookSchema  = new Schema ({
    code: {
        type: String
    },
    title: {
        type: String,
        required: 'Please, enter the book title'
    },
    author: {
        type: String,
        required: 'Please, enter the book author'
    },
    pages: {
        type: String,
        required: 'Please, enter the number of pages of the book'
    },
    summary: {
        type: String,
    },
    publishDate: {
        type: Date,
    },
    editionNumber: {
        type: String
    },
    quantity: {
        type: Number,
        required: 'Please enter the quantity of books'
    },
    ISBN: {
        type: String
    },
    publishingCompany: {
        type: String
    },
    rarityLevel: {
        type: String,
        default: 'Common'
    }

})

