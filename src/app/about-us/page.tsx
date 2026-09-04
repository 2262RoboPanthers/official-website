import Link from 'next/link';
import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener'
import TeamGrid, {TeamMember} from '@/components/TeamBoard'
import TextSection from '@/components/TextSection'

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="About Us" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>

      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Who We Are'>The [[[Holliston RoboPanthers 2262]]] is a student-run, student-funded robotics team that is organized by 
              students with the supervision of an adult mentor and advisor in [[[Holliston, MA]]]. We are about twenty-five members strong, and we 
              participate in the [[[FIRST® Robotics Competition, FRC]]] as well as interact with our community by going to school events and by hosting
               free services such as car washes. Our goal is to get members of our community to develop a passion for [[[STEM]]].</TextSection>
          </SlideIn>

          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Our Mission'>
                
            We believe in the importance of inspiring our students and teaching them essential skills that they can use throughout their lives. 
            We promote exceptional qualities and mannerisms, such as the ability to have a [[[competitive spirit]]] while demonstrating
             [[[good sportsmanship]]] and the importance of [[[equality and acceptance]]], especially in scientific fields of work. 
               In addition, we teach our members about [[[design, engineering, fabrication, and programming]]] as well as life skills such as 
             [[[leadership, teamwork, and time management]]] through this long-term project.
            </TextSection>
          </SlideIn>

          <SlideIn direction="up" className="flex flex-col gap-8 w-full">
            <TextSection title='Meet Our Team'/>
            <TeamGrid
  members={[
    { name: 'Beth S', imageSrc: '/elements/blankface.svg', role: 'Advisor'},
    { name: 'Zimeng Z', imageSrc: '/elements/blankface.svg', year: "'27" },
    { name: 'Isabella Y', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Matthew C', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Ksenia J', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Ashwin G', imageSrc: '/elements/blankface.svg', year: "'27"},
    { name: 'Anthony M', imageSrc: '/elements/blankface.svg', year: "'28"},
    { name: 'Arjun P', imageSrc: '/elements/blankface.svg', year: "'28"},
    { name: 'Paul K', imageSrc: '/elements/blankface.svg', year: "'29"},
  ]}
/>
          </SlideIn>
        </div>
        
        
      </section>
    </main>
  );
}
