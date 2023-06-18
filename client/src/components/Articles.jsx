import { useState,useEffect} from 'react';

import {Box} from '@mui/material';

import { getNews } from "../service/api";

//components 
import Article from './Article';


const Articles = () => {
    //we have put API response in news key below
    const [news, setNews] = useState([]);

    // useEffect(part of Hooks ,alternative of componentDidMount() , used in class based components) take two arguements 1. callback function 2. when we have to use useEffect
    useEffect(()=>{
       // whenever my component is getting mount we are calling dailyNews();
       dailyNews();
    },[]);
    // await comes inside async , as we are returning promise , so we have to use async-await
    const dailyNews = async () => {
        let response = await getNews(); 
        // console.log(response.data); 
        setNews(response.data);
    }
    return(
        <Box>
            {
                news.map(data => (
                
                 <Article data={data}/>
                 
                ))
            }
        </Box>
    )
}

export default Articles;


// import { useState, useEffect } from 'react';
// import { getNews } from "../service/api";

// import InfiniteScroll from 'react-infinite-scroll-component';

// //components
// import Article from './Article';

// const Articles = () => {

//     const [news, setNews] = useState([]);
//     const [page, setPage] = useState(0);

//     useEffect(() => {
//         const dailyNews = async () => {
//             const response = await getNews(page);
//             //console.log(new Set([...news, ...[response.data]]));
//             setNews([...new Set([...news, ...[response.data]])]);
//         }
//         dailyNews();
//     }, [news, page])

//     useEffect(() => {
//         console.log(news);
//     }, [news])

//     return (
//         <InfiniteScroll
//             dataLength={news.length}
//             next={() => setPage(page => page + 1)}
//             hasMore={true}
//         >
//             {
//                 news.map(article => (
//                     <Article article={article} />
//                 ))
//             }
//         </InfiniteScroll>
//     )
// }

// export default Articles;
// import { useState, useEffect } from 'react';
// import { Box } from '@mui/material';
// import { getNews } from "../service/api";
// import Article from './Article';

// const Articles = () => {
//     const [news, setNews] = useState([]);

//     useEffect(() => {
//         dailyNews();
//     }, []);

//     const dailyNews = async () => {
//         try {
//             const response = await getNews(); 
//             setNews(response.data);
//         } catch (error) {
//             console.log('Error while calling dailyNews:', error);
//         }
//     }

//     return(
//         <Box>
//             {news && news.map((data, index) => (
//                 <Article key={index} data={data} />
//             ))}
//         </Box>
//     );
// }

// export default Articles;
