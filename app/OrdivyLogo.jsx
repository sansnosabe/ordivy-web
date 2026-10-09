export default function OrdivyLogo({ light = false, className = '' }) {
  return <img className={className} src={light ? '/ordivy-logo-dark.png' : '/ordivy-logo-light.png'} width={1533} height={655} alt="" aria-hidden="true" />;
}
