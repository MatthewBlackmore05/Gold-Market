import './globals.css';

export const metadata = {
  title: 'Aurum Market | Gold, Jewellery & Repairs',
  description: 'Buy, sell and restore with confidence at Aurum Market in St. Catharines.',
  icons: { icon: '/icon.svg' }
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
