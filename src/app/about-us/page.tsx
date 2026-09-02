import Link from 'next/link';
import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener.tsx'

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="About Us" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>

      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <div className="flex items-center justify-start gap-4 sm:gap-6 w-full">
              <div className="w-16 sm:w-20 md:w-24 min-w-[60px] flex items-center">
                <img 
                  src="/elements/arrows.svg" 
                  className="w-full h-auto drop-shadow-[0_0_0.2vw_rgba(102,102,102,0.5)]" 
                  alt="arrows" 
                />
              </div>
              
              <div className="relative flex-1">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide italic font-['Roadrunners'] bg-gradient-to-r from-[var(--red-fade)] to-[var(--red)] bg-clip-text text-transparent drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)] pb-2 pr-4 inline-block">
                  Who We Are
                </h2>
                <div className="w-full h-[3px] bg-[var(--medium-gray)]" />
              </div>
            </div>
            
            <p className="text-[var(--light-gray)] text-base sm:text-lg md:text-xl leading-loose text-left font-['Raleway'] w-full">
              The <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">Holliston RoboPanthers 2262</em> is a student-run, student-funded robotics team that is organized by students with the supervision of an adult mentor and advisor in <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">Holliston, MA</em>. We are about twenty-five members strong, and we participate in the <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">FIRST® Robotics Competition, FRC</em> as well as interact with our community by going to school events and by hosting free services such as car washes. Our goal is to get members of our community to develop a passion for <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">STEM</em>.
            </p>
          </SlideIn>

          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <div className="flex items-center justify-start gap-4 sm:gap-6 w-full">
              <div className="w-16 sm:w-20 md:w-24 min-w-[60px] flex items-center pt-16">
                <img 
                  src="/elements/arrows.svg" 
                  className="w-full h-auto drop-shadow-[0_0_0.2vw_rgba(102,102,102,0.5)]" 
                  alt="arrows" 
                />
              </div>
              
              <div className="relative flex-1 pt-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide italic font-['Roadrunners'] bg-gradient-to-r from-[var(--red-fade)] to-[var(--red)] bg-clip-text text-transparent drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)] pb-2 pr-4 inline-block">
                  Our Mission
                </h2>
                <div className="w-full h-[3px] bg-[var(--medium-gray)]" />
              </div>
            </div>
            
            <p className="text-[var(--light-gray)] text-base sm:text-lg md:text-xl leading-loose text-left font-['Raleway'] w-full">
              We believe in the importance of inspiring our students and teaching them essential skills that they can use throughout their lives. We promote exceptional qualities and mannerisms, such as the ability to have a <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">competitive spirit</em> while demonstrating <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">good sportsmanship</em> and the importance of <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">equality and acceptance</em>, especially in scientific fields of work. In addition, we teach our members about <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">design, engineering, fabrication, and programming</em> as well as life skills such as <em className="text-[var(--red)] font-bold not-italic drop-shadow-[0_0_0.5vw_rgba(179,36,36,0.5)]">leadership, teamwork, and time management</em> through this long-term project.
            </p>
          </SlideIn>
        </div>
        
        
      </section>
    </main>
  );
}
