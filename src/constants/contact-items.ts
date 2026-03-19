import { ContactItem } from '@/interfaces';
import { MessageSquareTextIcon, MailIcon } from 'lucide-react';

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: MessageSquareTextIcon,
    label: 'WhatsApp Directo',
    value: '+51 944 962 511',
    href: 'https://wa.me/51944962511',
  },
  {
    icon: MailIcon,
    label: 'Email Corporativo',
    value: 'zapatapaul215@gmail.com',
    href: 'mailto:zapatapaul215@gmail.com',
  },
];
