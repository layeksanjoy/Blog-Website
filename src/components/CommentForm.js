import React from 'react'
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import {addComment} from '../actions/comments'

import "../CSS/Form.css"

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default function CommentForm(props){

  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <>
      <h1>Add Comment</h1>
      <Formik 
          initialValues={{
            body:"",
            author:"",
          }}
          validationSchema={Yup.object({
            body:Yup.string()
            .max(50 , "Must be 50 character or less")
            .min(10 ,"Must be 10 chracters or more")
            .required("Required"),
            author:Yup.string()
            .max(15 , "Must be 15 character or less")
            .min(1 ,"Must be 1 chracters or more")
            .required("Required"),
          })}
          onSubmit = {async (values, { setSubmitting }) => {
            const comment = {...values}
            comment.id = Math.random().toString();
            const currentDate = new Date();
            comment.timestamp =  currentDate.getTime()
            comment.parentId = props.id
            dispatch(addComment(comment))
            setSubmitting(false);
            history.push(`/comments/${props.id}`)
          }}
      >
        <Form className="form">
          <div className="input">
            <label className="form-body-label">Body</label>
            <MyTextInput 
                name = "body"
                type = "text"
                placeholder = "Write Comment Body"
                className="form-body"
            />
          </div>
          <div className="input">
          <label className="form-body-label">Author</label>
            <MyTextInput 
              name = "author"
              type = "text"
              placeholder = "Write Your Name"
              className="form-body"
          />
          </div>
          <button type="submit">Submit</button>

        </Form>
    </Formik>
    </>
  )
};

