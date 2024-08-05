import { Pool } from "mysql2/promise";

export class UserRepository {
    constructor(private pool: Pool) {}// mysqlpromise
        async all(){
            try {
                const [rows] = await this.pool.query('SELECT * FROM users');
                return rows
              } catch (error: any) {
                console.warn(`There is an error${error.message}`);
              }
    }
}
