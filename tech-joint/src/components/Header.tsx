import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="p-4 shadow mb-4 bg-white sticky top-0">
      <Link to="/" className="font-bold text-xl">
        TechJoint
      </Link>
    </header>
  );
}
