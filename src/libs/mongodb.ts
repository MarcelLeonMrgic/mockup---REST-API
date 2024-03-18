import * as mongoose from "mongoose";

const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return true; // Bereits verbunden
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as any);
        console.log("Connected to MongoDB");
        return true; // Verbindung erfolgreich
    } catch (error) {
        console.log(error);
        return false; // Verbindung fehlgeschlagen
    }
};
export default connectMongoDB;