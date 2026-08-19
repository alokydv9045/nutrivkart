import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile - NutriVKart',
  description: 'Manage your NutriVKart account profile, orders, and preferences',
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
