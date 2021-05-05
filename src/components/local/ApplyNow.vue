<template>
	<div class="ApplyNow">
		<div class="ready">Ready to chase your dreams?</div>
		<div class="button">
			<FillButton :val="'Apply Now'" />
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

.ApplyNow {
	display: grid;
	grid-template-columns: 50% 50%;
	height: 220px;
	background-color: $bg-color;
	padding: 70px;
	.ready {
		font-size: 35px;
	}

	.button {
		display: flex;
		justify-content: flex-end;
	}
}
</style>

<script>
import FillButton from "../global/FillButton.vue";
export default {
	name: "ApplyNow",
	components: {
		FillButton,
	},
};
</script>
