import clsx from 'clsx'

function Office({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-textPrimary' : 'text-textPrimary', // Ajuste para cores de texto secundário
      )}
    >
      <strong className={invert ? 'text-textPrimary' : 'text-textPrimary'}> {/* Ajuste para texto principal */}
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({
  invert = false,
  ...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Office name="Brasil" invert={invert}>
          Anápolis - GO
          <br />
          Av. Universitária, s/n - Cidade Universitária
          <br />
          UniEVANGÉLICA (Universidade Evangélica de Goiás)
        </Office>
      </li>
    </ul>
  )
}
