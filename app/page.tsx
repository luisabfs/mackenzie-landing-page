import Image from 'next/image';
import logo from 'public/logo.png';

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className='h-screen rounded-b-3xl bg-red font-inter p-20 '>
        <section className='flex items-center mb-20'>
          <Image src={logo} alt="Logo Mackenzie" className='object-contain object-left flex flex-1 h-10 '/>

          <div className='space-x-12 sm:invisible lg:visible'>
            <a>Nossa identidade</a>
            <a>Materiais didáticos</a>
            <a>Soluções educacionais</a>
            <a className='bg-white text-red text-sm font-semibold p-2 rounded-md'>LOGIN</a>
          </div>
        </section>

        <section className='flex h-full flex-col items-center'>
          <h1 className='text-8xl text-center'><span className='text-slate-900 font-bold'>NOSSA</span> IDENTIDADE</h1>

          <div className='flex flex-row py-20 gap-10 flex-wrap'>
            <div className='flex w-full lg:w-3/5 h-[144%] rounded-3xl shadow-2xl bg-gray-300' />
            <div className='flex flex-1 flex-col items-center '>
              <p className='text-2xl text-gray-500 lg:text-white font-light'>
                  Com mais de 150 anos de história, o
                  Mackenzie é uma instituição educacional
                  pioneira, agente de inovações pedagógicas.
                  Comprometido com valores e princípios
                  cristãos, o Instituto busca formar cidadãos
                  capazes de discernir, realizar uma leitura do
                  mundo e intervir na sociedade.
              </p>
              <div className='border-2 w-1/2 p-3 mt-16 rounded-md text-center'>
                <h2 className='text-4xl font-bold font-bebas'>SAIBA MAIS</h2>
              </div>
            </div>
          </div>
        </section>
      </section>

    </main>
  )
}
