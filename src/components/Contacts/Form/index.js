import {useState} from 'react'

function Form({addContact,contacts}) {
    const initialFormValues={fullName:"",phone_number:""}
    const [form,setForm]=useState(initialFormValues)

    const onChangeInput = (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if(form.fullName==="" || form.phone_number===""){
            return false
        }

        addContact([...contacts,form])
        console.log(form);

        setForm(initialFormValues)
    }

  return (
    <form onSubmit={onSubmit}>
        <div>
        <div>
            <input name="fullName" placeholder='Full Name' value={form.fullName} onChange={onChangeInput} />
        </div>

        <div>
            <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
        </div>

        <div>
           <button>Add</button>
        </div>
        </div>
        
    </form>
  )
}

export default Form