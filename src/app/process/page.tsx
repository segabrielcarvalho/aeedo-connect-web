import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Importância da Doação de Órgãos" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A doação de órgãos é um gesto de solidariedade que salva vidas. Uma única pessoa pode transformar a vida de até oito pacientes, além de melhorar a qualidade de vida de dezenas de outras com a doação de tecidos, como córneas e pele.
        </p>
        <p>
          No Brasil, milhares de pessoas aguardam na fila por um transplante, sendo essa a única chance de cura para muitas delas. Promover a conscientização é essencial para reduzir essa espera e oferecer uma nova chance para quem mais precisa.
        </p>
      </div>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Requisitos e Procedimentos" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Para ser um doador, é fundamental comunicar à família o desejo de doar órgãos. No Brasil, a autorização familiar é indispensável para a doação após o falecimento. 
        </p>
        <p>
          A doação pode ser feita em vida ou após a morte encefálica confirmada. Doadores vivos podem oferecer um rim, parte do fígado ou da medula óssea sem comprometer sua saúde. Para doadores falecidos, a doação abrange órgãos como coração, pulmões, fígado, rins e pâncreas.
        </p>
        <TagList className="mt-4">
          <TagListItem>Consentimento familiar</TagListItem>
          <TagListItem>Confirmação de morte encefálica</TagListItem>
          <TagListItem>Exames médicos</TagListItem>
        </TagList>
      </div>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Benefícios e Riscos" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          A doação de órgãos oferece a possibilidade de salvar vidas e melhorar a qualidade de vida de pessoas gravemente doentes. Para o receptor, os benefícios incluem a restauração da saúde e a retomada de atividades diárias.
        </p>
        <p>
          Os riscos associados à doação estão relacionados principalmente ao receptor, como rejeição do órgão ou complicações cirúrgicas. Contudo, os avanços médicos têm reduzido significativamente esses riscos, aumentando as taxas de sucesso dos transplantes.
        </p>
        <List className="mt-8">
          <ListItem title="Benefícios">
            Salvar vidas, melhorar a qualidade de vida e proporcionar esperança para famílias.
          </ListItem>
          <ListItem title="Riscos">
            Possibilidade de rejeição do órgão e complicações cirúrgicas, monitoradas por equipes médicas especializadas.
          </ListItem>
        </List>
      </div>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <SectionIntro
        eyebrow="Leis e Direitos"
        title="Legislação sobre Doação de Órgãos no Brasil"
      >
        <p>
          A doação de órgãos no Brasil é regulamentada pela Lei nº 9.434/1997, que garante a segurança e ética no processo. Recentemente, a Lei nº 14.722/2023 reforçou a importância da conscientização e incentivo à doação.
        </p>
      </SectionIntro>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Doação de Órgãos',
  description: 'Informações completas sobre a importância, requisitos e benefícios da doação de órgãos no Brasil.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Doação de Órgãos" title="Conscientize e Salve Vidas">
        <p>
          A doação de órgãos é um ato de amor que transcende a vida. Entenda os benefícios, requisitos e leis que tornam esse gesto essencial para salvar vidas.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
