import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

export default function App() {
	return (
		<>
			<Header />
			<main>
				<HeroSection />
				<FeatureSection />
			</main>
			<Footer />
		</>
	);
}
