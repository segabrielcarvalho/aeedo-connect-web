import { type Metadata } from 'next'
import Image from 'next/image'

import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Nossa Cultura"
        title="Transformando sonhos em realidade com paixão e dedicação."
        invert
      >
        <p>
          Trabalhamos com inovação e empatia para oferecer uma solução que salva vidas e conecta pessoas.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Lealdade" invert>
            Valorizamos o compromisso mútuo em nossa equipe e com as pessoas que atendemos.
          </GridListItem>
          <GridListItem title="Confiança" invert>
            Garantimos um ambiente colaborativo e transparente para todos.
          </GridListItem>
          <GridListItem title="Compaixão" invert>
            Sabemos que salvar vidas é um ato de empatia e respeito.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Liderança',
    people: [
      {
        name: 'Gabriel Fernandes Carvalho',
        role: 'Engenheiro de Dados / Líder de Operações',
        image: { src: imageKathrynMurphy },
        
      },
      {
        name: 'Guilherme Rezende Damaceno',
        role: 'Arquiteto de Software / Líder Técnico',
        image: { src: imageEmmaDorsey },
      },
      {
        name: 'Ruan de Freitas Moreira',
        role: 'Analista de Requisitos / Líder de Qualidade',
        image: { src: imageJeffreyWebb },
        
      },
    ],
  },
  {
    title: 'Equipe',
    people: [
      {
        name: 'Calebe Rodrigues Rolim',
        role: 'Coordenador de Operações',
        image: { src: imageAngelaFisher },
      },
      {
        name: 'Filipe Mota Tocchio Rodrigues',
        role: 'Product Owner',
        image: { src: imageBenjaminRussel },
      },
      {
        name: 'Filipe Gideão Rodrigues',
        role: 'Desenvolvedor Front-End',
        image: { src: imageBlakeReid },
        
      },
      {
        name: 'Gabriel Reis Costa',
        role: 'Designer UX/UI',
        image: { src: imageChelseaHagon },
      },
      {
        name: 'José Vitor Pereira Silva',
        role: 'Analista de Qualidade',
        image: { src: imageLeonardKrasner },
      },
      {
        name: 'Gustavo Silva Batista Rosa',
        role: 'Desenvolvedor Back-End',
        image: { src: imageMichaelFoster },
      },
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Sobre Nós',
  description:
    'Acreditamos que nossa força está na inovação colaborativa e na missão de salvar vidas.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="Sobre Nós" title="Nossa força está na colaboração e propósito.">
        <p>
          Somos uma iniciativa universitária comprometida em usar tecnologia para salvar vidas e conectar pessoas.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Desde o início, acreditamos que a tecnologia pode ser um instrumento de mudança. Nosso sistema torna o processo de doação mais acessível e eficiente, oferecendo uma nova chance para quem precisa.
          </p>
          <p>
            Trabalhamos juntos como um time dedicado, motivados pelo desejo de causar impacto real na sociedade e salvar vidas.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Usuários conectados" />
          <StatListItem value="52" label="Vidas impactadas" />
          <StatListItem value="$25M" label="Investimento em tecnologia social" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Do nosso blog"
        intro="Descubra como estamos transformando vidas e conectando pessoas por meio de tecnologia inovadora."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
