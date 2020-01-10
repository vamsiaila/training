const { users } = require('../input.json');

module.exports = {
    getAllUsers: (req, res) => {
        res.send(users);
    },
    getUserByUserId: (req, res) => {
        if(isNaN(req.params.userId)) {
            return res.status(400).send({error: 'userId Must be Numeric'});
        }
        const user = users.find(user => user.id === parseInt(req.params.userId))
        if(!user) {
            return res.status(404).send({ error: 'user not found' });
        }
        res.send(user);
    }
};