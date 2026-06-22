import { BarChart3, CalendarCheck, GraduationCap, Megaphone, type LucideIcon } from 'lucide-react';

export type HubModule = {
  title: string;
  description: string;
  status: 'Ativo' | 'Em implantação' | 'Planejado';
  metric: string;
  icon: LucideIcon;
};

export const hubModules: HubModule[] = [
  {
    title: 'Acadêmico',
    description: 'Acompanhe aulas, turmas, notas e materiais em um só lugar.',
    status: 'Ativo',
    metric: '12 turmas',
    icon: GraduationCap,
  },
  {
    title: 'Eventos',
    description: 'Organize calendários, inscrições e lembretes para a comunidade.',
    status: 'Em implantação',
    metric: '8 eventos',
    icon: CalendarCheck,
  },
  {
    title: 'Comunicados',
    description: 'Centralize avisos importantes com segmentação por público.',
    status: 'Ativo',
    metric: '24 avisos',
    icon: Megaphone,
  },
  {
    title: 'Indicadores',
    description: 'Visualize métricas operacionais para tomar decisões rápidas.',
    status: 'Planejado',
    metric: '4 painéis',
    icon: BarChart3,
  },
];
