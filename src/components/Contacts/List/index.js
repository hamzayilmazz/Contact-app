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
        <div className='test'>
        <span>Name</span>
        <span>Phone Number</span>
        </div>
        
        <ul className='list'>
            {
              filtered.map((contact,i) => (
              <li key={i}>
                <span>
                {contact.fullName}
                </span>
                <span>
                {contact.phone_number} 
                </span>
                </li>
              ))
            }
           
        </ul>
        <p>
          Total Contacts: {filtered.length}
        </p>
    </div>
  )
}

export default List