<template>
	<div class="Services">
		<div class="container">
			<Heading
				headline="Our Services"
				des="Executive Trade International is an University Application Centre, guiding Bangladeshi students to Australian, British, Canadian and Irish universities!"
			/>
			<div class="row">
				<FeatureCard
					v-for="feature in features"
					:key="feature.id"
					:img="feature.img"
					:headline="feature.headline"
					:des="feature.des"
				/>
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
.Services {
	padding: 100px 0;
	.row {
		&:last-child {
			justify-content: center;
			margin-top: 100px;
		}
	}
}
</style>
<script>
import FeatureCard from "../global/FeatureCard.vue";
import Heading from "../global/Heading.vue";
import S1 from "../../assets/Service1.svg";
import S2 from "../../assets/Service2.svg";
import S3 from "../../assets/Service3.svg";
import S4 from "../../assets/Service4.svg";
import S5 from "../../assets/Service5.svg";
export default {
	name: "Services",
	components: {
		FeatureCard,
		Heading,
	},
	data: function () {
		return {
			features: [
				{
					id: 1,
					img: S1,
					headline: "Career Counselling",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum",
				},
				{
					id: 2,
					img: S2,
					headline: "University Admissions",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum",
				},
				{
					id: 3,
					img: S3,
					headline: "Visa Consultancy",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum",
				},
				{
					id: 4,
					img: S4,
					headline: "Accommodation",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum",
				},
				{
					id: 5,
					img: S5,
					headline: "Pre-Departure Briefing",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum",
				},
			],
		};
	},
};
</script>
