import express from 'express';
import routes from './routes/indnex';
import MySQLRepository from '../Repository/mysql/mysqlRepository';
import Repository from '../Repository/interfaces/repository';
import Application from '../domain/application/application';




const app = express();

app.use(express.json());
app.use('/api', routes);




/**
 * -------------------------------------------------------------------------------
 *  Start function, runs the server
 * 
 */

async function start(port:number) {
    
    const repository: Repository = await MySQLRepository.getRepository();
    Application.initializeApplication(repository);
    
    app.listen(port, () =>{
        console.log(`Server running on ${port}`);
    });
};


/**
 * ---------------------------------------------------------------------------------
 *  Exporting express server
 */
const server = { start };
export default server;