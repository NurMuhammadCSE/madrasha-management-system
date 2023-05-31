import mongoose from "mongoose";
import config from "./config/index"

async function main() {
    try {
        await mongoose.connect(config.database_url as string)        
        console.log('Successfully connected')
    } catch (error) {
        console.log('Server error')
    }
}
main();