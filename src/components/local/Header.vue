<template>
	<div class="main-header">
		<div class="container">
			<div class="row">
				<div class="col-12 col-sm-12 col-md-8 col-lg-6">
					<div class="content">
						<h2>
							We Help to <span>Build</span><br />
							Your Dream
						</h2>
						<p>
							We are always availed to consult on taking your higher
							education to the next level so you can stay competitive in
							the
						</p>
						<FillButton val="Apply Online" />
						<SocialMedia />
					</div>
				</div>
			</div>
		</div>
		<div class="svg">
			<div class="con">
				<img src="../../assets/Oval.svg" />
				<img src="../../assets/photo.png" class="girl" />
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

.main-header {
	min-height: 650px;
	padding-top: 170px;
	position: relative;
	overflow: hidden;
	//==================Start Content
	.content {
		h2 {
			font-size: 35pt;
			line-height: 50pt;
			color: $Font-color-first;
			span {
				color: $main-color;
			}
		}
		p {
			font-size: 12pt;
			color: $Font-p;
			margin: 20px 0 40px 0;
		}
		.SocialMedia {
			margin-top: 120px;
		}
	}
	//===============================
	//===================Start Svg
	.svg {
		position: absolute;
		right: -450px;
		bottom: -160px;
		.con {
			position: relative;
			img {
				&:nth-child(2) {
					position: absolute;
					left: 0;
					bottom: 160px;
				}
			}
		}
	}
	//============================
}
//==================================Start Responsive
//=====================Start Tablets
@media only screen and (max-width: 991.98px) {
	.main-header {
		.svg {
			display: none;
		}
	}
}
//==================================
//=====================Start Moblies
@media only screen and (max-width: 575.98px) {
}
//================================
//==================================================
</style>
<script>
import FillButton from "../global/FillButton.vue";
import SocialMedia from "../global/SocialMedia.vue";
export default {
	name: "Header",
	components: {
		FillButton,
		SocialMedia,
	},
};
</script>
