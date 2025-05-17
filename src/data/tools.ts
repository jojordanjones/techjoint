import { AcademicCapIcon } from '@heroicons/react/24/outline';
import type { ComponentType, SVGProps } from 'react';

export interface Tool {
  id: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  href: string;
  comingSoon?: boolean;
}

const tools: Tool[] = [
  {
    id: 'audio',
    title: 'Audio Transcription',
    icon: AcademicCapIcon,
    href: '/#/tool/audio',
  },
];

export default tools;
