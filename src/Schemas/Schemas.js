import { object, string, ref } from 'yup';

export const REGISTRATION_SCHEMA = object({
  firstName: string()
    .min(2, `Ім'я має бути щонайменше 2 символи`)
    .required(`Обов'язкове поле`)
    .trim()
    .matches(/^[\p{L}'-]+$/u, `Ім'я може включати лише літери`)
    .max(25, `Максимум символів 25`),
  lastName: string()
    .min(2, `Прізвище має бути щонайменше 2 символи`)
    .required(`Обов'язкове поле`)
    .trim()
    .matches(/^[\p{L}'-]+$/u, `Прізвище може включати лише літери`)
    .max(25, `Максимум символів 25`),
  nickName: string()
    .min(2, `Нік має бути щонайменше 2 символи`)
    .required(`Обов'язкове поле`)
    .trim()
    .matches(/^[\p{L}0-9'-]+$/u, `Нік може включати лише літери`)
    .max(15, `Максимум символів 15`),
  phone: string()
    .required(`Обов'язкове поле`)
    .matches(/^\+[0-9]{12}$/, `Номер телефону не дійсний`),
  email: string()
    .required(`Обов'язкове поле`)
    .email(),
  password: string()
    .min(8, 'Пароль має містити мінімум 8 символів')
    .matches(
      /(?=.*[a-zа-яіїєґ])/,
      'Пароль має містити хоча б 1 маленьку літеру'
    )
    .matches(/(?=.*[A-ZА-ЯІЇЄҐ])/, 'Пароль має містити хоча б 1 велику літеру')
    .matches(/(?=.*\d)/, 'Пароль має містити хоча б 1 цифру')
    .matches(/(?=.*[@$!%*?&])/, 'Пароль має містити хоча б 1 спец-символ')
    .required("Обов'язкове поле"),
  confirmPassword: string()
    // ref('password') вказує, що значення має дорівнювати полю password
    .oneOf([ref('password')], 'Паролі повинні збігатися')
    .required("Обов'язкове поле"),
});

export const LOGIN_SCHEMA = object({
  login: string().required('Введіть логін!'),
  password: string().required('Введіть пароль!'),
});
