import React from 'react'
import Image from 'next/image'

function Home() {
  const styles = "backdrop-blur-2xl bg-white/10 border border-white/10 h-[100%] w-[100%] rounded-lg hover:shadow-2xl hover:bg-white/20 transition"
  return (
    <main className='grid auto-rows-[200px] sm:auto-rows-[250px] grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 justify-items-center text-white'>
      <div
        className={`col-span-2 ${styles} p-3`}
      >
        <h1>Hola, soy Ignacio Mazza</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus repudiandae aliquid dolorum enim dolore doloribus reiciendis explicabo nostrum, eveniet veniam reprehenderit optio dolor itaque deleniti, sit voluptate alias iste libero.</p>
      </div>
      <div
        className={`sm:col-span-1 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-1 row-span-2 ${styles}`}
      >
        <Image
          src="/images/profile.jpeg"
          height={400}
          width={400}
          alt="Imagen de Ignacio Mazza"
          className="rounded-lg object-cover h-full"
          priority={false}
        />
      </div>
      <div
        className={`sm:col-span-2 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-2 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-3 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-1 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-1 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-1 ${styles}`}
      >

      </div>
      <div
        className={`sm:col-span-3 row-span-3 ${styles}`}
      >

      </div>
    </main>
  )
}

export default Home