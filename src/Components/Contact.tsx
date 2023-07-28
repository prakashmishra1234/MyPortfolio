import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { Formik } from "formik";
import { MessageForm, MessageValidator } from "../utils/helper";
import { AuthContext, Imodal } from "../Store";

const Contact = () => {
  const { openModal, setOpenModal } = React.useContext(AuthContext);

  const onFormSubmit = (values: MessageForm) => {
    alert(1);
    console.log(values);
  };
  const handleClose = (data: Imodal) => {
    setOpenModal({
      ...openModal,
      open: data.open,
      comp: data.comp,
      title: data.title,
    });
  };
  return (
    <Formik
      initialValues={MessageValidator.initials}
      validationSchema={MessageValidator.validation}
      onSubmit={(values: MessageForm) => {
        alert(1);
        onFormSubmit(values);
      }}
    >
      {({ handleSubmit, setFieldValue }) => (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            height: "30rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <TextField
            required
            variant="outlined"
            fullWidth
            id="name"
            label="Full Name "
            name="name"
            onChange={(event) => {
              setFieldValue("name", event.target.value);
            }}
          />
          <TextField
            required
            variant="outlined"
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            onChange={(event) => {
              setFieldValue("email", event.target.value);
            }}
          />
          <TextField
            required
            variant="outlined"
            fullWidth
            name="mobile"
            label="Mobile"
            type="mobile"
            id="mobile"
            onChange={(event) => {
              setFieldValue("mobile", event.target.value);
            }}
          />
          <TextField
            required
            variant="outlined"
            fullWidth
            name="message"
            label="Message"
            type="message"
            id="message"
            multiline
            maxRows={5}
            rows={5}
            onChange={(event) => {
              setFieldValue("message", event.target.value);
            }}
          />
          <Button type="submit" fullWidth variant="contained">
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleClose({ open: false, comp: "", title: "" })}
          >
            Cancel
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default Contact;
