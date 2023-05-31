const { DataTypes } = require ("sequelize")
const db = require ("../db/conn")

const Casa = db.define("casa",{

    numero : {
        type: DataTypes.INTEGER
    },

    tamanho : {
        type: DataTypes.INTEGER
    },

    luz : {
        type: DataTypes.INTEGER
    }
},{
    createdAt:false,
    updatedAt:false
}
)

    // Casa.sync({force:true})

    module.exports = Casa