import React from 'react';
import assets from './assets';
import { SectionWrapper, Download, Features } from './components';
import styles from './styles/Global';

const App: React.FC = () => {
    return (
        <>
            <SectionWrapper
                title="Your own store of Nifty NFTs. Start Selling & Growsing"
                description="But, Store, Collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
                showBtn
                mockupImg={assets.homeHero}
                banner="banner"
            />
            <SectionWrapper
                title="Smart User Interface Marketplace"
                description="Experience a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI design."
                showBtn={false}
                mockupImg={assets.homeCards}
                reverse={true}
            />

            <Features />

            <SectionWrapper
                title="Deployment"
                description="ProNef is built using Expo which runs natively on all users' devices. You can easily get your app into people's hands."
                mockupImg={assets.feature}
                reverse
            />
            <SectionWrapper
                title="Creative way to showcase the store"
                description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
                showBtn={false}
                mockupImg={assets.mockup}
                banner="banner02"
            />
            <Download />

            <footer className="px-4 py-3 justify-center items-center bg-primary flex-col text-center banner04">
                <p className={`${styles.pText} ${styles.whiteText} !my-3`}>
                    Made with passion by Ananymous Gear
                </p>
                <span className={`${styles.whiteText} bold`}>Fullstack Dev yunwi5</span>
            </footer>
        </>
    );
};

export default App;
