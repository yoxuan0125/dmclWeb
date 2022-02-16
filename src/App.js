import "./App.css";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ServiceFeature from "./components/ServiceFeature";
import OwlCarousel from "./components/OwlCarousel";
import Footer from "./components/Footer";

const data = [
	{
		text: "店家服務熱心 環境很棒",
	},
	{
		text: "租板便宜，教練也很用心",
	},
	{
		text: "nice",
	},
	{
		text: "everything is good",
	},
	{
		text: "everything is good",
	},
	{
		text: "everything is good",
	},
	{
		text: "everything is good",
	},
	{
		text: "everything is good",
	},
];

function App() {
	return (
		<div className="App">
			<Navbar />
			<Sidebar />
			<HeroSection />
			<ServiceFeature />
			<OwlCarousel data={data} />
			<Footer />
		</div>
	);
}

export default App;
