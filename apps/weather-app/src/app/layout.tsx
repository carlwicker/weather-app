import './global.css';
import { Capriola } from 'next/font/google';
import Link from 'next/link';

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
        <a
          href="#main"
          className="absolute -translate-y-[50px] text-white bg-black focus:outline-red-400"
          tabIndex={-1}
        >
          Skip to main content
        </a>
        <h1 className="hidden">Welcome to Weather App</h1>

        {children}
      </body>
    </html>
  );
}
