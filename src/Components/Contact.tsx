import React from "react";
import { Box, TextField, Button, AlertProps } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { Formik } from "formik";
import { MessageForm, MessageValidator } from "../utils/helper";
import { AuthContext, Imodal } from "../Store";
import emailjs from "emailjs-com";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
  const { openModal, setOpenModal } = React.useContext(AuthContext);
  const form = React.useRef();

  const onFormSubmit = (form: any, resetFunction: any) => {
    emailjs
      .sendForm(
        "service_oprp4rm",
        "template_wydng0y",
        form,
        "WF7nEFv-XJPR49RN7"
      )
      .then(
        (result) => {
          if (result.status == 200) {
            <Alert severity="success">Your email has been sent!</Alert>;
            resetFunction();
            setOpenModal({ ...openModal, open: false, comp: "", title: "" });
          }
        },
        (error) => {
          <Alert severity="error">Something went wrong!</Alert>;
          console.log(error);
        }
      );
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
      onSubmit={(e: any, { resetForm }: any) => {
        onFormSubmit(form.current, resetForm);
        resetForm();
      }}
    >
      {({ handleSubmit, setFieldValue, isSubmitting }) => (
        <Box
          component="form"
          ref={form}
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
            rows={5}
            onChange={(event) => {
              setFieldValue("message", event.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
          >
            Submit
          </Button>
          <Button
            fullWidth
            variant="contained"
            disabled={isSubmitting}
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
