import User from '../model/User';
import Id from '../model/id';


const users: User[] = [
    {
        id: Id.new(),
        name: 'Alice Silva',
        email: 'alice.silva@email.com',
        password: 'senha123'
    },
];

export default users;
