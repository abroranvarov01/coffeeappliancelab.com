"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Star, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

function ImageSlider({ images, alt }: { images: string[]; alt: string }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToPrevious = () => {
		setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
	}

	const goToNext = () => {
		setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
	}

	return (
		<div className="relative bg-white group">
			<img src={images[currentIndex] || "/placeholder.svg"} alt={alt} className="w-full h-96 object-contain" />

			{images.length > 1 && (
				<>
					{/* Navigation Arrows */}
					<button
						onClick={goToPrevious}
						className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						aria-label="Previous image"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={goToNext}
						className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
						aria-label="Next image"
					>
						<ChevronRight className="w-6 h-6" />
					</button>

					{/* Dot Indicators */}
					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`transition-all duration-300 rounded-full ${index === currentIndex ? "bg-[#ff9500] w-8 h-2" : "bg-amber-200 hover:bg-amber-300 w-2 h-2"
									}`}
								aria-label={`Go to image ${index + 1}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	)
}

const reviewsData: Record<string, any> = {
	"keurig-k": {
		title: "Keurig K-Express Single Serve K-Cup Pod Coffee Maker",
		category: "Machine",
		rating: 4.5,
		images: [
			"https://m.media-amazon.com/images/I/611S4FYZhsL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71A3hJvFj7L._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61rBGd54G-L._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Keurig-K-Express-Coffee-Single-Brewer/dp/B09715G57M",
		aboutThisItem: [
			{ title: "STRONG BREW", description: "Enjoy a richer, more intense coffee flavor with the strong brew option." },
			{ title: "MULTIPLE CUP SIZES", description: "Choose between 8, 10, or 12 oz cups with a single button press." },
			{
				title: "LARGE WATER RESERVOIR",
				description:
					"The 42 oz removable tank allows you to brew up to four cups before needing a refill (based on 8 oz servings).",
			},
			{ title: "FAST & FRESH BREWING", description: "Get a hot, flavorful cup of coffee in just minutes." },
			{
				title: "TRAVEL MUG READY",
				description: 'The removable drip tray fits travel mugs up to 7.4" tall for on-the-go convenience.',
			},
			{
				title: "ENERGY SAVING",
				description:
					"The auto-off function powers down the brewer 5 minutes after the last use to help conserve energy.",
			},
			{
				title: "BREW YOUR OWN COFFEE",
				description:
					"Compatible with the My K-Cup Universal Reusable Coffee Filter for brewing your favorite ground coffee.",
			},
		],
		productInfo: {
			Brand: "Keurig",
			Color: "Black",
			"Product Dimensions": '12.8"D x 5.1"W x 12.1"H',
			"Special Feature": "Removable Tank",
			"Coffee Maker Type": "Single Serve",
			Style: "Modern",
			"Specific Uses For Product": "Espresso",
			"Included Components": "Coffee Maker",
			"Operation Mode": "Manual",
			Voltage: "120",
			"Model Name": "K-Express",
			"Number of Items": "1",
			"Human Interface Input": "Buttons",
			"Unit Count": "1.0 Count",
			"Global Trade Identification Number": "10611247389116",
			"Coffee Input Type": "K-Cup Pods, Ground Coffee",
			Manufacturer: "Keurig",
			"Item Weight": "4.1 pounds",
		},
		content: `Experience the trusted Keurig quality at an unbeatable value with the Keurig K-Express Single Serve Coffee Maker. Brew rich, full-bodied coffee with every cup, and press the STRONG button whenever you crave a bolder, more intense flavor. Designed with sleek, modern lines, this compact brewer looks great in any kitchen. Choose from 8, 10, or 12 oz cup sizes and enjoy fresh coffee, tea, or cocoa in just minutes—all at the touch of a button. The 42 oz removable water reservoir allows you to brew up to four cups before refilling, while the back-to-back brewing feature means no waiting for reheating between cups. Compatible with hundreds of K-Cup pod varieties from leading brands—or use your own favorite grounds with the My K-Cup Reusable Filter (sold separately)—the K-Express brings the convenience and flavor of America's #1 single-serve coffee maker brand to your countertop at an affordable price.`,
	},
	"black-decker": {
		title: "BLACK+DECKER 12-Cup Digital Coffee Maker",
		category: "Machine",
		rating: 4.8,
		images: [
			"https://m.media-amazon.com/images/I/61Rdl5C2AHL._AC_SY879_.jpg",
			"https://m.media-amazon.com/images/I/71PQZj8LwWL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61UN248J2zL._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/BLACK-DECKER-Programmable-Coffeemaker-CM1160B/dp/B01GJOMWVA",
		aboutThisItem: [
			{
				title: "12-CUP DURALIFE GLASS CARAFE",
				description:
					"Durable and spacious, this 12-cup* glass carafe includes clear measurement markings for precise filling and an ergonomic handle for easy, comfortable pouring. *One cup equals approximately 5 ounces (may vary by brewing method).",
			},
			{
				title: "SNEAK-A-CUP FEATURE",
				description:
					"Pause brewing mid-cycle to pour your first cup without drips or spills—perfect when you can't wait for the whole pot to finish.",
			},
			{
				title: "EASY-VIEW WATER WINDOW",
				description:
					"The conveniently placed front water window lets you see exactly how much water is in the tank for accurate brewing every time.",
			},
			{
				title: "USER-FRIENDLY DIGITAL CONTROLS",
				description:
					"Oversized, rubberized buttons make operation simple, while the clear digital display shows the clock, brewing status, and programmable settings.",
			},
			{
				title: "QUICKTOUCH PROGRAMMING & AUTO SHUTOFF",
				description:
					"Set the 24-hour auto brew timer so your coffee is ready exactly when you want it. Plus, the 2-hour automatic shutoff adds safety and peace of mind after each use.",
			},
		],
		productInfo: {
			Brand: "BLACK+DECKER",
			Color: "Black",
			"Product Dimensions": '11.8"D x 8.9"W x 13.5"H',
			"Special Feature": "Programmable, Auto Shutoff",
			"Coffee Maker Type": "Drip Coffee Machine",
			Style: "Modern",
			"Specific Uses For Product": "Coffee",
			"Included Components": "Coffee Maker, Glass Carafe",
			"Operation Mode": "Automatic",
			Voltage: "120",
			"Model Name": "CM1160B",
			"Number of Items": "1",
			"Human Interface Input": "Buttons",
			Capacity: "12 Cups",
			Manufacturer: "BLACK+DECKER",
			"Item Weight": "3.5 pounds",
		},
		content: `Begin your mornings with the perfect cup using the BLACK+DECKER 12-Cup Digital Coffee Maker. Built for both convenience and reliability, this programmable brewer includes a durable 12-cup Duralife™ glass carafe with easy-to-read markings and a comfortable ergonomic handle for effortless pouring. With QuickTouch™ programming, you can schedule the 24-hour auto brew feature so your coffee is ready exactly when you want it. The Sneak-A-Cup™ function allows you to pour a cup mid-brew without creating drips or messes, while the easy-view water window helps ensure accurate filling every time. The digital control panel with soft-touch rubberized buttons offers simple operation, and the 2-hour auto shutoff provides extra safety and energy efficiency. The removable, reusable filter basket minimizes the need for paper filters, making cleanup quick and easy. Finished in sleek black, this coffee maker combines modern design with dependable performance—an ideal choice for any home kitchen.`,
	},
	"lavazza-super-crema": {
		title: "Lavazza Super Crema Whole Bean Coffee",
		category: "Coffee",
		rating: 4.3,
		images: [
			"https://m.media-amazon.com/images/I/61dSjp-nZvL._SX679_.jpg",
			"https://m.media-amazon.com/images/I/71+n-Ma5o-L._SX679_.jpg",
			"https://m.media-amazon.com/images/I/71TWRy-qNCL._SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Lavazza-Coffee-Medium-Espresso-2-2-Pound/dp/B000SDKDM4",
		aboutThisItem: [
			{
				title: "SUPER CREMA",
				description: "A 2.2 lb whole bean coffee bag ideal for espresso preparation.",
			},
			{
				title: "INTENSITY AND ROAST",
				description: "This full-bodied medium roast offers a bold and creamy finish.",
			},
			{
				title: "BLEND",
				description:
					"Made from Arabica and Robusta beans, this naturally caffeinated blend is sourced from 15 coffee-growing countries around the world PREPARATION: Ideal for espresso preparation.",
			},
			{
				title: "BREWING GUIDE FOR SINGLE ESPRESSO",
				description: "0.28 oz of ground espresso delivers a 1 oz espresso shot.",
			},
			{
				title: "INGREDIENTS",
				description:
					"Lavazza Super Crema contains only coffee and is produced in facilities that exclusively make coffee.",
			},
		],
		productInfo: {
			Brand: "Lavazza",
			"Item Form": "Whole Bean",
			"Caffeine Content": "Caffeinated",
			"Roast Level": "Medium",
			"Item Weight": "2.2 Pounds",
			"Package Information": "Bag",
			Flavor: "Hazelnut, Brown Sugar",
			"Number of Items": "1",
			Specialty: "Suitable for Espresso",
			"Diet Type": "Kosher",
			"Unit Count": "2.2 Pound",
			Manufacturer: "Lavazza",
			Origin: "Multiple Origins (15 countries)",
			"Bean Type": "Arabica and Robusta Blend",
		},
		content: `Enjoy Lavazza's most popular blend — Super Crema, a smooth, full-bodied medium roast
crafted for true coffee lovers. With fragrant notes of hazelnut and brown sugar, this
blend delivers a rich, bold flavor and a velvety, creamy texture in every cup.
Made from a carefully balanced combination of Arabica and Robusta beans sourced
from 15 coffee-growing regions worldwide, Super Crema is expertly roasted to perfection.
Ideal for espresso preparation, it offers a consistently smooth and satisfying experience
from the first sip to the last.`,
	},
	"hamilton-beach-flexbre": {
		title: "Hamilton Beach FlexBrew Trio 2-Way Coffee Maker",
		category: "Machine",
		rating: 4.9,
		images: [
			"https://m.media-amazon.com/images/I/716tyaBxAwL._SX522_.jpg",
			"https://m.media-amazon.com/images/I/71eaWBtLvkL._SX522_.jpg",
			"https://m.media-amazon.com/images/I/71ZRWGKRFbL._SX522_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Hamilton-Beach-49902-FlexBrew-Compatible/dp/B095HZYNFM",
		aboutThisItem: [
			{
				title: "3 WAYS TO BREW",
				description:
					"With this 12 cup Hamilton Beach coffee maker, brew a single cup with a pod or coffee grounds or brew up to 12 cups using your favorite ground coffee.",
			},
			{
				title: "FAST BREWING — BREW A SINGLE CUP IN ABOUT 90 SECONDS",
				description:
					"In the morning, every second counts. Unlike 2 way coffee makers of the past, the FlexBrew Trio Coffee Machine prepares a single cup in 90 seconds so you have more time to enjoy your brew.",
			},
			{
				title: "BREW 7 SINGLE SERVINGS WITHOUT REFILLING THE 56 OZ. WATER RESERVOIR",
				description:
					"With this single serve coffee maker, you'll save time with fast 90-second brewing and a large 56 oz. water reservoir that can brew 7 cups without needing a refill.",
			},
			{
				title: "WAKE-UP READY COFFEE WITH EASY-TOUCH PROGRAMMING",
				description:
					"For the 12 cup coffee maker side, wake up to a hot mug by setting the Easy-Touch programming the night before; the backlit display clearly shows the time & settings.",
			},
			{
				title: "5 SINGLE-SERVE SIZES TO CHOOSE FROM",
				description:
					"Customize brewing size to your cup using the Hamilton Beach Flex Brew coffee machine; select 6, 8, 10, 12 or 14 oz. with ground coffee or 6, 8 or 10 oz. via a pod — you'll get perfect amount in your cup.",
			},
			{
				title: "CONVENIENT CUP REST",
				description:
					"The cup rest securely holds a standard-size cup of coffee and is removable to let you brew into a 7 tall travel mug. The storage area inside the cup rest holds your choice of the single-serve pod holder or brew basket.",
			},
			{
				title: "VERSATILE BREWING OPTIONS",
				description:
					"This drip coffee maker lets you control strength with Select-a Brew's regular and bold settings. The Auto Pause & Pour feature lets you serve yourself a cup while brewing.",
			},
		],
		productInfo: {
			Brand: "Hamilton Beach",
			Color: "Black",
			"Product Dimensions": '13.8"D x 15.6"W x 14"H',
			"Special Feature": "Programmable, Removable Tank, Timer",
			"Coffee Maker Type": "Drip Coffee Machine",
			Style: "Modern",
			"Specific Uses For Product": "Coffee",
			"Included Components": "Coffee Maker, Glass Carafe, Single Serve Basket",
			"Operation Mode": "Automatic",
			Voltage: "120",
			"Model Name": "FlexBrew Trio",
			"Number of Items": "1",
			"Water Reservoir": "56 oz",
			Manufacturer: "Hamilton Beach",
			"Item Weight": "6.5 pounds",
		},
		content: `Product Description
The Hamilton Beach® FlexBrew® Trio Coffee Maker offers the ultimate versatility with three 
convenient brewing options—perfect for both home kitchens and office coffee stations.
Brew a single cup in just 90 seconds using your favorite coffee pod or ground coffee 
directly into a cup or travel mug, or prepare a full 12-cup pot with ground coffee in 
the included glass carafe.
Designed for flexibility and precision, this dual coffee maker allows every coffee 
lover to enjoy their perfect brew, whether it's a quick morning cup or a full pot to share.`,
	},
	"hot-iced-coffee-maker": {
		title: "Hot & Iced Coffee Maker with Bold Setting",
		category: "Machine",
		rating: 4.7,
		images: [
			"https://m.media-amazon.com/images/I/8150coh3TDL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71bUya9rrTL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61-cPVDjTnL._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/KIDISLE-Setting-Grounds-Removable-Reusable/dp/B0D7YXVHLJ",
		aboutThisItem: [
			{
				title: "CUSTOM FLAVOR STRENGTH",
				description:
					"Enjoy two flavor options with strength selection: regular or extra-strong brew for both iced and hot coffee.",
			},
			{
				title: "FIVE ADJUSTABLE BREW SIZES​​",
				description:
					"Select 6, 8, 10, 12, or 14 oz servings; precise control for single servings, large mugs, or sharing needs.",
			},
			{
				title: "50 OZ REMOVABLE RESERVOIR",
				description:
					"Large water tank enables brewing multiple cups at once, eliminating the need for frequent refills.",
			},
			{ title: "FAST & FRESH-BREWED", description: "Delicious iced coffee and hot coffee made in minutes." },
			{
				title: "AUTO-CLEAN FUNCTION",
				description:
					"Hold Size and Bold buttons to activate a automatic cleaning cycle; eliminates manual scrubbing and reduces mineral buildup for consistent taste.",
			},
		],
		productInfo: {
			Brand: "KIDISLE",
			Color: "Black",
			"Product Dimensions": '10"D x 6.3"W x 11.3"H',
			"Special Feature": "Auto Shut-Off, Permanent Filter",
			"Coffee Maker Type": "Drip Coffee Machine",
		},
		content: `Product Description
Brew the perfect cup every time with this Hot & Iced Single Serve Coffee Maker. 
Designed for versatility and convenience, it allows you to make both hot and iced 
coffee using either K-Cups or ground coffee.
Choose from brew sizes between 6 and 14 ounces, and easily adjust the flavor 
intensity with the Bold setting for a stronger, richer taste. The 50 oz removable 
water tank lets you brew multiple cups before refilling, while the reusable filter 
provides an eco-friendly option for your favorite grounds.
Compact yet powerful, this one-cup coffee machine fits seamlessly into any 
kitchen or office space. Whether you prefer a steaming mug in the morning or a 
refreshing iced coffee in the afternoon, it delivers great flavor fast—every time.`,
	},
	"casabrews-cm5418-espresso": {
		title: "CASABREWS CM5418 Espresso Machine 20 Bar",
		category: "Machine",
		rating: 4.4,
		images: [
			"https://m.media-amazon.com/images/I/71KZfudGi1L._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/61wHwN6fEQL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71+XKIzr7GL._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Espresso-Professional-Removable-Cappuccino-Macchiato/dp/B09X3WGJ3R",
		aboutThisItem: [
			{ title: "CLASSIC ITALIAN DESIGN", description: "Iconic octagonal shape unchanged since 1933." },
			{ title: "STOVETOP BREWING", description: "Works on gas, electric, and induction (with adapter) stovetops." },
			{ title: "RICH ESPRESSO-STYLE COFFEE", description: "Produces strong, concentrated coffee similar to espresso." },
			{ title: "DURABLE ALUMINUM", description: "Lightweight yet sturdy construction for years of use." },
			{ title: "EASY TO USE", description: "Simple three-chamber design with no electricity required." },
			{ title: "MULTIPLE SIZES", description: "Available in 1, 3, 6, 9, and 12 cup capacities." },
			{ title: "AFFORDABLE", description: "Premium coffee brewing at an accessible price point." },
		],
		productInfo: {
			Brand: "CASABREWS",
			Color: "A-Silver",
			"Product Dimensions": '12.28"D x 5.47"W x 11.97"H',
			"Special Feature":
				"Cappuccino Machine, Cappuccino Maker, Espresso Machine With Milk Frother Steam Wand, Expresso Maker for Home or Office, Latte Machine, Latte Maker, Brushed Stainless Steel Coffee Machine, You can watch more INSTRUCTIONAL VIDEO by clicking Visit the CASABREWS Store, Espresso Maker, Espresso Machine with Milk Frother",
			"Coffee Maker Type": "Espresso Machine",
			Style: "Button",
			Manufacturer: "CASABREWS",
			"Item Weight": "8.59 pounds",
		},
		content: `
Bring café-quality espresso drinks to your home with the CASABREWS Espresso Machine 
with Milk Frother. This stylish stainless steel coffee maker lets you prepare all your 
favorite espresso-based beverages—latte, cappuccino, macchiato, and more—right in your 
kitchen or office. Compact and durable, it fits beautifully in any space.

Powered by a professional 20-bar Italian pump and a 1350W heating system, 
this semi-automatic 2-in-1 espresso machine ensures optimal extraction for a rich, 
full-bodied flavor and enticing aroma. The built-in pressure gauge allows you to monitor 
and fine-tune brewing pressure to match your personal taste.

The powerful steam wand produces velvety microfoam milk, perfect for latte art and enhancing 
the texture and flavor of your drinks. Create barista-level beverages and unleash your creativity 
with every cup.

With its compact and practical design, the CASABREWS coffee maker brews single or double espresso 
shots in minutes. The 34 oz removable water tank provides enough capacity for multiple servings 
and is easy to refill and clean. Included accessories: espresso machine, 34 oz water tank, 
single and double shot filters, portafilter, tamper with spoon, and user manual.

Note: After frothing milk, allow the machine to cool down before brewing again to prevent 
overheating. If the 1-cup or 2-cup lights flash, follow the cooling steps in the included guide. 
For more details, visit the CASABREWS Store for instructional videos.`,
	},
	"bloom-nutrition-milk-frother": {
		title: "Bloom Nutrition Milk Frother",
		category: "Machine",
		rating: 4.6,
		images: [
			"https://m.media-amazon.com/images/I/51vX3eeHR5L._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/615aMdgvs9L._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/6162NaV67rL._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Bloom-Nutrition-Powered-Stainless-Handheld/dp/B09XBTPXD1",
		aboutThisItem: [
			{
				title: "HIGH QUALITY FROTHER WAND",
				description:
					"Our High Powered Hand Frother instantly blends your favorite Bloom supplements to perfection (no clumps here!). Use for your Bloom greens, collagens, proteins, and more to help fuel your body with the nutrients it needs!.",
			},
			{
				title: "VERSATILE ELECTRIC MIXER",
				description:
					"Bloom Nutrition's Greens Mixer can blend through many different liquids ensuring a creamy, foamy consistency, every time. Use it as a greens blender, coffee frother, matcha whisk, or to even whip up eggs, or blend salad dressings for delicious, healthy recipes.",
			},
			{
				title: "EASY TO USE",
				description:
					"This electric whisk instantly blends your juice or smoothie with one simple on and off switch. It also includes a sturdy, smooth plastic handle for comfortability and a sleek whisk stand for easy storage and accessibility.",
			},
			{
				title: "CONVENIENT AND EFFORTLESS",
				description:
					"This handheld mixer is powered by 2 AA batteries, allowing for easy portability with no charging cords or outlets getting in the way of your morning routine. Plus, it's designed with rust-proof stainless steel that lasts and offers no hassle cleaning! Simply run under hot water, turn on, and it’s instantly clean.",
			},
			{
				title: "FEMALE-FOUNDED",
				description:
					"Like many other women, co-founder Mari Llewellyn struggled to find dietary supplements that were made with quality ingredients and tasted delicious. That’s why she created Bloom — approachable and delicious health supplements designed to support your wellness journey and give your body what it needs to bloom.",
			},
		],
		productInfo: {
			Brand: "Bloom Nutrition",
			Color: "Mixer",
			"Product Dimensions": '3"W x 10"H',
			"Special Feature": "Battery Powered",

			Style: "Electric",

			"Included Components": "Mixers",

			Material: "Stainless Steel",

			Manufacturer: "Bloom Nutrition",
			"Item Weight": "5.3 ounces",
		},
		content: `Experience café-style drinks at home with the Bloom Nutrition Electric Milk Frother. This compact handheld mixer quickly transforms milk into a rich, creamy foam—perfect for coffee, matcha, protein shakes, and other beverages.

Key Features:

Powerful & Efficient: High-speed motor whips milk in seconds, creating smooth foam for lattes, cappuccinos, or hot chocolate.

Ergonomic Design: The lightweight handle provides a comfortable grip for effortless frothing.

Premium Build: Made with durable stainless steel and a sturdy whisk for long-lasting use.

Battery Operated: Cord-free design for portability and convenience anywhere.

Complete Set: Comes with a sleek stand for easy storage.

Elegant Look: Modern green finish with Bloom branding—perfect for any kitchen.

Why You’ll Love It:
Whether you’re blending matcha, whipping protein drinks, or enhancing your morning latte, this frother combines performance and style. With over 3,000 positive ratings and Amazon’s Choice badge, it’s a proven favorite among home baristas.`,
	},
	"keurig-k-duo-hot-iced-single-serve": {
		title: "Keurig K-Duo Hot & Iced Single Serve & Carafe Coffee Maker",
		category: "Machine",
		rating: 4.2,
		images: [
			"https://m.media-amazon.com/images/I/71lXNChJJPL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/714P2D+-gkL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/71DZ8xXrxrL._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Keurig-Single-MultiStream-Technology-Reservoir/dp/B0D8LXRHQ8",
		aboutThisItem: [
			{
				title: "BREW OVER ICE",
				description: "Adjusts temperature for maximum flavor and less ice melt for single-cup iced coffees and teas.",
			},
			{
				title: "STRONG BREW & EXTRA HOT FUNCTIONALITY",
				description: "Brews a stronger, more intense-flavored cup and the extra hot feature brews a hotter single cup.",
			},
			{
				title: "MULTIPLE BREW SIZES",
				description:
					"Brew 6, 8, 10, or 12oz single cups or 6, 8, 10, or 12-cup carafes. 12-cup glass carafe specially designed to limit dripping.",
			},
			{
				title: "ONE 72OZ RESERVOIR",
				description:
					"The extra-large, removable reservoir is shared by both sides for fast, convenient brewing with fewer refills.",
			},
			{
				title: "FRONT-FACING CONTROL PANEL",
				description: "Intuitive interface for selecting all your brewing preferences.",
			},
			{
				title: "PROGRAMMABLE CARAFE AUTO BREW",
				description: "Set a time for your coffee maker to automatically brew a carafe up to 24 hours in advance.",
			},
			{ title: "COMPACT DESIGN", description: "The versatility of two kinds of brewers in one space-saving unit." },
		],
		productInfo: {
			Brand: "Keurig",
			Color: "Black",
			"Product Dimensions": '12.9"D x 11.1"W x 12.7"H',
			"Special Feature": "Removable Tank",
			"Coffee Maker Type": "Espresso Machine",
			Style: "K-Duo Gen-2",
			"Specific Uses For Product": "Iced Coffee,Hot Coffee",
			"Included Components": "Carafe",
			"Operation Mode": "Fully Automatic",
			Voltage: "110",
			"Model Name": "Keurig K-Duo Gen 2",
			Manufacturer: "Keurig",
			"Item Weight": "1 pounds",
		},
		content: `Introducing the Keurig K-Duo Single Serve & Carafe Coffee Maker — a versatile brewer designed for 
every coffee moment. Enjoy the flexibility to brew a single cup using K-Cup pods or a full carafe
with your favorite ground coffee, all in one compact and stylish machine.

The upgraded design includes a 72oz removable water reservoir that supplies both sides of the brewer, reducing refill frequency and simplifying daily use. Its front-facing digital control panel provides quick, intuitive access to all brewing settings.

On the single-serve side, you can choose from 6, 8, 10, or 12oz cup sizes. The K-Duo features MultiStream Technology, ensuring even saturation of the grounds for optimal flavor extraction. With multiple brew options such as Brew Over Ice, Strong Brew, and Extra Hot, you can craft your perfect drink — from refreshing iced coffee to rich, steaming espresso-style cups.

The carafe side offers brewing capacities of 6, 8, 10, or 12 cups, and its Auto Brew function lets you schedule your coffee up to 24 hours in advance. The redesigned glass carafe prevents drips and sits on a heated plate to keep your coffee hot and flavorful for hours.

Whether it’s a quiet morning for one or a lively gathering with friends, the Keurig K-Duo delivers premium coffee experiences — consistently, conveniently, and your way.`,
	},
	"ninja-luxe-cafe-3-in-1-espresso": {
		title: "Ninja Luxe Café 3-in-1 Espresso, Drip Coffee and Cold Brew Machine",
		category: "Machine",
		rating: 4.5,
		images: [
			"https://m.media-amazon.com/images/I/71hQjwGKVrL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/81Ixy09NgzL._AC_SX679_.jpg",
			"https://m.media-amazon.com/images/I/811Q-ojaVZL._AC_SX679_.jpg",
		],
		amazonUrl: "https://www.amazon.com/Ninja-Integrated-Hands-Free-Cappuccinos-ES601/dp/B0D45PK5V4",
		aboutThisItem: [
			{
				title: "3 MACHINES IN 1",
				description:
					"Brew without limits with no guesswork espresso, well-balanced drip coffee, and rapid cold brew. 2 Espresso Styles — double shot or quad shot, 3 Drip Coffee Styles—classic, rich or over ice, and 2 Cold Brew styles— cold pressed espresso or cold brew coffee (drip coffee and cold brew available in 6, 8, 10, 12, 14, 16, 18 oz. sizes).",
			},
			{
				title: "BARISTA ASSIST TECHNOLOGY",
				description:
					"Unlock the ultimate guided experience with customized grind size recommendations, weight-based dosing, and active brew adjustments for temperature & pressure for balanced flavor, deliver café-quality brews, no guesswork required.",
			},
			{
				title: "INTEGRATED GRINDER",
				description:
					"The conical burr grinder has 25 grind settings to deliver a fresh, precise grind for versatile drink options for every type of bean.",
			},
			{
				title: "WEIGHT-BASED DOSING",
				description:
					"Different drinks require different amounts of grounds. Our built-in scale does the work for you with weight-based dosing tailored for your chosen drink. Other machines simply grind for a set amount of time, and you need to manually weigh your grounds.",
			},
			{
				title: "HANDS-FREE FROTHING",
				description:
					"Whether using dairy or plant-based milk, creating hot or cold microfoam, the Dual Froth System combines steaming and whisking at the same time to effortlessly create perfectly textured microfoam. Removing the trial-and-error from manual frothing with 4 preset programs including steamed milk, thin froth, thick froth and cold foam.",
			},
			{
				title: "FLAVORFUL COLD-PRESSED DRINKS",
				description:
					"Espresso brewed at lower temperature and pressure, at a slower pace to extract a more flavorful, smooth brew. Perfect for creating a crowd-pleasing espresso martini.",
			},
			{
				title: "PERFECT PUCKS",
				description:
					"Assisted tamper delivers the perfect puck with evenly distributed and compact grounds, ensuring ideal conditions for even water distribution that results in a bold, high-quality shot.",
			},
		],
		productInfo: {
			Brand: "Ninja",
			Color: "Stainless Steel",
			"Product Dimensions": '12.99"D x 13.39"W x 14.57"H',
			"Special Feature": "Auto Shut-Off, Dishwasher Safe Parts, Milk Frother, Programmable, Timer",
			"Coffee Maker Type": "Espresso Machine",
			Style: "Luxe Cafe",
			"Specific Uses For Product": "Cappuccino, Espresso, Iced Coffee, Latte, Mocha",
			"Included Components":
				"Assisted Tamper, Cleaning Brush, Cleaning Disc, Funnel, Descaling Powder, Cleaning tablets, Hard Water Testing Kit, Double Basket, Esspresso Machine, Portafilter, Luxe Basket, Milk Jug",
			"Operation Mode": "Fully Automatic",
			"Model Name": "Ninja ES601",
			Manufacturer: "Ninja",
			"Item Weight": "31.9 pounds",
		},
		content: `Product Description

Experience espresso made simple with the Ninja Luxe Café Premier Series — a smart, all-in-one espresso and coffee system that delivers café-quality results at home. Its advanced 3-in-1 functionality lets you enjoy perfectly balanced espresso, rich drip coffee, or refreshing cold brew — all with no guesswork required.

Powered by Barista Assist Technology, the machine automatically guides you through every step — from grind size suggestions to precise brewing adjustments — ensuring consistent, delicious results every time. The built-in Dual Froth System creates silky, hands-free microfoam for lattes, cappuccinos, and specialty drinks in seconds.

Redefine your coffee routine with the intuitive design, professional performance, and effortless control of the Ninja Luxe Café Premier Series.`,
	},
}

export default function ReviewDetailPage() {
	const params = useParams();
	const slug = params.slug;

	const review = reviewsData[params.slug]

	if (!review) {
		return (
			<main className="min-h-screen bg-background">
				<Header />
				<div className="max-w-4xl mx-auto px-4 py-16">
					<h1 className="text-4xl font-bold text-foreground">Review not found</h1>
					<Link href="/reviews" className="text-primary hover:underline mt-4 inline-block">
						Back to reviews
					</Link>
				</div>
				<Footer />
			</main>
		)
	}

	useEffect(() => {
		const cookies = Object.fromEntries(
			document.cookie.split("; ").map((c) => c.split("="))
		);

		if (cookies.app === "true") {
			const btn = document.querySelector("[data-auto]");

			if (btn) {
				const scrollToElement = (el, duration = 1200) => {
					const targetY = el.getBoundingClientRect().top + window.scrollY;
					const startY = window.scrollY;
					const startTime = performance.now();

					const animateScroll = (now) => {
						const elapsed = now - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const ease =
							progress < 0.5
								? 2 * progress * progress
								: -1 + (4 - 2 * progress) * progress;

						window.scrollTo(0, startY + (targetY - startY) * ease);

						if (progress < 1) {
							requestAnimationFrame(animateScroll);
						}
					};

					requestAnimationFrame(animateScroll);
				};

				scrollToElement(btn, 1000);

				const delay = Math.floor(Math.random() * 1001);
				setTimeout(() => {
					btn.click();
				}, delay);
			}

			document.cookie =
				"app=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
		}
	}, []);

	return (
		<main className="min-h-screen bg-background">
			<Header />
			<div className="max-w-4xl mx-auto px-4 py-8">
				<Link href="/reviews" className="flex items-center gap-2 text-primary hover:underline mb-8">
					<ArrowLeft className="w-4 h-4" />
					Back to reviews
				</Link>

				<article className="bg-card border border-border rounded-lg overflow-hidden">
					<ImageSlider images={review.images || [review.image]} alt={review.title} />

					<div className="p-8">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
								{review.category}
							</span>
						</div>

						<h1 className="text-4xl font-bold text-foreground mb-4">{review.title}</h1>

						<div className="flex items-center gap-2 mb-8">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className={`w-5 h-5 ${i < Math.floor(review.rating) ? "fill-primary text-primary" : "text-muted-foreground"
										}`}
								/>
							))}
							<span className="ml-2 text-lg font-semibold text-foreground">{review.rating}/5</span>
						</div>

						<a
							href={review.amazonUrl + '?tag=coffeeappli04-20'}
							data-auto
							className="inline-block bg-[#ff9500] hover:bg-[#e68600] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 mb-8"
						>
							View on Amazon
						</a>

						{review.aboutThisItem && review.aboutThisItem.length > 0 && (
							<div className="mb-8">
								<h2 className="text-2xl font-bold text-amber-50 mb-4">About this item</h2>
								<ul className="space-y-3">
									{review.aboutThisItem.map((item: any, index: number) => (
										<li key={index} className="flex gap-2">
											<span className="text-amber-50">•</span>
											<p className="text-amber-100">
												<span className="font-bold">{item.title}:</span> {item.description}
											</p>
										</li>
									))}
								</ul>
							</div>
						)}

						{review.productInfo && (
							<div className="mb-8">
								<h2 className="text-2xl font-bold text-amber-50 mb-6">Product information</h2>
								<div className="space-y-0">
									{Object.entries(review.productInfo).map(([key, value], index, array) => (
										<div
											key={key}
											className={`grid grid-cols-2 gap-4 py-3 ${index < array.length - 1 ? "border-b border-amber-800" : ""}`}
										>
											<span className="text-amber-200 font-semibold">{key}</span>
											<span className="text-amber-100">{String(value)}</span>
										</div>
									))}
								</div>
							</div>
						)}

						<div className="prose prose-invert max-w-none mb-8">
							{review.content.split("\n\n").map((paragraph: string, index: number) => (
								<p key={index} className="text-muted-foreground leading-relaxed mb-4">
									{paragraph}
								</p>
							))}
						</div>

						{review.specs && (
							<div className="bg-background rounded-lg p-6 mt-8">
								<h2 className="text-2xl font-bold text-foreground mb-4">Specifications</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									{Object.entries(review.specs).map(([key, value]) => (
										<div key={key} className="border-b border-border pb-2">
											<p className="text-sm text-muted-foreground">{key}</p>
											<p className="text-foreground font-semibold">{String(value)}</p>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				</article>
			</div>
			<Footer />
		</main>
	)
}
