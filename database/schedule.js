const modelSchedule = require("../model/schedule.js");
const modelRoom = require("../model/room.js");

module.exports.getDay = async (req, res) => {
    const { day, month, year } = req.body;
    try {
        const response = await modelSchedule.find({ day, month, year });
        res.send(response);
    } catch (err) {
        res.send(false);
    }
};

module.exports.availableScedule = async (req, res) => {
    try {
        const [hs, ms, he, me] = req.body.hour;
        const [day, month, year] = req.body.date;
        const rooms = await modelRoom.find({ available: true }, { room: 1, needAsk: 1, size: 1, _id: 0 });
        const schedules = await modelSchedule.find({ day, month, year }, { _id: 0, room: 1, start: 1, end: 1 });
        let blackList = [];
        for (const schedule of schedules) {
            const [hhs, mms] = schedule.start.split(":");
            const [hhe, mme] = schedule.end.split(":");
            if ((hhs >= hs && mms >= ms && hss <= he && mms <= me) || (hhe > hs && mme > ms && hhs < he && mms < me)) {
                blackList.push(schedule.room);
            }
        }
        let response = [];
        for (const room of rooms) {
            v = true;
            for (const r of blackList) {
                if (room.room === r) v = false;
            }
            if (v) response.push(room);
        }
        res.send(response)
    } catch (err) {
        res.send(false);
    }
};
