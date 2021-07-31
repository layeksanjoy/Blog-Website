import {Link,useHistory} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import {IoMdArrowRoundBack} from 'react-icons/io'
import {editComment} from '../actions/comments'
import '../CSS/Form.css'

const MyTextInput = ({ label, ...props }) => {
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

export default function EditComment(props){
  const tempState = useSelector(state => state)
  var comment = tempState.Comments.filter(comment => comment.id == props.match.params.id)
  comment = comment[0];
  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <div>
        <Link to={`/comments/${comment.parentId}`}>
          <IoMdArrowRoundBack/>
        </Link>
      <h1>Edit comment</h1>
      <Formik 
          initialValues={{
            body:comment.body,
            author:comment.author,
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
            const newComment = {...values}
            newComment.id =comment.id;
            const currentDate = new Date();
            newComment.timestamp =  currentDate.getTime()
            newComment.parentId = comment.parentId
            newComment.voteScore = 0;
            dispatch(editComment(newComment))
            setSubmitting(false);
            history.push(`/comments/${comment.parentId}`)
          }}
      >
        <Form className="form">
          <div>
            <label className="form-body-label">Body</label>
            <MyTextInput 
                name = "body"
                type = "text"
                placeholder = "Write Comment Body"
                className="form-body"
            />
          </div>
          <div>
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
    </div>
  )
};

