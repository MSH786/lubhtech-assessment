import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter valid email")
    .required("Email Address is Required"),
  password: yup
    .string()
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required("Password is required"),
});

export const blogValidationSchema = yup.object().shape({
  description: yup.string().required("description is required"),
  category: yup.string().required("category is required"),
  title: yup
    .string()
    .min(2, ({min}) => `Title must be at least ${min} characters`)
    .required("Title is required"),
});

export const completeProfileValidationSchema = yup.object().shape({
  bio: yup
    .string()
    .min(2, ({min}) => `Bio must be at least ${min} characters`)
    .required("Bio is required"),
  age: yup
    .string()
    .min(1, ({min}) => `Age must be at least ${min} characters`)
    .required("Age is required"),
});
