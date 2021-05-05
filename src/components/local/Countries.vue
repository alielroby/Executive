<template>
	<div class="Countries">
		<div class="container">
			<Heading
				headline="Countries We Covered"
				des="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."
			/>
			<div class="con-countries">
				<carousel
					paginationActiveColor="#717cff"
					:paginationSize="12"
					:perPage="3"
				>
					<slide v-for="Country in Countries" :key="Country.id">
						<BusinessCard
							:img="Country.img"
							:headline="Country.headline"
							:des="Country.des"
						/>
					</slide>
				</carousel>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.Countries {
	padding: 60px 0;
	background-color: #fafafa;
	.con-countries {
		margin-top: 70px;
	}
}
</style>
<script>
import Heading from "../global/Heading.vue";
import { Carousel, Slide } from "vue-carousel";
import BusinessCard from "../global/BusinessCard.vue";
import img1 from "@/assets/Country1.jpg";
import img2 from "@/assets/Country2.jpg";
import img3 from "@/assets/Country3.jpg";
export default {
	name: "Countries",
	components: {
		Heading,
		Carousel,
		Slide,
		BusinessCard,
	},
	data: function () {
		return {
			Countries: [
				{
					id: 1,
					img: img1,
					headline: "Study in Australia",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 2,
					img: img2,
					headline: "Study in Canada",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 3,
					img: img3,
					headline: "Study in Uk",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 4,
					img: img1,
					headline: "Study in Australia",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 5,
					img: img2,
					headline: "Study in Canada",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 6,
					img: img3,
					headline: "Study in Uk",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 7,
					img: img1,
					headline: "Study in Australia",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 8,
					img: img2,
					headline: "Study in Canada",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 9,
					img: img3,
					headline: "Study in Uk",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 10,
					img: img1,
					headline: "Study in Australia",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 11,
					img: img2,
					headline: "Study in Canada",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
				{
					id: 12,
					img: img3,
					headline: "Study in Uk",
					des:
						"Ut aut corporis accusantium illo ullam qui laudantium. Maxime rerum sunt et sequi sed qu",
				},
			],
		};
	},
};
</script>
