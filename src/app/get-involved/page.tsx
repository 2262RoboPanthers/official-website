import SlideIn from '@/components/SlideIn';
import OpeningBanner from '@/components/SectionOpener'
import TextSection from '@/components/TextSection'
import QRboard from '@/components/QRboard'


export default function Home() {
  const elements=[
              {src:"/elements/2262robopanthers_qr.png",caption:"RoboPanthers Instagram Page",link:"https://www.instagram.com/2262robopanthers/"},
              {src:"/elements/Interest Form.svg",caption:"Interest Form",link:"https://forms.gle/fosd4kv4MHTCMG889"}
            ]
  return (
    <main className="w-full bg-[var(--dark-gray)] text-[var(--light-gray)]">
      <OpeningBanner title="Get Involved" backgroundImageSrc="/backgrounds/grayscale-background.jpg"></OpeningBanner>
      <section className="w-full py-16 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full">
          <SlideIn>
            <QRboard heading="Our Team" items={elements}></QRboard>
          </SlideIn>
        </div>
      </section>
    </main>
  );
}
