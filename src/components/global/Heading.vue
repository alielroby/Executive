<template>
	<div class="row">
		<div class="heading">
			<h3>{{ headline }}</h3>
			<p>{{ des }}</p>
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
//============Start heading
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
//=========================
//==================================Start Responsive
//=====================Start Tablets
@media only screen and (max-width: 991.98px) {
	.heading {
		p {
			width: 95%;
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
	name: "Heading",
	props: ["headline", "des"],
};
</script>
