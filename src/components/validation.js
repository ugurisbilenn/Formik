/*import { object, string, number, date, InferType } from 'yup';


const validations = object({
    email: string().email().required(),
    password: string().min(5).required(),
    passwordconfirm: string().required()
  });
*/
import * as yup from 'yup';

const validations = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(5).required(),
    passwordconfirm: yup.string().oneOf([yup.ref('password')]).required()
});
  export default validations;