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
        invert ? 'text-[#E0F4FF]' : 'text-[#666666]', // Ajuste para cores de texto secundário
      )}
    >
      <strong className={invert ? 'text-white' : 'text-[#333333]'}> {/* Ajuste para texto principal */}
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
        <Office name="Copenhagen" invert={invert}>
          1 Carlsberg Gate
          <br />
          1260, København, Denmark
        </Office>
      </li>
      <li>
        <Office name="Billund" invert={invert}>
          24 Lego Allé
          <br />
          7190, Billund, Denmark
        </Office>
      </li>
    </ul>
  )
}
