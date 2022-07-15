import * as yup from 'yup'

export const todoValidationSchema = yup.object().shape({
    todoTitle: yup.string().max(80, 'Please, make it shorter!'),
    todoDescription: yup.string().max(10000, 'Please, make it shorter!'),
    todoYear: yup.number().min(2022, 'Starts from current year')
})