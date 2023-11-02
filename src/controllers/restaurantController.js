import sequelize from "../models/connect.js";
import initModels from "../models/init-models.js";

const model = initModels(sequelize);

const likeRes = async (req, res) => {
    let { user_id, res_id, date_like } = req.body;

    let newData = {
        user_id,
        res_id,
        date_like,
    };
    await model.like_res.create(newData);
    res.status(201).send("Like thành công");
    return;
};

const unlikeRes = async (req, res) => {
    let { user_id, res_id } = req.body;
    await model.like_res.destroy({
        where: {
            user_id,
            res_id,
        },
    });
    res.status(200).send("Unlike thành công");
};

const getLikeUsers = async (req, res) => {
    let { user_id } = req.body;
    let data = await model.like_res.findAll({
        where: {
            user_id,
        },
    });
    res.status(200).send(data);
};

const getLikeRes = async (req, res) => {
    let { res_id } = req.body;
    let data = await model.like_res.findAll({
        where: {
            res_id,
        },
    });
    res.status(200).send(data);
};

const rateRes = async (req, res) => {
    let { user_id, res_id, amount, date_rate } = req.body;
    await model.rate_res.create({
        user_id,
        res_id,
        amount,
        date_rate,
    });
    res.status(200).send("Rate thành công");
};

const getRateRes = async (req, res) => {
    let { res_id } = req.body;
    let data = await model.rate_res.findAll({
        where: {
            res_id,
        },
    });
    res.status(200).send(data);
};

const getRateUsers = async (req, res) => {
    let { user_id } = req.body;
    let data = await model.rate_res.findAll({
        where: {
            user_id,
        },
    });
    res.status(200).send(data);
};

const orderFood = async (req, res) => {
    let { user_id, food_id, amount, code, arr_sub_id } = req.body;
    let data = {
        user_id,
        food_id,
        amount,
        code,
        arr_sub_id,
    };
    model.orders.create(data)
    res.status(201).send("Order thành công")
};

export {
    likeRes,
    unlikeRes,
    getLikeRes,
    getLikeUsers,
    rateRes,
    getRateRes,
    getRateUsers,
    orderFood
};
