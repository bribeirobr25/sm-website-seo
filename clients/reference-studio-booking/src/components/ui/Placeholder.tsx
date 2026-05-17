/**
 * Placeholder — visible missing-asset slot per TECH.md §Image-extraction.
 * Production cutover requires zero <Placeholder> in shipped pages.
 */

interface Props {
  label: string;
  aspectRatio?: string;
  rounded?: boolean;
  className?: string;
}

export function Placeholder({
  label,
  aspectRatio = '4 / 3',
  rounded = false,
  className = '',
}: Props) {
  return (
    <div
      role="img"
      aria-label={`Placeholder: ${label}`}
      className={`flex items-center justify-center bg-surface-elev border-2 border-dashed border-border text-text-muted text-xs uppercase tracking-wider p-4 ${
        rounded ? 'rounded-lg' : ''
      } ${className}`}
      style={{ aspectRatio }}
    >
      <span>{label}</span>
    </div>
  );
}
