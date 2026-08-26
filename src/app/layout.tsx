import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Holliston Robotics - 2262 RoboPanthers',
  description:
    'Est. 2007; The Holliston High School Robotics team is a student-run robotics team that competes in the annual FIRST® Robotics Competition.',
  keywords: ['HHS', 'Holliston', 'high school', 'robotics', 'RoboPanthers', '2262'],
  openGraph: {
    title: 'Holliston Robotics - 2262 RoboPanthers',
    description: "Visit the official page of Holliston's FIRST Robotics team - Est. 2007 -",
    url: 'https://team2262.zimengsrealm.com',
    images: ['https://team2262.zimengsrealm.com/icons/thumb.jpg'],
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={raleway.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
