import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
  const { contactList, keyword } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword, contactList]);
  return (
    <div>
      <SearchBox />
      <div className='contact-list'>
        <div className='contact-num'>전화번호 갯수 : {filteredList.length}</div>
        {filteredList.map((item)=> (
          <ContactItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default ContactList
