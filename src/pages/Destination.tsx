import destinationBanner from '../assets/destination-page-images/destination-banner.jpg'
import DestinationCard from '../components/DestinationCard'

import AgaraImage from '../assets/destination-page-images/Agara-Image.jpg'
import DelhiImage from '../assets/destination-page-images/Delhi-Image.jpg'
import MumbaiImage from '../assets/destination-page-images/Mumbai-Image.jpg'
import JaipurImage from '../assets/destination-page-images/Jaipur-Image.jpg'
import UdaipurImage from '../assets/destination-page-images/Udaipur-Image.jpg'
import BangaloreImage from '../assets/destination-page-images/Bangalore-Image.jpg'
import HyderabadImage from '../assets/destination-page-images/Hyderabad-Image.jpg'
import PuneImage from '../assets/destination-page-images/Pune-Image.jpg'
import ManaliImage from '../assets/destination-page-images/Manali-Image.jpg'
import PunjabImage from '../assets/destination-page-images/Punjab-Image.jpg'
import MussoorieImage from '../assets/destination-page-images/Mussoorie-Image.jpg'
import NainitalImage from '../assets/destination-page-images/Nainital-Image.jpg'
import KashmirImage from '../assets/destination-page-images/Kashmir-Image.jpg'
import LadakhImage from '../assets/destination-page-images/Ladakh-Image.jpg'
import DarjeelingImage from '../assets/destination-page-images/Darjeeling-Image.jpg'
import KeralaImage from '../assets/destination-page-images/Kerala-Image.jpg'
import ChennaiImage from '../assets/destination-page-images/Chennai-Image.jpg'
import AhmedabadImage from '../assets/destination-page-images/Ahmedabad-Image.png'

import DubaiImage from '../assets/destination-page-images/Dubai-Image.jpg'
import BaliImage from '../assets/destination-page-images/Bali-Image.jpg'
import BeijingImage from '../assets/destination-page-images/Beijing-Image.jpg'
import MaldivesImage from '../assets/destination-page-images/Maldives-Image.jpg'
import MalaysiaImage from '../assets/destination-page-images/Malaysia-Image.jpg'
import AzerbaijanImage from '../assets/destination-page-images/Azerbaijan-Image.jpg'

import FaqSection from '../components/FaqSection'
import AureviaStandard from '../components/AureviaStandard'
import ExploreOurDestinations from '../components/ExploreOurDestinations'
import AnimateSection from '../components/AnimateSection'

const Destination = () => {

    const domesticDestinations = [
        { name: 'Agra', image: AgaraImage },
        { name: 'Delhi', image: DelhiImage },
        { name: 'Mumbai', image: MumbaiImage },
        { name: 'Jaipur', image: JaipurImage },
        { name: 'Udaipur', image: UdaipurImage },
        { name: 'Bangalore', image: BangaloreImage },
        { name: 'Hyderabad', image: HyderabadImage },
        { name: 'Pune', image: PuneImage },
        { name: 'Manali', image: ManaliImage },
        { name: 'Punjab', image: PunjabImage },
        { name: 'Mussoorie', image: MussoorieImage },
        { name: 'Nainital', image: NainitalImage },
        { name: 'Kashmir', image: KashmirImage },
        { name: 'Ladakh', image: LadakhImage },
        { name: 'Darjeeling', image: DarjeelingImage },
        { name: 'Kerala', image: KeralaImage },
        { name: 'Chennai', image: ChennaiImage },
        { name: 'Ahmedabad', image: AhmedabadImage },
    ]

    const internationalDestinations = [
        { name: 'Dubai', image: DubaiImage },
        { name: 'Bali', image: BaliImage },
        { name: 'Beijing', image: BeijingImage },
        { name: 'Maldives', image: MaldivesImage },
        { name: 'Malaysia', image: MalaysiaImage },
        { name: 'Azerbaijan', image: AzerbaijanImage },
    ]

    return (
        <div>
            <section
                className="relative overflow-hidden bg-neutral-900 text-secondary h-[450px] sm:h-[765px]"
                aria-labelledby="aurevia-hero-title"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            `url(${destinationBanner})`
                    }}
                />

                <div className="absolute inset-0 bg-black/40 sm:bg-black/35" />

                <AnimateSection>
                    <div className="relative flex flex-col items-center justify-center px-4 py-16 text-center h-[450px] sm:min-h-[765px] md:px-10 lg:px-16">
                        <h1
                            id="aurevia-hero-title"
                            className="font-display text-5xl leading-tight text-secondary sm:text-5xl md:text-[120px]"
                        >
                            Destination
                        </h1>
                    </div>
                </AnimateSection>
            </section>

            <div className="w-full px-6 md:px-12 lg:px-24 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {domesticDestinations?.map((destination, index) => (
                        <div key={index} className='py-2'>
                            <AnimateSection delay={0.3}>
                                <DestinationCard imageSrc={destination?.image} text={destination?.name} height='517px' width='406px' />
                            </AnimateSection>
                        </div>
                    ))}
                </div>
            </div>

            <section>
                <div className="w-full pb-12 px-6 md:px-16 lg:px-24">
                    {/* Top Content */}
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">

                        <AnimateSection delay={0.6}>
                            <div className="max-w-2xl">
                                <h2 className="text-[32px] sm:text-4xl md:text-5xl font-display text-primary mb-4 leading-tight lg:text-nowrap">
                                    Explore Our International Destinations
                                </h2>
                            </div>
                        </AnimateSection>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                        {internationalDestinations?.map((destination, index) => (
                            <div key={index} className='py-2'>
                                <AnimateSection delay={0.3}>
                                    <DestinationCard imageSrc={destination?.image} text={destination?.name} />
                                </AnimateSection>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FaqSection />

            <ExploreOurDestinations />

            <AureviaStandard />
        </div>
    )
}

export default Destination