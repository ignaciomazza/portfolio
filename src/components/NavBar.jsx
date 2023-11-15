"use client"
import React from 'react'
import { useState } from 'react'

function NavBar() {

  const [active, setActive] = useState("inicio")

  return (
    <div className="fixed bottom-0 z-50 w-full -translate-x-1/2 left-1/2">
      <div className="w-full px-2">
        <nav className="grid grid-cols-4 gap-1 p-1 mx-auto my-2 backdrop-blur-3xl bg-white/10 rounded-lg shadow-2xl" role="group">
          <button
            type="button"
            className={`px-5 py-1.5 text-xs font-medium ${active == "inicio"? "text-black bg-gray-200 hover:bg-[#777777] hover:text-white" : "text-white hover:bg-[#333333]"} rounded-lg transition-colors duration-300`}
            onClick={() => setActive("inicio")}
          >
            Inicio
          </button>
          <button
            type="button"
            className={`px-5 py-1.5 text-xs font-medium ${active == "proyectos" ? "text-black bg-gray-200 hover:bg-[#777777] hover:text-white" : "text-white hover:bg-[#333333]"} rounded-lg transition-colors duration-300`}
            onClick={() => setActive("proyectos")}
          >
            Proyectos
          </button>
          <button
            type="button"
            className={`px-5 py-1.5 text-xs font-medium ${active == "yo" ? "text-black bg-gray-200 hover:bg-[#777777] hover:text-white" : "text-white hover:bg-[#333333]"} rounded-lg transition-colors duration-300`}
            onClick={() => setActive("yo")}
          >
            Yo
          </button>
          <button
            type="button"
            className={`px-5 py-1.5 text-xs font-medium ${active == "contacto" ? "text-black bg-gray-200 hover:bg-[#777777] hover:text-white" : "text-white hover:bg-[#333333]"} rounded-lg transition-colors duration-300`}
            onClick={() => setActive("contacto")}
          >
            Contacto
          </button>
        </nav>
      </div>
    </div>
  )
}

export default NavBar