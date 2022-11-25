import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";
import FirmModal from "../components/modals/FirmModal";
import useStockCalls from "../hooks/useStockCalls";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchStart,fetchFail, getSuccess } from "../features/authSlice";
// import { fetchStart, fetchFail, getSuccess } from "../features/stockSlice";

const Firms = () => {
  //! Modal acılması ve kapanması için kullanılacak
  const [open, setOpen] = useState(false);

  //! Burdan modal a edit yapılacak cardın bilgileri gönderilecek
  const [info, setInfo] = useState({name:"", phone:"", address:"", image:""})

  //! useStockCalls da bu GETFİRMS FONK YAZDIK VE BURAYA İMPORT ETTİK CUSTOM HOOKTAM
  const { getFirms } = useStockCalls();

  const { firms } = useSelector((state) => state.stock);
  // //?Burda stateleri güncellemek için istek (dispatch) oluşturduk
  // const dispatch = useDispatch();

  // //? Token bz api ye istek gönderdiğimizde giriş için otomatik bize veriyor
  // const { token } = useSelector((state) => state.auth);
  // const BASE_URL = "https://13730.fullstack.clarusway.com/";

  // const getFirms = async () => {
  //   //! Dispatchhlerin actions larını biz yazıyoruz ve oradan import ediyoruz. Bu veriyi statelere gönderim başladığında
  //   dispatch(fetchStart());
  //   const url = "firms";

  //   try {
  //     //! Burda biz axios ile apiden okuma işlemi yapıyoruz.Tabi bunuda token ekleyerek. Bu token ekleme güvenlikli apilerde oluyor
  //     const { data } = await axios.get(`${BASE_URL}stock/firms/`, {
  //       headers: { Authorization: `Token ${token}` },
  //     });
  //     console.log(data);
  //     //? başarılı olduğunda
  //     dispatch(getSuccess(data, url));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <Box>
      <Typography variant="h4" color="error" mb={4}>
        Firms
      </Typography>
{/* //! modal ı açıyor bu buton */}
      <Button variant="contained" onClick={() => setOpen(true)}>
        
        New Firm
      </Button>
      <FirmModal open={open} setOpen={setOpen} info={info} setInfo={setInfo} />

      {firms?.length > 0 && (
        <Grid container justifyContent="center" gap={3}>
          {firms?.map((firm) => {
            return (
              <Grid item>
                <FirmCard key={firm.id} firm={firm} />
              </Grid>
            );
          })}
        </Grid>
      )}
    </Box>
  );
};

export default Firms;
