import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Update = ({ display, updatevalue }) => {
  const [inputs, setinputs] = useState({
    title: "",
    body: "",
  });

  useEffect(() => {
    setinputs({
      title: updatevalue.title,
      body: updatevalue.body,
    })
  }, [updatevalue])

  const updateinputs = async () => {
    await axios.put(`${window.location.origin}/api/v2/updatetask/${updatevalue._id}`, inputs)
      .then((res) => {
        toast.success(res.data.message);
        // console.log(updatevalue._id);
        close();
      })
  }
  const change = (e) => {
    const { name, value } = e.target;
    setinputs({ ...inputs, [name]: value });
  }
  const close = () => {
    display("none")
  };
  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
      <h1>Update Your Task</h1>
      <input type="text"
        className='todo-inputs my-4 w-100 p-3'
        value={inputs.title}
        name="title"
        onChange={change} />
      <textarea className='todo-inputs w-100 p-3'
        value={inputs.body}
        name="body"
        onChange={change} />
      <div className="d-flex ">
        <button className="btn btn-dark my-4 mx-2 card-icon-head" onClick={updateinputs}>Update</button>
        <button className="btn btn-dark my-4 mx-2 bg-danger card-icon-head" onClick={close}>Close</button>
      </div>
    </div>
  )
}

export default Update;