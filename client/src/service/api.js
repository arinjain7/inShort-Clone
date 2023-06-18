//import axios from 'axios';

//with the help of axios we will call api
//Whenever we are sending API request, it should be asynchronous , because it will return promise ,  so whenever promise is returned we use .then , but it an older concept so we use async
// const URL = 'http://localhost:8000';
// export const getNews = async() => {
   
//     try{
//     return await axios.get(`${URL}/news`);  // We have used endpoint , point at which Api connects with software program
//     } catch(error){
//         console.log('Error while calling get news api',error);
//     }
// }

// import axios from 'axios';

// const URL = 'http://localhost:8000';


// export const getNews = async (page, size = 5) => {
//     try {
//         return await axios.get(`${URL}/news?page=${page}&size=${size}`);
//        // return await axios.get("23");
//     } catch (error) {
//         console.log('error while calling getNews API');
//     }
// }
import axios from 'axios';
// const URL = 'http://localhost:8000';
const URL = 'http://localhost:8000';

export const getNews = async () => {
    try {
        // const response = await axios.get(`${URL}/news`);
        return  await axios.get(`${URL}/news`);
        // console.log('API response:', response);
        // console.log('response status:', response.status);
        // console.log('response data:', response.data);
        // return response.data;
    } catch (error) {
        console.log('Error while calling getNews API:', error);
        throw error; // re-throw the error to handle it in the calling function
    }
};