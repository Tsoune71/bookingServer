const { Schema, model } = require("mongoose");

const schemaUser = new Schema(
    {
        room: {
            type: Number,
            required: true,
        },
        size: {
            type: Number,
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
        },
        needAsk: {
            type: Boolean,
        },
    },
    {
        timestamps: false,
    }
);
const mod = model("room", schemaUser);

module.exports = mod;
