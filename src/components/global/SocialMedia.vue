<template>
	<div class="SocialMedia">
		<a href="#"><img src="../../assets/facebook.svg" /></a>
		<a href="#"><img src="../../assets/twitter.svg" /></a>
		<a href="#"><img src="../../assets/insta.svg" /></a>
	</div>
</template>
<style lang="scss" scoped>
.SocialMedia {
	margin-bottom: 50px;
	a {
		margin-right: 20px;
		&:last-child {
			margin-right: 0px;
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
	.SocialMedia {
		text-align: center;
	}
}
//================================
//==================================================
</style>
<script>
export default {
	name: "SocialMedia",
};
</script>
