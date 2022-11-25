import React from "react";
import Box from "@mui/material/Box";
// import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { flexCenter, modalStyle } from "../../styles/globalStyle";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function FirmModal({ open, setOpen, info, setInfo }) {
  const handleSubmit = (e) => {
    e.preventDefault();
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
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle} >
          <Box component="form" onSubmit={handleSubmit} sx={flexCenter}>
            <TextField
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
              // margin="dense"
              label="Image"
              name="image"
              id="image"
              type="url"
              value={info?.image || ""}
              variant="outlined"
              onChange={handleChange}
            />

            <Button type="submit" variant="contained">
              Save Firm
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
