import {createPool} from 'mysql2/promise'
import keys from './keys'

const pool=createPool(keys.database);


    


export default pool