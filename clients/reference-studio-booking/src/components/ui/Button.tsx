import Link from 'next/link';
import type { ComponentProps, ReactNode } from 'react';

/**
 * Button — primary / secondary / ghost variants.
 * Per DESIGN-BEST-PRACTICES.md §Hover state contrast: hover is darken
 * (--color-accent-deep), not lighten.
 */

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const base =
  'inline-flex items-center justify-center font-medium rounded-md transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none';

const variantMap: Record<Variant, string> = {
  primary: 'bg-accent text-bg hover:bg-accent-deep',
  secondary: 'bg-surface text-text border border-border hover:bg-surface-elev',
  ghost: 'text-text-muted hover:text-accent',
};

const sizeMap: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm min-h-[44px]',
  md: 'px-5 py-3 text-base min-h-[48px]',
  lg: 'px-7 py-4 text-lg min-h-[52px]',
};

type BaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkProps = BaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, 'className' | 'children' | 'href'>;

type ButtonProps = BaseProps & {
  href?: undefined;
} & Omit<ComponentProps<'button'>, 'className' | 'children'>;

export function Button(props: LinkProps | ButtonProps) {
  const variant = props.variant ?? 'primary';
  const size = props.size ?? 'md';
  const cls = `${base} ${variantMap[variant]} ${sizeMap[size]} ${props.className ?? ''}`;

  if ('href' in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children, ...rest } = props;
    if (external || href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
      return (
        <a
          href={href}
          className={cls}
          target={external || href.startsWith('http') ? '_blank' : undefined}
          rel={external || href.startsWith('http') ? 'noopener noreferrer' : undefined}
          {...(rest as ComponentProps<'a'>)}
        >
          {children}
        </a>
      );
    }
    return (
      // biome-ignore lint/correctness/useExhaustiveDependencies: rest spread
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children, ...rest } = props as ButtonProps;
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
