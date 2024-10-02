import { Sequelize } from 'sequelize';
import { Pets } from '../models/pets.model.js';
import { Tutors } from '../models/tutors.model.js';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: 'password123',
  database: 'MyFirstDb',
  port: 3306,

});

Pets.init(sequelize);
Tutors.init(sequelize);

Pets.associate(sequelize.models);
Tutors.associate(sequelize.models);