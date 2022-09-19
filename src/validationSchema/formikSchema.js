import * as yup from "yup";

export const signUpValidationSchema = yup.object().shape({
  name: yup.string().required("El nombre es obligatorio."),
  lastName: yup.string().required("El apellido es obligatorio."),
  email: yup.string().email().required("El Email es obligatorio."),
  password: yup
    .string()
    .min(6, "La clave es muy corta.")
    .max(12, "La clave es muy larga.")
    .required("La clave es obligatoria."),
  repeatPassword: yup
    .string()
    .min(6, "La clave es muy corta.")
    .max(12, "La clave es muy larga.")
    .required("La clave es obligatoria."),
});

export const logInValidationSchema = yup.object().shape({
  email: yup.string().email().required("El Email es obligatorio."),
  password: yup
    .string()
    .min(6, "La clave es muy corta.")
    .max(12, "La clave es muy larga.")
    .required("La clave es obligatoria."),
});
