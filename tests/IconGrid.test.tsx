import { render, screen } from '@testing-library/react';
import IconGrid from '../src/components/IconGrid';
import type { Tool } from '../src/data/tools';

const tools: Tool[] = [
  { id: 't1', title: 'Tool 1', icon: () => <svg />, href: '/#/tool/t1' },
];

describe('IconGrid', () => {
  it('renders tools', () => {
    render(<IconGrid tools={tools} />);
    expect(screen.getByText('Tool 1')).toBeInTheDocument();
  });
});
