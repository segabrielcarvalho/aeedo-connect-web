import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function SelectInput({
  label,
  options,
  ...props
}: React.ComponentPropsWithoutRef<'select'> & { label: string; options: string[] }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <select
        id={id}
        {...props}
        className="block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-6 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      >
        <option value="" disabled selected hidden>
          Selecione uma opção
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label
        htmlFor={id}
        className="absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Entre em contato
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Nome" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput label="Telefone" type="tel" name="phone" autoComplete="tel" />
          <SelectInput
            label=""
            name="category"
            options={['Sugestão', 'Dúvida', 'Interesse', 'Crítica']}
          />
          <TextInput label="Assunto" name="subject" />
          <TextInput label="Mensagem" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Enviar Mensagem
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Informações de Contato
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Entre em contato conosco para saber mais sobre o sistema de doação de órgãos.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nosso email e telefone
        </h2>
        <dl className="mt-6 text-sm">
          <div>
            <dt className="font-semibold text-neutral-950">Email</dt>
            <dd>
              <Link
                href="mailto:salvarvidas@aedo.com.br"
                className="text-neutral-600 hover:text-neutral-950"
              >
                equipemobsocial@gmail.com

              </Link>
            </dd>
          </div>
          <div className="mt-4">
            <dt className="font-semibold text-neutral-950">Telefone</dt>
            <dd>
              <a
                href="tel:62993822772"
                className="text-neutral-600 hover:text-neutral-950"
              >
                (62) 99382-2772
              </a>
            </dd>
          </div>
        </dl>
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Nossas redes sociais
        </h2>
        <SocialMedia className="mt-6" />
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contato - Doação de Órgãos',
  description: 'Entre em contato para saber mais sobre o sistema de doação de órgãos.',
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contato" title="Entre em contato">
        <p>Estamos prontos para ajudar e ouvir suas mensagens.</p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
