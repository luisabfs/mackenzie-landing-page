import { Header } from '@/components/Header';

export default function Home() {
  return (
    <main className="flex flex-col font-inter">
      <section className='flex flex-grow h-fit'>
        <div className='absolute h-screen w-screen z-0 rounded-b-3xl bg-red' />

        <div className='z-10 p-10 lg:p-20'>
          <Header />
          <div className='flex flex-col items-center'>
            <h1 className='text-6xl sm:text-8xl text-center'><span className='text-white lg:text-slate-900 font-bold'>NOSSA</span> IDENTIDADE</h1>

            <div className='flex flex-row pt-10 gap-10 flex-wrap'>
              <div className='flex flex-2 h-[34rem] lg:h-[30rem] w-full lg:w-3/5  rounded-3xl shadow-2xl bg-gray-300' />
              
              <div className='flex flex-1 flex-col items-end lg:items-center'>
                <h2 className='text-4xl text-slate-900 font-bold mb-5 visible lg:hidden self-start'>
                  Mais de 
                  <span className='text-red font-bold'> 150 anos </span>
                  de história
                </h2>
                <p className='text-2xl text-gray-500 lg:text-white font-light'>
                    Com mais de 150 anos de história, o
                    Mackenzie é uma instituição educacional
                    pioneira, agente de inovações pedagógicas.
                    Comprometido com valores e princípios
                    cristãos, o Instituto busca formar cidadãos
                    capazes de discernir, realizar uma leitura do
                    mundo e intervir na sociedade.
                </p>
                
                <div className='lg:border-2 lg:w-1/2 p-3 my-5 md:my-10 lg:my-16 rounded-md text-center'>
                  <h2 className='text-xl lg:text-4xl font-bold lg:font-bebas text-red lg:text-white'>SAIBA MAIS</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='flex flex-1 flex-grow text-gray-500'>
        <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-10 lg:p-20'>
           <div className='row-span-6 min-h-[16rem] rounded-3xl bg-gray-300 shadow-xl' />
           <p className='text-2xl text-gray-500 font-light'>
            O Sistema Mackenzie de Ensino é líder na oferta de uma
            proposta educacional sustentada pela tradição cristã. Com
            materiais didáticos e soluções pedagógicas, atendemos mais
            de 400 escolas, incluindo unidades próprias e parceiras.
            Destacamo-nos como o primeiro sistema de ensino cristão e o
            mais relevante academicamente no país.
          </p>
         
          <div className='row-span-6 min-h-[16rem] rounded-3xl bg-gray-300 shadow-xl' />
          <p className='text-2xl text-gray-500 font-light'>
            O Sistema Mackenzie de Ensino trabalha para fornecer uma
            pedagogia cristã, com materiais e recursos didáticos, que
            conduza essa geração a glorificar a Deus por meio de uma
            atuação biblicamente orientada, social e culturalmente
            relevantes.
          </p>

          <div className='row-span-6 min-h-[16rem] rounded-3xl bg-gray-300 shadow-xl' />
          <div>
            <h2 className='text-4xl text-slate-900 font-bold mb-5'>
              Histórico do <span className='text-red font-bold'>SME</span>
            </h2>

            <p className='text-2xl text-gray-500 font-light'>
              Desenvolvemos um modelo pedagógico alinhado com a
              filosofia cristã e o entendimento de que todo conhecimento
              provém de Deus e é o ponto convergente de todo raciocínio.
            </p>
            <div className='my-5 text-end lg:text-start'>
              <h2 className='text-xl font-bold text-red'>SAIBA MAIS</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
