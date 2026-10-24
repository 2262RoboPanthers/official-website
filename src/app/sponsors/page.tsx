import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener'
import SponsorsPanel, {Sponsor} from '@/components/SponsorsPanel';


/* title: string, link: string, imageUrl:string */
const platinumSponsors: Sponsor[] = [
];

const goldSponsors: Sponsor[] = [
  {title: "BAE Systems", link:"https://www.baesystems.com/en", imageUrl:"/sponsors/BAES logo.png"}
];

const silverSponsors: Sponsor[] = [
];

const bronzeSponsors: Sponsor[] = [
];

export default function Home() {
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="Sponsors" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>

      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn>
          <SponsorsPanel
        heading="Platinum Sponsors"
        sponsors={platinumSponsors}
        relativeWidth={10}
      />
        </SlideIn>
        
        <SlideIn>
          <SponsorsPanel
        heading="Gold Sponsors"
        sponsors={goldSponsors}
        relativeWidth={7}
      />
        </SlideIn>

        <SlideIn>
          <SponsorsPanel
        heading="Silver Sponsors"
        sponsors={silverSponsors}
        relativeWidth={4}
      />
        </SlideIn>

        <SlideIn>
          <SponsorsPanel
        heading="Bronze Sponsors"
        sponsors={bronzeSponsors}
        relativeWidth={2}
      />
        </SlideIn>
        </div>
        
      </section>
    </main>
  );
}
