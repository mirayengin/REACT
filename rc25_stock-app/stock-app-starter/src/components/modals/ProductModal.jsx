import React from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import useStockCalls from "../../hooks/useStockCalls";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  //? YAzdığımız post fonk import ettik
  const { postFirm ,putFirm} = useStockCalls();




  const handleSubmit = (e) => {
    e.preventDefault();

    //! İşlemin put yada post işlemiolduğunu anlamak için yaptık bunu
    if (info.id) {
      putFirm(info)
    } else {
      postFirm(info)
    }
    //? bu fonk info bilgisini kullanarak post eder
    postFirm(info);
    setOpen(false);
    //! modal dan ekledikten sonra yazılanlar ekrandan temizlensin diye yaptık
    setInfo({})
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div>
      <Modal
        open={open}
        //? Modal ı kapatıyor
        onClose={() => { setOpen(false);  setInfo({})}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} >
          <Box component="form" onSubmit={handleSubmit} sx={flexCenter}>
            <TextField
              required
              // margin="dense"
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              value={info?.name || ""}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              // margin="dense"
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              value={info?.phone || ""}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              // margin="dense"
              label="Address"
              name="address"
              id="address"
              type="text"
              value={info?.address || ""}
              variant="outlined"
              onChange={handleChange}
            />
            <TextField
              required
              // margin="dense"
              label="Image"
              name="image"
              id="image"
              type="url"
              value={info?.image || ""}
              variant="outlined"
              onChange={handleChange}
            />

            <Button size="large" type="submit" variant="contained">
              Save Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
