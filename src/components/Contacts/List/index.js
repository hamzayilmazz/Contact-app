import {useState} from 'react'

function List({contacts}) {

    const [filterText,setFilterText]=useState('');
    const filtered=contacts.filter((item)=>{
        return Object.keys(item).some((key)=>
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })
    console.log("sa",filtered);
  return (
    <div>
        <input placeholder='Search Here' value={filterText} onChange={(e) => setFilterText(e.target.value)} />
        <ul>
            {
              contacts.map((contact,i) => (
              <li key={i}>{contact.fullName}</li>
              ))
            }
           
        </ul>
    </div>
  )
}

export default List