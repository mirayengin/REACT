import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../features/newsSlice";
import { useEffect } from "react";

const News = () => {
  const {newsList, loading} = useSelector((state) => state.news)

  const dispatch = useDispatch()
  console.log(newsList);
  console.log('loading :>> ', loading);

  useEffect(() => {
    //! veriler her sayfa yüklendiğinde gelmessi için effect içine koyduk ve state i güncellemesi içinde dispatch in içine koyduk.
  dispatch(getNews())
},[])

  return (
    <>
      <h1>NEWS</h1>
      {!loading && (
        <Box
          xs={{ d: "flex" }}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
        >
          {newsList?.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <CardMedia
                component="img"
                height="250"
                image={item?.urlToImage}
                alt="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item?.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item?.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small" href={item?.url} target="_blank">
                  Detail
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>)}
        
    </>
  );
};

export default News;


// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { CardMedia } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { getNews } from "../features/newsSlice";
// import { useEffect } from "react";
// const News = () => {
//   const { newsList, loading, error } = useSelector((state) => state.news);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getNews());
//   }, []);
//   console.log(newsList);
//   return (
//     <>
//       {error && (
//         <Typography variant="h3" color="error" align="center" mt={20}>
//           {error}
//         </Typography>
//       )}
//       {loading && (
//         <Box display="flex" alignItems="center" justifyContent="center">
//           {/* <img src={loadingGif} /> */}
//         </Box>
//       )}
//       {!loading && (
//         <Box
//           xs={{ d: "flex" }}
//           display="flex"
//           alignItems="center"
//           justifyContent="space-evenly"
//           flexWrap="wrap"
//         >
//           {newsList?.map((item, index) => (
//             <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
//               <CardMedia
//                 component="img"
//                 height="250"
//                 image={item?.urlToImage}
//                 alt="img"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {item?.title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {item?.content}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="small">Share</Button>
//                 <Button size="small" href={item?.url} target="_blank">
//                   Detail
//                 </Button>
//               </CardActions>
//             </Card>
//           ))}
//         </Box>
//       )}
//     </>
//   );
// };
// export default News;
