import {data} from './constants/data.js';
// import news from './model/news-schema.js';

// to valid data object above we need to import schema
import News from './model/news-schema.js' 


const DefaultData =async() => {
    try{
       // we are storing in data in news collection of news schema 
       //as upon doing ctrl+s , each time we are getting duplication of data we will perform this, we will set url:unique in newschema
    //   await News.deleteMany({});
      await News.insertMany(data);
     console.log("Data imported successfully");
    }catch(error){
        console.log('Error:',error.message);
    }
}
// Line mention below is not an error, instead it is result of using try and catch
//Error E11000 duplicate key error collection: test.news index: title_1 dup key: { title: "Man stabs TN Police sub-inspector over month-old fine for drunk driving" }

export default DefaultData;