<template>
	<div class="Universities">
		<div class="container">
			<div class="row">
				<div class="title"><h3>Featured Universities</h3></div>
			</div>
			<div class="brands">
				<div class="row">
					<div class="col-12 col-sm-12 col-md-6 col-lg-3">
						<img src="../../assets/Universitie1.png" />
					</div>
					<div class="col-12 col-sm-12 col-md-6 col-lg-3">
						<img src="../../assets/Universitie2.png" />
					</div>
					<div class="col-12 col-sm-12 col-md-6 col-lg-3">
						<img src="../../assets/Universitie3.png" />
					</div>
					<div class="col-12 col-sm-12 col-md-6 col-lg-3">
						<img src="../../assets/Universitie4.png" />
					</div>
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
.Universities {
	min-height: 425px;
	background-color: $bg-color;
	padding: 60px 0;
	.title {
		margin: auto;
		h3 {
			color: $Font-color-first;
			font-weight: 100;
			font-size: 23pt;
		}
	}
	.brands {
		margin-top: 100px;
		width: 100%;
		.row {
			align-items: center;
		}
	}
}
//==================================Start Responsive
//=====================Start Tablets
@media only screen and (max-width: 991.98px) {
	.Universities {
		.brands {
			text-align: center;
			img {
				margin-bottom: 50px;
			}
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
export default {
	name: "Universities",
};
</script>
