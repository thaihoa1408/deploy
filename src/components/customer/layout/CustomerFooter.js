/**
 * Customer Fixed bottom footer */
import React from 'react'

export default function CustomerFooter(props){
  const classPrefix = (props.classPrefix) ? props.classPrefix : 'py-3'
  return (
    <footer
      className="fixed-bottom bottom-0 bg-white overflow-hidden"
      style={{
        borderTopLeftRadius: 'var(--tp-border-radius)',
        borderTopRightRadius: 'var(--tp-border-radius)',
        boxShadow: '0 -0.25rem 0.25rem rgb(0 0 0 / 8%)'
      }}
    >
      <div
       className={classPrefix}
      >
        {props.children}
      </div>
    </footer>
  )
}