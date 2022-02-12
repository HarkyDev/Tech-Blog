const {Model, DataTypes} = require('sequelize')
const sequelize = require("../config/connection")

const bcrypt = require('bcrypt')


class User extends Model  {
    // pass bcrypt
}



User.init (
    {
        id: {

        },
        user_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
}
sequelize,
timestamps: false,
freezeTableName: true,
underscored: true,
modelName: 'user',
}
    
)


module.exports = User