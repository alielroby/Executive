<template>
	<div class="BusinessCard">
		<div class="photo">
			<img :src="img" />
		</div>
		<div class="info">
			<div class="headline">{{ headline }}</div>
			<div class="des">
				{{ des }}
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
.BusinessCard {
	width: 348px;
	height: 354px;
	.photo {
		width: 345px;
		height: 215px;
		border-radius: 35px;
		overflow: hidden;
		img {
			width: 100%;
			transition: all 500ms;
			&:hover {
				transform: scale(1.1);
				filter: grayscale(0.5);
			}
		}
	}
	.info {
		width: 97%;
		margin: 30px auto 0 auto;
		.headline {
			font-size: 20pt;
			color: #37474f;
		}
		.des {
			font-size: 10pt;
			color: $Font-p;
			line-height: 18pt;
		}
	}
}
</style>
<script>
export default {
	name: "BusinessCard",
	props: ["img", "headline", "des"],
};
</script>
