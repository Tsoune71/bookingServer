const { Schema, model } = require("mongoose");

const schemaUser = new Schema(
    {
        room: {
            type: Number,
            required: true,
        },
        reason:{
            type:String,
            required:true
        },
        start: {
            type: String,
            required: true,
        },
        end: {
            type: String,
            required: true,
        },
        day: {
            type: Number,
            required: true,
        },
        month: {
            type: Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: false,
    }
);
const mod = model("schedule", schemaUser);

module.exports = mod;
