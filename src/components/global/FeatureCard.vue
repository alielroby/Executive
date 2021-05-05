<template>
	<div class="col-12 col-sm-12 col-md-6 col-lg-4">
		<div class="FeatureCard">
			<div class="logo">
				<img :src="img" />
			</div>
			<h3>{{ headline }}</h3>
			<p>
				{{ des }}
			</p>
			<a href="#"> Learn More <img src="../../assets/arrow-right.svg" /></a>
		</div>
	</div>
</template>
<script>
export default {
	name: "FeatureCard",
	props: ["img", "headline", "des"],
};
</script>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//============Main Vars
@import "../../scss/_vars.scss";
//======================
.FeatureCard {
	width: 344px;
	min-height: 351px;
	background-color: white;
	display: inline-block;
	border-radius: 10px;
	padding: 28px 28px;
	margin-bottom: 20px;
	border: 4px solid white;
	transition: all 600ms;
	box-shadow: $shadow;
	user-select: none;
	&:hover {
		border: 4px solid #{$main-color};
	}
	.logo {
		padding-bottom: 25px;
		img {
			height: 70px;
		}
	}
	h3 {
		font-size: 18pt;
		color: $Font-color-first;
		padding-bottom: 15px;
	}
	p {
		color: $Font-p;
		font-size: 11pt;
		margin-bottom: 40px;
	}
	a {
		color: $main-color;
		text-decoration: none;
		transition: color 400ms;
		&:hover {
			color: #aeb4ff;
		}
		img {
			margin: 0 0 1px 10px;
		}
	}
}
//==================================Start Responsive
//=====================Start Tablets
@media only screen and (max-width: 991.98px) {
}
//==================================
//=====================Start Moblies
@media only screen and (max-width: 575.98px) {
	.FeatureCard {
		width: 100%;
	}
}
//================================
//==================================================
</style>
