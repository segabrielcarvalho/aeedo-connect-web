import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-light.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-light.svg'
import logoGreenLife from '@/images/clients/green-life/logo-light.svg'
import logoHomeWork from '@/images/clients/home-work/logo-light.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-light.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-light.svg'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import logoPhobiaLight from '@/images/clients/phobia/logo-light.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Phobia', logoPhobiaLight],
  ['Family Fund', logoFamilyFund],
  ['Unseal', logoUnseal],
  ['Mail Smirk', logoMailSmirk],
  ['Home Work', logoHomeWork],
  ['Green Life', logoGreenLife],
  ['Bright Path', logoBrightPath],
  ['North Adventures', logoNorthAdventures],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-[#63F5E4] py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-[#333333] sm:text-left">
            Juntos com parceiros incríveis pela doação de órgãos.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Histórias que Inspiram"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-[#666666]">
          Veja como a doação de órgãos transformou vidas e gerou esperança em
          momentos de dificuldade.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 bg-[#E0F4FF] border border-[#63F5E4] transition-all duration-300 hover:bg-[#63F5E4] hover:shadow-lg sm:p-8">
                <h3 className='text-[#333333]'>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-[#666666]">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Estudo de caso</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-[#333333]">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-[#666666]">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Serviços"
        title="Apoiamos iniciativas sociais com soluções tecnológicas inovadoras."
        className="mt-24 sm:mt-32 lg:mt-40 text-[#333333]"
      >
        <p className="text-[#666666]">
          Oferecemos ferramentas e tecnologias para transformar ideias em ações
          concretas, promovendo impacto positivo na sociedade.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Desenvolvimento Web">
              Criamos páginas web responsivas e acessíveis para promover a
              conscientização e facilitar a conexão entre doadores e receptores.
            </ListItem>
            <ListItem title="Desenvolvimento de Aplicações">
              Nossa equipe desenvolve soluções personalizadas, utilizando as
              tecnologias mais recentes para atender às necessidades de impacto
              social.
            </ListItem>
            <ListItem title="E-commerce">
              Estamos na vanguarda do desenvolvimento de plataformas de
              arrecadação online, oferecendo suporte para campanhas de doação e
              projetos sociais.
            </ListItem>
            <ListItem title="Gestão de Conteúdo Personalizada">
              Entendemos a importância de uma gestão de conteúdo robusta. Por
              isso, integramos sistemas eficientes para potencializar projetos
              sociais.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-[#63F5E4] [text-wrap:balance] sm:text-7xl">
            Doe órgãos, salve vidas.
          </h1>
          <p className="mt-6 text-xl text-[#666666]">
            Conscientize-se sobre a importância da doação de órgãos e ajude a transformar vidas. Faça parte dessa causa.
          </p>
        </FadeIn>
      </Container>


      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40 rounded-xl p-6 shadow-lg"
        client={{ name: 'Phobia', logo: logoPhobiaDark }}
      >
        O Projeto Vida mudou minha percepção sobre a importância da doação de órgãos.
        A equipe foi além, criando campanhas que realmente tocam as pessoas e promovem esperança.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
