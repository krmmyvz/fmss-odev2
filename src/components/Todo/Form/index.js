import { useState, useEffect } from 'react'
import { MdAdd } from "react-icons/md";

const initialFormValues = { task_name: "", status: false };

function Form({ addTask, tasks }) {

    const [form, setForm] = useState(initialFormValues)
    const [checked, setChecked] = useState(initialFormValues.status);

    useEffect(() => {
        setForm(initialFormValues)
    }, [tasks])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (form.task_name === '') {
            return false;
        }
        addTask([...tasks, form])
        setForm(initialFormValues)
    }


    const handleInputClick = (e) => {
        e.stopPropagation();
    };


    return (
        <>
            <form className={`form-container`} onSubmit={onSubmit}>
                <input
                    name="status"
                    type="checkbox"
                    style={{
                        visibility: "hidden",
                        position: "fixed",
                        right: "0px"
                    }}
                    defaultChecked={checked}
                    value={form.status}
                ></input>
                <input
                    name="task_name"
                    type="text"
                    placeholder='Add something to do'
                    value={form.task_name}
                    onChange={onChangeInput}
                    onClick={handleInputClick}
                    autoComplete="off"      
                ></input>
                <button><MdAdd className="floating-button-icon" /></button>
            </form>


            {/*<div
                className={`floating-button ${isOpen ? "active" : ""}`}
                onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? (
                    <></>
                ) : (
                    <FaPlus className="floating-button-icon" />
                )}
                </div>*/}

        </>


    )
}

export default Form