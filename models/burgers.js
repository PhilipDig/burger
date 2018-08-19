const orm = require("../config/orm")

const burger = {
    getAll: cb => orm.selectAll("burgers", cb),
    create: (burger_name, cb) => orm.insertOne("burgers", "burger_name", burger_name, cb),
    devour: (id, cb) => orm.updateOne("burgers", "devoured", true, id, cb)
}

module.exports = burger