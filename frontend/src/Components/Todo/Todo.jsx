import React, { useState, useEffect } from 'react'
import "./todo.css"
import Todocards from './Todocards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from 'axios';

let toupdatearray = [];
const Todo = () => {
    let id = sessionStorage.getItem("id");
    const [inputs, setinputs] = useState({
        title: "",
<<<<<<< HEAD
        body: ""
    });
    const [array, setarray] = useState([]);
=======
        body: "",
    });
    const [array, setArray] = useState([]);
    const [filter, setFilter] = useState(array);
>>>>>>> 5b0b226 (Second Commit)

    const show = () => {
        document.getElementById("textarea").style.display = "block";
    }
    const change = (e) => {
        const { name, value } = e.target;
        setinputs({ ...inputs, [name]: value })
    }
    const submit = async () => {
        if (inputs.title === "" || inputs.body === "") {
            toast.error(`Title or Body Can't be empty.`);
        }
        else {
            if (id) {
                await axios
<<<<<<< HEAD
                    .post(`https://mern-todo-list-project.vercel.app/api/v2/addtask`, { title: inputs.title, body: inputs.body, id: id })
=======
                    .post(`http://localhost:3000/api/v2/addtask`, { title: inputs.title, body: inputs.body, id: id })
>>>>>>> 5b0b226 (Second Commit)
                    .then((res) => {
                        setinputs({ title: "", body: "" });
                        toast.success(`Your ${inputs.title} is Added.`);
                    });
            } else {
<<<<<<< HEAD
                setarray([...array, inputs]);
=======
                setArray([...array, inputs]);
>>>>>>> 5b0b226 (Second Commit)
                setinputs({ title: "", body: "" });
                toast.error(`Your ${inputs.title} is Added but Not Saved ! Please SignUp.`);
            }
        }
    }
<<<<<<< HEAD
    const del = async (cardid) => {
        if (cardid) {
            await axios.delete(`https://mern-todo-list-project.vercel.app/api/v2/deltask/${cardid}`, { data: { id: id }, })
=======

    const del = async (cardid) => {
        if (cardid) {
            await axios.delete(`http://localhost:3000/api/v2/deltask/${cardid}`, { data: { id: id }, })
>>>>>>> 5b0b226 (Second Commit)
                .then((res) => {
                    toast.success(`Your Task is Deleted.`);
                });
        }
        else {
            toast.error(`Please SignUp First.`);
        }
    }
<<<<<<< HEAD
=======

>>>>>>> 5b0b226 (Second Commit)
    const display = (value) => {
        document.getElementById('todoupdate').style.display = value;
    }
    const update = (val) => {
        toupdatearray = array[val];
    }
<<<<<<< HEAD
    useEffect(() => {
        if (id) {
            const fetch = async () => {
                await axios
                    .get(`https://mern-todo-list-project.vercel.app/api/v2/getalltasks/${id}`)
                    .then((res) => {
                        setarray(res.data.list);
                    });
            };
            fetch();
        }
    }, [submit]);
=======

    useEffect(() => {
        if (id) {
            const fetch3 = async () => {
                await axios
                    .get(`http://localhost:3000/api/v2/getalltasks/${id}`)
                    .then((res) => {
                        setArray(res.data.list);
                        setFilter(res.data.list);
                    });
            };
            fetch3();
        }
    }, [submit]);

>>>>>>> 5b0b226 (Second Commit)
    return (
        <>
            <div className='todo'>
                <ToastContainer />
<<<<<<< HEAD
                <div className="todo-main container d-flex flex-column justify-content-center align-items-center my-4">
=======
                <div className="todo-main container d-flex flex-column justify-content-center align-items-center my-2">
>>>>>>> 5b0b226 (Second Commit)
                    <div className='d-flex flex-column todo-inputs-div w-100 p-3'>
                        <input type="text" value={inputs.title} name='title' placeholder='Task Title...' className='my-2 p-2 todo-inputs' onClick={show} onChange={change} />
                        <textarea id="textarea" type="text" value={inputs.body} name="body" placeholder='Task Description...' className=' p-2 todo-inputs' onChange={change} />
                    </div>
                    <div className='w-100 d-flex justify-content-end align-items-center my-3'>
                        <button type="button" className='home-btn px-2 py-1' onClick={submit}>Add Task</button>
                    </div>
                </div>
                <div className="todo-body">
                    <div className="container-fluid">
                        <div className="row">
<<<<<<< HEAD
                            {array && array.map((item, index) => (
                                <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-3" key={index}>
                                    <Todocards title={item.title} body={item.body} id={item._id} delid={del} display={display} updateid={index}
                                        tobeupdate={update} />
=======
                            {filter && filter.map((item, index) => (
                                <div className="col-lg-3 col-11 mx-lg-5 mx-3 my-3" key={index}>
                                    <Todocards title={item.title} body={item.body} id={item._id} delid={del} display={display} updateid={index}
                                        tobeupdate={update} 
                                    />
>>>>>>> 5b0b226 (Second Commit)
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="updatepage" id="todoupdate">
                <div className="container update">
                    <Update display={display} updatevalue={toupdatearray} />
                </div>
            </div>
        </>
    )
}

export default Todo;