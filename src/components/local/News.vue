<template>
	<div class="News">
		<div class="container">
			<Heading
				headline="News"
				des="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."
			/>
			<div class="blogs">
				<div class="row">
					<BlogCard
						v-for="blog in blogs"
						:key="blog.id"
						:img="blog.img"
						:date="blog.date"
						:title="blog.title"
					/>
				</div>
			</div>
			<div class="row">
				<div class="button">
					<FillButton :val="button" />
				</div>
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
.News {
	background-color: #fafafa;
	min-height: 1120px;
	padding: 100px 0;
	.row {
		justify-content: center;
	}
	.heading {
		text-align: center;
		h3 {
			color: $Font-color-first;
			font-weight: 100;
			font-size: 23pt;
		}
		p {
			width: 75%;
			margin: 20px auto;
			color: $Font-p;
		}
	}
	.blogs {
		margin-top: 150px;
	}
	.button {
		margin: 150px auto 0 auto;
	}
}
</style>
<script>
import Heading from "../global/Heading.vue";
import BlogCard from "../global/BlogCard.vue";
import FillButton from "../global/FillButton.vue";
import B1 from "../../assets/blog1.jpg";
import B2 from "../../assets/blog2.jpg";
import B3 from "../../assets/blog3.jpg";
export default {
	name: "News",
	components: {
		Heading,
		BlogCard,
		FillButton,
	},
	data: function () {
		return {
			blogs: [
				{
					id: 1,
					img: B1,
					date: "17 Apr 2020",
					title: "Come On In. The Water’s Fine",
				},
				{
					id: 2,
					img: B2,
					date: "21 May 2020",
					title: "Trump Lays Plans to Reverse",
				},
				{
					id: 3,
					img: B3,
					date: "3 Apr 2021",
					title: "How a Little Bit of Hydra",
				},
			],
			button: "Join Here",
		};
	},
};
</script>
