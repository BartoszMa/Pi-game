const neo4j = require('neo4j-driver');
require('dotenv').config()
const {
    url,
    db_username,
    db_password,
    database,
} = process.env
const driver = neo4j.driver(url, neo4j.auth.basic(db_username, db_password));

const findAll = async () => {
    const newSession = driver.session({database})
    const transaction = newSession.beginTransaction()
    const result = transaction.run(`MATCH (n:User) RETURN n`)
    await transaction.commit()
    await newSession.close()
    return result.record
}

export default {
    findAll
}
