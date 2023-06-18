//we are using Exception Handling here as we have to handle error while accessing the database like we know our mongodb server is running on cloud ,suppose cloud is down to handle errors at that time
// import mongoose from "mongoose";

// const Connection =async(username,password) => {
   
//     try{ const URL = `mongodb+srv://${username}:${password}@inshort-clone.s5ksvsl.mongodb.net/?retryWrites=true&w=majority `;
//     await mongoose.connect(URL,{useNewUrlParser: true});
//     console.log('Database connected successfully');
//     }catch(error){
//         console.log('Error while connecting to the database ',error);
//     }
// }
//     export default Connection;
import mongoose from 'mongoose';

const Connection = async (username, password) => {
    try {   
        const URL =`mongodb+srv://${username}:${password}@inshort-clone.s5ksvsl.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(URL, { useNewUrlParser: true });
        
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;
    
