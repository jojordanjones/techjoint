import tools from '../data/tools';
import IconCard from './IconCard';

export default function IconGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {tools.map((tool) => (
        <IconCard key={tool.id} {...tool} />
      ))}
    </div>
  );
}
