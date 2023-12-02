import React from 'react'
import { FormControl, FormLabel, FormErrorMessage, Input, Button} from '@chakra-ui/react'
import { Form, Field, Formik } from 'formik';
import { FaAngleRight } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

export default function TaskForm({ tasks, setTasks }) {
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
          task: '',
        }}
        onSubmit={(values, actions) => {
          const newTask = {
            id: uuidv4(),
            task: values.task
          }
          localStorage.setItem('tasks', JSON.stringify([ ...tasks, newTask]));
          setTasks([ ...tasks, newTask]);
          actions.setSubmitting(false);
          actions.resetForm();
        }}
        >
        {(props) => (
          <Form>
            <Field id='task' name='task' validate={validateTask}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.task} isRequired>
                  <FormLabel>Task</FormLabel>
                  <Input {...field} placeholder='Escribe una tarea ...' />
                  <FormErrorMessage>{form.errors.task}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              rightIcon={<FaAngleRight />}
              colorScheme='teal'
              variant='outline'
              isLoading={props.isSubmitting}
              type='submit'
            >
              Add task
            </Button>
          </Form>
        )}
      </Formik>
    )
  
}