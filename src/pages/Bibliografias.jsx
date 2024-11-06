import React from 'react'
import Nav from './Nav'
import Footer from "./Footer"

import iconLivro from '../assets/iconsRedes/iconLivro.svg'

export function Bibliografias() {
  return (
    <div>
      <Nav/>
      <section>
        <div className='p-4'>
          <div>
            <h1 className="text-purple text-2xl sm:px-44 py-6 mr-2 ml-10 font-semibold text-center sm:text-start font-titulo md:text-4xl mb-6 mt-6">Bibliografias</h1>
            <p className="font-paragrafo text-justify text-base sm:px-40 sm:py-38 sm:text-lg mb-5 mr-10 ml-[60px]">
              A ciência tem mostrado o quão é importante a utilização de meios que modifiquem o ensino e a aprendizagem através do uso da tecnologia, instiguem e criem situações provocantes, possam cativar a atenção das crianças, tornando o processo de aprendizagem mais envolvente e interessante. Partindo desse princípio, surgiu a ideia do protótipo do Robô Kids.
              <br/><br/>
              A tecnologia é um meio de aprendizagem inovador e eficaz, na qual a criança, além de se divertir, está aprendendo e progredindo seus conhecimentos.
              <br/><br/>
              Estudos indicam que novas tecnologias são um modo eficaz de aprender. Elas vêm como uma ferramenta criativa, não substituindo o professor, mas sim ajudando a chamar a atenção do aluno através de jogos educativos, que tornam o aprendizado mais divertido e envolvente. Isso pode aumentar a motivação para aprender de maneira interativa e prática, e então melhorar significativamente a qualidade e a eficácia da educação.
            </p>
          </div>

          <div className='flex items-center mt-12 mb-6'>
            <h2 className='text-purple text-xl sm:text-2xl font-titulo my-14 font-normal whitespace-nowrap sm:ml-[230px] ml-10'>Artigos Científicos</h2>
            <hr className='w-[100px] border-purple sm:w-[1240px] pr-[20px] ml-3 mr-[10px]' />
          </div>

          <div className='flex flex-col sm:flex-row items-center justify-center px-6 sm:px-44 mb-24 gap-20'>
            {[
              { id: 1, title: 'Artigo 1', description: 'Linguagem Visual para Arduino na Educação Básica como Possibilidade Metodológica', link: 'https://sol.sbc.org.br/index.php/ctrle/article/view/25805' },
              { id: 2, title: 'Artigo 2', description: 'A robótica como facilitadora do processo ensino-aprendizagem de matemática no ensino fundamental', link: 'https://books.scielo.org/id/bpkng/11' },
              { id: 3, title: 'Artigo 3', description: 'O Uso da Robótica Educacional no Ensino Fundamental: Um estudo de caso preliminar', link: 'https://escolaweb.educacao.al.gov.br/odas/o-uso-da-robotica-educacional-no-ensino-fundamental-um-estudo-de-caso-preliminar-47033' },
              { id: 4, title: 'Artigo 4', description: 'Robótica na Educação Infantil: Educação Tecnológica para Crianças', link: 'https://virtualtechdicas.com.br/robotica-na-educacao-infantil-educacao-tecnologica-para-criancas/' }
            ].map((article) => (
              <div key={article.id} className="w-72 h-96 rounded-lg border-2 border-purple p-2 flex-col items-center flex relative group">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 bg-white bg-opacity-80 flex items-center justify-center transition-opacity duration-300">
                  <span className="text-purple font-semibold text-lg">Acessar Artigo</span>
                </a>
                <img className="w-28 h-32 mb-8 translate-y-6 overflow-hidden flex flex-col items-center justify-between bg-white transition-opacity duration-300" src={iconLivro} alt="Ícone do Livro"/>
                <p className="text-purple text-2xl font-semibold font-paragrafo mb-2">{article.title}</p>
                <p className="text-center text-black text-base text-justify font-paragrafo px-6">{article.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}
