import { DataSource } from "typeorm";
import * as path from 'path';

/**
 * database connection configuration options
 */
export const AppDataSource = new DataSource(
    {
        type: "mysql",
        host: 'localhost',
        port: 3306,
        password: 'root',
        username: 'root',
        database: 'localdb',
        synchronize: true,
        logging: false,
        entities: [path.join(__dirname, 'entity', '*.ts')],
        migrations: [path.join(__dirname, 'migation', '*.js')],
        subscribers: [],
    }
)