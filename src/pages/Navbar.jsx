import React from 'react'

const Navbar = () => {
  return (
    <div >
        <nav  >
            
                <h3>my-buddy</h3>
            
            <ul flex gap-6 list-none  >
                <li><a href='/' className=' no-underline text-white hover:text-blue-500'>Home</a></li>
                <li><a href='#page-4' className='no-underline text-white hover:text-blue-500'>About</a></li>
                <li><a href='/.footer-container' className=' no-underline text-white hover:text-blue-500'>Contact</a></li>
               
            </ul>
        </nav>
        </div>

  )
}

export default Navbar
