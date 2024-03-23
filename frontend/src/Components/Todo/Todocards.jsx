import React from 'react'
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

<<<<<<< HEAD
const Todocards = ({ title, body, id, delid, display, updateid, tobeupdate}) => {
    const deltask = () => {
        delid(id);
    }
    const updatetask = () =>{
=======
const Todocards = ({title, body, id, delid, display, updateid, tobeupdate }) => {
    const deltask = () => {
        delid(id);
    }
    const updatetask = () => {
>>>>>>> 5b0b226 (Second Commit)
        display("block");
        tobeupdate(updateid);
    };
    return (
<<<<<<< HEAD
        <div className="todo-card p-3 flex-column">
=======
    <div className="todo-card p-3 flex-column">
        <div className='d-flex justify-content-between'>
>>>>>>> 5b0b226 (Second Commit)
            <div>
                <h5>{title}</h5>
                <div className="todo-card-p">
                    <p>{body.split("", 50)}...</p>
                </div>
            </div>
<<<<<<< HEAD
            <div className="d-flex justify-content-around">
                <div onClick={updatetask} className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-success'>
                    <GrDocumentUpdate className='card-icons up' />  Update
                </div>
                <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' onClick={deltask}>
                    <MdDelete className='card-icons del' /> Delete
                </div>
            </div>
        </div>
    )
=======
        </div>
        <div className="d-flex justify-content-around">
            <div onClick={updatetask} className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-success'>
                <GrDocumentUpdate className='card-icons up' />  Update
            </div>
            <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' onClick={deltask}>
                <MdDelete className='card-icons del' /> Delete
            </div>
        </div>
    </div>
)
>>>>>>> 5b0b226 (Second Commit)
}

export default Todocards;