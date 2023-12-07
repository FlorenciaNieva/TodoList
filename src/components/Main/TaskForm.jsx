import React from 'react'
import { FormControl, FormLabel, FormErrorMessage, Input, Button} from '@chakra-ui/react'
import { Form, Field, Formik } from 'formik';
import { FaAngleRight } from "react-icons/fa";

export default function TaskForm({ tasks, setTasks,originalTasks, setSelectedFilter }) {
  function validateTask(value) {
    let error
    if (!value) {
      error = 'Escribe una tarea'
    } else if (/\d/.test(value)) {
      error  = "El campo no permite números"
    } else if (value.length < 4) {
      error  = "El campo debe contener al menos 4 caracteres"
    } else if (value.length > 100) {
      error = "El campo no puede exceder los 100 caracteres"
    } 
    return error
    }

    return (
      <Formik
        initialValues={{
          id: '',
          task: '',
          complete: false
        }}
        onSubmit={(values, actions) => {
          localStorage.setItem(
            "tasks",
            JSON.stringify([...originalTasks, {...values, id: crypto.randomUUID()}])
          );
          setTasks([...originalTasks, {...values, id: crypto.randomUUID()}]);
          setSelectedFilter("all");
          actions.setSubmitting(false);
          actions.resetForm();
        }}  
        >
        {(props) => (
          <Form>
            <Field id='task' name='task' validate={validateTask}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.task} isRequired>
                  <FormLabel color='#f6f1ff'>Task</FormLabel>
                  <Input {...field} placeholder='Escribe una tarea ...' color='#f6f1ff' borderColor='gray.200' sx={{ '::placeholder': { color: '#f6f1ff' } }} focusBorderColor='#6e0acd' />
                  <FormErrorMessage>{form.errors.task}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              rightIcon={<FaAngleRight />}
              variant='outline'
              isLoading={props.isSubmitting}
              type='submit'
              color='#f6f1ff'
              _hover={{
                background: "#8e0acd",
              }}
            >
              Add task
            </Button>
          </Form>
        )}
      </Formik>
    )
  
}
