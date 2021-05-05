<template>
	<div class="TestimonialCard">
		<div class="info">
			<div class="photo">
				<img :src="data.img" />
			</div>
			<div class="information">
				<div class="name">{{ data.name }}</div>
				<div class="title">{{ data.title }}</div>
			</div>
			<div class="des">
				Nisi cumque in necessitatibus molestiae eaque excepturi ab.
				Laboriosam ipsam voluptatem voluptatibus labore quam nihil. Quasi
				occaecati quos ratione quia aut molestiae velit et. Voluptatem id ea
				dicta inventore et quo impedit repudiandae. Qui
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
.TestimonialCard {
	min-height: 330px;
	width: 500px;
	box-shadow: $shadow;
	padding: 35px 30px;
	border-radius: 15px;
	margin: 10px;
	.photo,
	.information {
		display: inline-block;
	}
	.photo {
		width: 60px;
		height: 60px;
		border-radius: 10px;
		overflow: hidden;
		margin-right: 20px;
		img {
			height: 101%;
		}
	}
	.information {
		width: 80%;
		vertical-align: top;
		padding-top: 3px;
		.title {
			color: $Font-p;
			font-size: 17px;
		}
		.name {
			font-size: 20px;
		}
	}
	.des {
		color: $Font-p;
		font-size: 16.5px;
		margin-top: 30px;
	}
}
</style>
<script>
export default {
	name: "TestimonialCard",
	props: ["data"],
};
</script>
