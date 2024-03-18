/*import { object, string, number, date, InferType } from 'yup';


const validations = object({
    email: string().email().required(),
    password: string().min(5).required(),
    passwordconfirm: string().required()
  });
*/
import * as yup from 'yup';

const validations = yup.object({
    email: yup.string().email('Geçerli bir email girin').required('Zorunlu Alan'),
    password: yup.string().min(5,'Şifreniz minimum 5 karakter olmalı').required('Zorunlu Alan'),
    passwordconfirm: yup.string().oneOf([yup.ref('password')],'Şifreleriniz Uyusmuyor').required('Zorunlu Alan')
});
  export default validations;