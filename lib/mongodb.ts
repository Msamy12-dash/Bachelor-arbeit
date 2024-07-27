import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://inlp:INLP123@cluster0.vpm9s6o.mongodb.net/mainText?retryWrites=true&w=majority&appName=Cluster0';
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;


if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    // @ts-ignore
    global._mongoClientPromise = client.connect();
}


clientPromise = global._mongoClientPromise;

export default clientPromise;
