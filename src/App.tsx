import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import PricingSection from './components/PricingSection';

export default function App() {
	return (
		<>
			<Header />
			<main className='flex flex-col items-center'>
				<HeroSection />
				<FeatureSection />
				<PricingSection />
			</main>
			<Footer />
		</>
	);
}
