<template>
	<div class="col-12 col-sm-12 col-md-6 col-lg-4">
		<div class="BlogCard">
			<div class="photo">
				<img :src="img" />
			</div>
			<div class="info">
				<div class="date">
					<div class="icon">
						<img src="../../assets/calender.svg" />
					</div>
					{{ date }}
				</div>
				<div class="headline">{{ title }}</div>
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
.BlogCard {
	width: 345px;
	min-height: 405px;
	background-color: white;
	box-shadow: $shadow;
	border-radius: 10px;
	margin-bottom: 30px;
	.photo {
		height: 224px;
		overflow: hidden;
		img {
			height: 100%;
		}
	}
	.info {
		padding: 25px;
		.date {
			color: $Font-p;
			.icon {
				display: inline-block;
				margin-right: 15px;
				img {
					height: 21px;
				}
			}
		}
		.headline {
			margin-top: 20px;
			font-size: 18pt;
			color: $Font-p;
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
	.BlogCard {
		width: 100%;
	}
}
//================================
//==================================================
</style>
<script>
export default {
	name: "BlogCard",
	props: ["img", "date", "title"],
};
</script>
