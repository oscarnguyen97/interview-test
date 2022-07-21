import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
    maxPoolSize:50,
    wtimeoutMS:2500,
    useNewUrlParser:true
};
const MONGO_USERNAME = process.env.MONGO_USERNAME;
const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
const MONGO_COLLECTION = process.env.MONGO_COLLECTION;

const MONGO = {
    username: MONGO_USERNAME,
    password: MONGO_PASSWORD,
    collection: MONGO_COLLECTION,
    options: MONGO_OPTIONS,
    url: `mongodb+srv://oscarnguyen:DNxV7800plp3YNhb@cluster0.wnllj.mongodb.net/Joke-App?retryWrites=true&w=majority`
}

const SERVER_HOSTNAME = process.env.SERVER_HOTSNAME || 'localhost';
const SERVER_PORT = process.env.PORT || 2000;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

const config = {
    server: SERVER,
    mongo: MONGO,
};

export default config;