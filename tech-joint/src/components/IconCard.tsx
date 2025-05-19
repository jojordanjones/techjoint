import { Link } from 'react-router-dom';

type Props = {
  id: string;
  title: string;
  icon: string;
  href: string;
  comingSoon?: boolean;
};

export default function IconCard({ id, title, icon, href, comingSoon }: Props) {
  const content = (
    <div className="flex flex-col items-center p-4 border rounded hover:bg-gray-50">
      <img src={icon} alt={title} className="w-8 h-8 mb-2" />
      <span>{title}</span>
    </div>
  );

  return comingSoon ? (
    <div>{content}</div>
  ) : (
    <Link to={href}>{content}</Link>
  );
}
