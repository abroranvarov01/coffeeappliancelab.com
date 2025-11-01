import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { CoffeeArticles } from "@/components/coffee-articles"
import { FeaturedReviews } from "@/components/featured-reviews"
import { TipsForUse } from "@/components/tips-for-use"
import { ReviewCategories } from "@/components/review-categories"
import { InterestingFacts } from "@/components/interesting-facts"
import { Footer } from "@/components/footer"
import { FavoriteRecipes } from "@/components/favorite-recipes"

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Header />
			<Hero />
			<CoffeeArticles />
			<FeaturedReviews />
			<TipsForUse />
			<ReviewCategories />
			<InterestingFacts />
			<FavoriteRecipes />
			<Footer />
		</main>
	)
}