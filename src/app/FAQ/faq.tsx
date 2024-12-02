import { Container } from '@/components/Container'
import { SectionIntro } from '@/components/SectionIntro'

export default function FAQPage() {
  return (
    <>
      <SectionIntro
        eyebrow="Perguntas Frequentes"
        title="Desmistificando a AEDO"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="text-textSecondary">
          Aqui você encontra as respostas para as dúvidas mais comuns sobre a
          Autorização Eletrônica de Doação de Órgãos (AEDO).
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="faq bg-primary p-6 rounded-lg shadow-md">
          <details className="mb-4">
            <summary className="cursor-pointer font-medium text-lg text-secondary bg-backgroundMain p-3 rounded-md shadow-sm hover:bg-backgroundAlt transition">
              Quais órgãos poderei doar?
            </summary>
            <p className="mt-2 text-sm text-textSecondary bg-backgroundMain p-3 rounded-md">
              Podem ser doados coração, córneas, fígado, intestino, medula,
              músculo esquelético, pâncreas, pele, pulmão, rins e válvula.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer font-medium text-lg text-secondary bg-backgroundMain p-3 rounded-md shadow-sm hover:bg-backgroundAlt transition">
              Poderei acrescentar outros órgãos a serem doados em uma AEDO que
              já fiz anteriormente?
            </summary>
            <p className="mt-2 text-sm text-textSecondary bg-backgroundMain p-3 rounded-md">
              Se desejar acrescentar outros órgãos a uma AEDO já emitida, deverá
              revogar a anterior e fazer uma nova com todos os órgãos desejados.
              Entre em contato com o cartório emissor para mais orientações.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer font-medium text-lg text-secondary bg-backgroundMain p-3 rounded-md shadow-sm hover:bg-backgroundAlt transition">
              Terei custos para fazer minha AEDO?
            </summary>
            <p className="mt-2 text-sm text-textSecondary bg-backgroundMain p-3 rounded-md">
              A emissão da AEDO pelos cartórios é gratuita.
            </p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer font-medium text-lg text-secondary bg-backgroundMain p-3 rounded-md shadow-sm hover:bg-backgroundAlt transition">
              Quem pode autorizar a doação de órgãos em caso de falecimento?
            </summary>
            <p className="mt-2 text-sm text-textSecondary bg-backgroundMain p-3 rounded-md">
              Além do próprio documento AEDO, os familiares diretos podem ser
              consultados para confirmar a autorização em casos de falecimento.
            </p>
          </details>
        </div>
      </Container>
    </>
  )
}
