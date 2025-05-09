const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
    await mongoose.connect(`mongodb+srv://${DB_USER}:${DBPASS}@cluster0.14agfmi.mongodb.net/`)

    console.log("Conectado ao banco!")
}

main().catch((err) => console.log(err))

module.exports = main;
