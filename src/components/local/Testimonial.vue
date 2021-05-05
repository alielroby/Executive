<template>
	<div class="Testimonial">
		<div class="container">
			<div class="svg"></div>
			<Heading
				headline="Testimonial"
				des="Torquem detraxit hosti et quidem faciunt, ut et negent satis esse appetendum, alterum. Si sine causa? quae fuerit causa, mox videro; interea hoc epicurus in liberos."
			/>
			<div class="TestimonialCon">
				<carousel paginationActiveColor="#717cff" :paginationSize="12">
					<slide v-for="Testimonial in Testimonials" :key="Testimonial.id">
						<TestimonialCard :data="Testimonial" />
					</slide>
				</carousel>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//============Main Vars
@import "../../scss/_vars.scss";
//======================
.Testimonial {
	padding: 90px 0;
	.TestimonialCon {
		margin-top: 100px;
	}
}
</style>
<script>
import TestimonialCard from "../global/TestimonialCard.vue";
import Heading from "../global/Heading.vue";
import { Carousel, Slide } from "vue-carousel";
import Testimonial1 from "../../assets/Testimonial1.jpg";
import Testimonial2 from "../../assets/Testimonial2.jpg";
import Testimonial3 from "../../assets/Testimonial3.jpg";
export default {
	name: "Testimonial",
	components: {
		TestimonialCard,
		Heading,
		Carousel,
		Slide,
	},
	data: function () {
		return {
			Testimonials: [
				{
					id: 1,
					img: Testimonial1,
					name: "Harrison Phillips",
					title: "Reporter",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 2,
					img: Testimonial2,
					name: "Ainara Vergara",
					title: "Landscape Architect",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 3,
					img: Testimonial3,
					name: "Niek Bove",
					title: "Senior Developer",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 4,
					img: Testimonial1,
					name: "Harrison Phillips",
					title: "Reporter",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 5,
					img: Testimonial2,
					name: "Ainara Vergara",
					title: "Landscape Architect",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 6,
					img: Testimonial3,
					name: "Niek Bove",
					title: "Senior Developer",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 7,
					img: Testimonial1,
					name: "Harrison Phillips",
					title: "Reporter",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
				{
					id: 8,
					img: Testimonial2,
					name: "Ainara Vergara",
					title: "Landscape Architect",
					des:
						"Nisi cumque in necessitatibus molestiae eaque excepturi ab. Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea dicta inventore et quo impedit repudiandae. Qui",
				},
			],
		};
	},
};
</script>
