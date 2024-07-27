// global.d.ts
// In your global.d.ts file
declare global {
    var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export {};
