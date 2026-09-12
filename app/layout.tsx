import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shyam | Full Stack Developer | .NET Developer',
  description: 'Portfolio of Shyam, a Computer Science Engineering student and aspiring .NET Full Stack Developer specializing in C#, ASP.NET Core, Web API, SQL Server, and modern web development.',
  keywords: [
    'Shyam',
    '.NET Developer',
    'Full Stack Developer',
    'C#',
    'ASP.NET Core',
    'ASP.NET Core Web API',
    'SQL Server',
    'Entity Framework Core',
    'Computer Science Student',
    'Fresher Developer Portfolio'
  ],
  authors: [{ name: 'Shyam' }],
  openGraph: {
    title: 'Shyam | Full Stack Developer | .NET Developer',
    description: 'Portfolio of Shyam, a Computer Science Engineering student and aspiring .NET Full Stack Developer specializing in C#, ASP.NET Core, Web API, SQL Server, and modern web development.',
    type: 'website',
    url: 'https://github.com/shyamnandasana/',
    siteName: 'Shyam Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shyam | Full Stack Developer | .NET Developer',
    description: 'Computer Science Engineering student & aspiring .NET Full Stack Developer.'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }} suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
