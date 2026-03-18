import { APP_SERVICES } from '@/constants';
import { ServiceCard } from './service-card';

export function ServiceList() {
  return (
    <ul className="grid-responsive">
      {APP_SERVICES.map(({ icon: Icon, ...service }) => (
        <li key={service.id}>
          <ServiceCard service={{ ...service, icon: Icon }} />
        </li>
      ))}
    </ul>
  );
}
