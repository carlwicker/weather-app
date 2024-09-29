import './global.css';
import { Capriola } from 'next/font/google';

const capriola = Capriola({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'Welcome to Weather App',
  description: 'Created by Blue Cresent',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`bg-[#100E1D] ${capriola.className}`}>
        <a href="#main" className="hidden">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
