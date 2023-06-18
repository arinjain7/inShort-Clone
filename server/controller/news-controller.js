import News from '../model/news-schema.js'
//this will work like an api , we have two arguements request and response 
// frontend -> backend , if we are getting something from frontend in backend, it comes in request and for backend to front , it comes in response
export const getNews = async (_request, response) => {
     try{
      let data = await News.find({}); //  returning empty i.e. will bring all data from database
      response.status(200).json(data);
    }catch(error){
    console.log(error);
    response.status(500).json({message : data.message});
 }
}