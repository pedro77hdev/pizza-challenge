
import { DataSource } from 'typeorm';
import { OrderSchema } from '../schemas/order.schema';
import { PizzaSchema } from '../schemas/pizza.schema';


export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5431,
        username: 'postgres',
        password: '123',
        database: 'pizza',
        entities: [PizzaSchema, OrderSchema],
        synchronize: true,
        logging: true,
      });
      

      return dataSource.initialize();
    },
  },
];