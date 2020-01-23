const UserModel = require('../models/users.model');

class UserController {

    static async signUp(req, res){
        try{
            const { name, password  } = req.body;
            if(!name && typeof name !== 'string') {
                return res.status(400).send({ status: false, error: 'name is invallid' });
            }
            const user = new UserModel(req.body);
            await user.save();
            return res.send({ status: true, data: user });
        }catch(error) {
            res.status(500).send({status: false, error: 'General Error'});
        }
    }

    static async login(req, res) {

    }

    static getUserByUserId(req, res){
      
    }

    static updateUser(req, res) {

    }
}

module.exports = UserController