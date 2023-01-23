const neo4j = require('neo4j-driver');
require('dotenv').config()
const bcrypt = require('bcrypt')
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

const addNewUser = async (user) => {
    try {
        const newSession = driver.session({database});
        const hash = await bcrypt.hash(user.password, 10);
        await newSession.run(`CREATE (n:User {nickname: $nickname, email: $email, password: $password})`, {nickname: user.nickname, email: user.email, password: hash});
        await newSession.close();
        return user;
    } catch (error) {
        throw new Error(error);
    }
};

export default {
    findAll,
    addNewUser
}
