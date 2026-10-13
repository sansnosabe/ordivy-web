import Image from 'next/image';

export default function OrdivyLogo({ light = false, className = '' }) {
  return <Image className={className} src={light ? '/ordivy-logo-dark.png' : '/ordivy-logo-light.png'} width={1533} height={655} sizes="(max-width: 900px) 112px, 160px" alt="" aria-hidden="true" />;
}
