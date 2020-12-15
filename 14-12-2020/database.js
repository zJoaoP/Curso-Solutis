import MongoDB from "mongodb";
import "dotenv/config.js";

const { MongoClient } = MongoDB;

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.jpyoe.mongodb.net/${process.env.CLUSTER_NAME}?retryWrites=true&w=majority`;

export const db = new Promise((resolve, reject) => {
  MongoClient.connect(uri, (err, client) => {
    if (err) resolve(console.log(err));
    resolve(client.db(process.env.DB_NAME));
  });
});

export default db;
