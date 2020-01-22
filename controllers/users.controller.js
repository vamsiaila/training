const { users } = require('../input.json');

class UserController {

    static async getAllUsers(req, res){
        res.send(users);
    }

    static getUserByUserId(req, res){
        if(isNaN(req.params.userId)) {
            return res.status(400).send({error: 'userId Must be Numeric'});
        }
        const user = users.find(user => user.id === parseInt(req.params.userId))
        if(!user) {
            return res.status(404).send({ error: 'user not found' });
        }
        res.send(user);
    }

    static createUser(req, res){
        users.push(req.body);
        return res.send(req.body);
    }

    static updateUser(req, res) {
        if(isNaN(req.params.userId)) {
            return res.status(400).send({error: 'userId Must be Numeric'});
        }
        const userIndex = users.findIndex(user => user.id === parseInt(req.params.userId))
        if(userIndex === -1) {
            return res.status(404).send({ error: 'user not found' });
        }
        req.body.id = parseInt(req.params.userId);
        users[userIndex] = req.body;
        res.send(users[userIndex]);
    }
}

module.exports = UserController