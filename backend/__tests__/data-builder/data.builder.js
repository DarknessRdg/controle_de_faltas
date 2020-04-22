import random from 'random';
import faker from 'faker';

const Teacher = () => {
    return Object.assign({
        name: faker.name.findName(),
        sex: random.int(0, 1) === 1 ? 'male' : 'female',
        email: faker.internet.email(),
        password: "admin@123",
        registration: `${random.int(0, 100000000)}` 
    });
}

export default { Teacher };

