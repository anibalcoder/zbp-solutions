import { Service } from '@/constants/app-services';
import { CircleCheck } from 'lucide-react';

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  const { icon: Icon } = service;

  return (
    <article className="bg-white/3 border border-white/5 p-8 rounded-lg">
      <div className="size-14 flex items-center justify-center bg-highlight/10 rounded-xl mb-6">
        <Icon aria-hidden="true" className="text-highlight size-6" />
      </div>

      <h2 className="text-xl font-bold mb-4">{service.title}</h2>

      <ul className="space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2">
            <CircleCheck className="text-highlight size-4" />
            <span className="text-sm text-[#94A3B8] tracking-wider">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
};
