const modelRoom = require("../model/room");

module.exports.getRoom = async (req, res) => {
    const { room } = req.body;
    try {
        const response = await modelRoom.findOne({ room });
        res.send(response);
    } catch (err) {
        res.send(false);
    }
};

module.exports.create = async (req, res) => {
    const { room, size, needAsk, available } = req.body;
    try {
        await modelRoom.findOneAndUpdate({ room }, { $set: { room, size, needAsk, available } }, { upsert: true, new: true });
        res.send(true);
    } catch (err) {
        res.send(false);
    }
};

module.exports.createRoom = async (req, res) => {};
