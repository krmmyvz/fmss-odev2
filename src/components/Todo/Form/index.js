import { useState, useEffect } from 'react'
import { MdAdd } from "react-icons/md";

const initialFormValues = { task_name: "", status: false };

// Form bileşeni oluşturuyoruz ve addTask, tasks props'larını alıyoruz
function Form({ addTask, tasks }) {

    const [form, setForm] = useState(initialFormValues)

    // tasks prop'unda değişiklik olduğunda formu resetleyen useEffect
    useEffect(() => {
        setForm(initialFormValues)
    }, [tasks])

    // Input alanındaki değişiklikleri takip eden onChangeInput fonksiyonunu tanımlıyoruz
    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    // Form gönderildiğinde çalışacak onSubmit fonksiyonunu tanımlıyoruz
    const onSubmit = (e) => {
        e.preventDefault();
        // Eğer görev adı alanı boşsa, görev eklenmez
        if (form.task_name === '') {
            return false;
        }
        // tasks state'ine yeni görevi eklemek için addTask fonksiyonunu kullanıyoruz
        addTask([...tasks, form])
        // formu varsayılan değerlerle sıfırlıyoruz
        setForm(initialFormValues)
    }

    return (
        <>
            <form className={`form-container`} onSubmit={onSubmit}>
                <input
                    name="status"
                    type="checkbox"
                    /* Checkbox'ı gizleyip sağ tarafa sabitleyen stil */
                    style={{
                        visibility: "hidden",
                        position: "fixed",
                        right: "0px"
                    }}
                    defaultChecked={false}
                    value={form.status}
                ></input>
                {/* Görev adı alanı */}
                <input
                    name="task_name"
                    type="text"
                    placeholder='Add something to do'
                    value={form.task_name}
                    onChange={onChangeInput}
                    autoComplete="off"
                ></input>
                {/* Görev ekleme butonu */}
                <button><MdAdd className="floating-button-icon" /></button>
            </form>
        </>


    )
}

export default Form