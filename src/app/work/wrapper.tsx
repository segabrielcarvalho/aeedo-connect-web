import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GrayscaleTransitionImage } from '@/components/GrayscaleTransitionImage'
import { MDXComponents } from '@/components/MDXComponents'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

export default async function CaseStudyLayout({
  caseStudy,
  children,
}: {
  caseStudy: MDXEntry<CaseStudy>
  children: React.ReactNode
}) {
  let allCaseStudies = await loadCaseStudies()
  let moreCaseStudies = allCaseStudies
    .filter(({ metadata }) => metadata !== caseStudy)
    .slice(0, 2)

  return (
    <>
      <article className="mt-24 sm:mt-32 lg:mt-40 bg-[#FFFFFF]">
        <header>
          <PageIntro eyebrow="Estudo de caso" title={caseStudy.title} centered>
            <p className="text-[#666666]">{caseStudy.description}</p>
          </PageIntro>

          <FadeIn>
            <div className="mt-24 bg-[#E0F4FF] sm:mt-32 lg:mt-40">
              <Container>
                <div className="mx-auto max-w-5xl">
                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-sm text-[#333333] text-center">
                    <div className="flex flex-col items-center">
                      <dt className="font-semibold uppercase text-sm text-[#333333]">Cliente</dt>
                      <dd className="mt-1 text-base">{caseStudy.client}</dd>
                    </div>
                    <div className="flex flex-col items-center">
                      <dt className="font-semibold uppercase text-sm text-[#333333]">Ano</dt>
                      <dd className="mt-1 text-base">
                        <time dateTime={caseStudy.date.split('-')[0]}>
                          {caseStudy.date.split('-')[0]}
                        </time>
                      </dd>
                    </div>
                    <div className="flex flex-col items-center">
                      <dt className="font-semibold uppercase text-sm text-[#333333]">Serviço</dt>
                      <dd className="mt-1 text-base">{caseStudy.service}</dd>
                    </div>
                  </dl>
                </div>
              </Container>
            </div>

            <div className="border-y border-neutral-200 bg-neutral-100">
              <div className="-my-px mx-auto max-w-[76rem] bg-neutral-200">
                <GrayscaleTransitionImage
                  {...caseStudy.image}
                  quality={90}
                  className="w-full"
                  sizes="(min-width: 1216px) 76rem, 100vw"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </header>

        <Container className="mt-24 sm:mt-32 lg:mt-40">
          <FadeIn>
            <MDXComponents.wrapper>{children}</MDXComponents.wrapper>
          </FadeIn>
        </Container>
      </article>


      {moreCaseStudies.length > 0 && (
        <PageLinks
          className="mt-24 sm:mt-32 lg:mt-40"
          title="Mais estudos de caso"
          pages={moreCaseStudies}
        />
      )}

      <ContactSection />
    </>
  )
}
