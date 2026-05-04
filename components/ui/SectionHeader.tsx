interface SectionHeaderProps {
  label?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  light?: boolean
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeaderProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]

  return (
    <div className={`mb-12 lg:mb-16 ${alignClass}`}>
      {label && (
        <p
          className={`uppercase tracking-widest text-sm font-medium mb-3 ${
            light ? 'text-forest-500' : 'text-forest-300'
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? 'text-forest-900' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${light ? 'text-forest-700' : 'text-forest-200'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
