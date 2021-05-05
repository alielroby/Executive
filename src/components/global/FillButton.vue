<template>
	<div class="FillButton">
		<button>
			{{ val }}
			<img src="../../assets/arrow-rightw.svg" />
		</button>
	</div>
</template>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//============Main Vars
@import "../../scss/_vars.scss";
//======================
.FillButton {
	button {
		border: none;
		background-color: $main-color;
		outline: none;
		cursor: pointer;
		padding: 15px 25px;
		border-radius: 10px;
		color: white;
		img {
			margin-left: 20px;
		}
	}
}
</style>
<script>
export default {
	name: "FillButton",
	props: ["val"],
};
</script>
