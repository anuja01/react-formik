import React from 'react';
 import { Formik, Form, Field, ErrorMessage } from 'formik';
 
 const FormikForm = () => (
   <div>
     <h1>Form with Formik Components</h1>
     <Formik
       initialValues={{ email: '', password: '' }}
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       {({ isSubmitting }) => (
        // all linked with 'name' property
         <Form>
           <Field type="email" name="email" /> {/** name="email" -> this will link the field to 'values.email' in form */}
           <ErrorMessage name="email" component="div" /> {/** here also mapped to name */}
           <Field type="password" name="password" />
           <ErrorMessage name="password" component="div" />
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
   </div>
 );
 
 export default FormikForm;