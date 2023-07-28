import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { AuthContext, Imodal } from "../../Store";
import Contact from "../Contact";
import { Box } from "@mui/material";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomModal() {
  const { openModal, setOpenModal } = React.useContext(AuthContext);
  const handleClose = (data: Imodal) => {
    setOpenModal({
      ...openModal,
      open: data.open,
      comp: data.comp,
      title: data.title,
    });
  };
  const DailogueComp = (
    <React.Fragment>
      {openModal.comp === "contact" ? <Contact /> : null}
    </React.Fragment>
  );
  return (
    <Dialog
      open={openModal.open}
      TransitionComponent={Transition}
      keepMounted
      // onClose={() => handleClose({ open: false, comp: "", title: "" })}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{openModal.title}</DialogTitle>

      {DailogueComp}
    </Dialog>
  );
}
