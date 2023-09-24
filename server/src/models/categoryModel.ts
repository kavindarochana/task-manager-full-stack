
import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
    },
    isEditable: {
        type: Boolean,
        default: true,
    },
    isEnable: {
        type: Boolean,
        default: true,
    },
    color : {
       id: String,
       name: String,
       colorCode: String,
    },
    icon : {
        id: String,
        name: String,
        symbol: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    timestamps: true, 
});

const Category = mongoose.model('Category', categorySchema);

export default Category;