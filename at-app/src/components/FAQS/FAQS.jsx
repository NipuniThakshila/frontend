import React from 'react'
import { useState } from 'react'
import './FAQS.css'

const FAQS = () => {
  const [selected,setSelected] = useState(null)


  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }



  return (
    <div> 
        <p>Frequently asked questions</p>
        <div className='wrapper'>
            <div className='accordian'>
              {data.map((item, i) => (
                <div className='item'>
                  <div className='title' onClick={() => toggle(i)}>
                    <p>{item.question}</p>
                    <span>{selected === i ? '-' : '+'}</span>
                  </div>
                  <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

const data = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
  },

  {
    question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
  },

  {
    question: 'Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?',
    answer: 'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
  }
]

export default FAQS
