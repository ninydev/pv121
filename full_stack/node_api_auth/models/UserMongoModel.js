// Подключиение модуля работы с базой
const mongoose = require("mongoose");
const {Schema} = require("mongoose");

// Настройка полей (схемы)
const userSchema = new mongoose.Schema({
    // _id
    email: { type: String }, // Можно указывать так, если будут расширенные параметры
    password: { type: String }, // Можно указывать так, если будут расширенные параметры
});

module.exports = mongoose.model("users", userSchema);
