import * as yup from "yup";

export interface MessageForm {
  name: string;
  email: string;
  message: string;
  mobile: string;
}

export const MessageValidator = {
  initials: {
    name: "",
    email: "",
    message: "",
    mobile: "",
  },
  validation: yup.object().shape({
    name: yup.string().required("message is required"),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email id"
      )
      .required("email is required"),
    message: yup.string().required("message is required"),
    mobile: yup.string().required("message is required"),
  }),
};
