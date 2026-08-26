import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-dark-gray border-t border-light-gray/10 text-light-gray py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src="/icons/logo.svg" className="h-6 w-auto" alt="Logo" />
            <span className="font-bold text-white text-lg">Holliston RoboPanthers 2262</span>
          </div>
          <p className="text-sm text-medium-gray">
            Inspiring STEM and innovation in Holliston, MA.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/about-us" className="hover:text-red transition-colors">About Us</Link>
          <Link href="/about-frc" className="hover:text-red transition-colors">About FRC</Link>
          <Link href="/sponsors" className="hover:text-red transition-colors">Sponsors</Link>
          <Link href="/get-involved" className="hover:text-red transition-colors">Get Involved</Link>
        </div>

        <div className="text-xs text-medium-gray">
          © {new Date().getFullYear()} Holliston Robotics
        </div>
      </div>
    </footer>
  );
}
