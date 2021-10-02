const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        ssl: process.env.DB_ENABLE_SSL,
        dialectOptions: { 
            ssl: process.env.DB_ENABLE_SSL && {
                require: true,
            }
        }
    })

async function syncDb(sequelize, options){
    const { force, alter } = options
    try {
        if (force)
            await sequelize.sync({force: true})
        else if (alter)
            await sequelize.sync({alter: true})
        else
            await sequelize.sync()
    } catch (err){
        console.log(err)
    }
}

module.exports = {
    sequelize,
    syncDb
}