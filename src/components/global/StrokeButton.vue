<template>
	<div class="StrokeButton">
		<button>{{ val }}</button>
	</div>
</template>
<script>
export default {
	name: "StrokeButton",
	props: ["val"],
};
</script>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//============Main Vars
@import "../../scss/_vars.scss";
//======================
.StrokeButton {
	display: inline-block;
	overflow: hidden;
	position: relative;
	border-radius: 10px;
	&::before {
		content: "";
		position: absolute;
		width: calc(100% + 3px);
		height: calc(100% + 3px);
		background-color: $main-color;
		top: -2px;
		left: -103%;
		z-index: -1;
		transition: all 500ms;
	}
	button {
		background-color: transparent;
		border: 2px solid $main-color;
		border-radius: 10px;
		padding: 10px 28px;
		outline: none;
		cursor: pointer;
		color: #505050;
		font-size: 12pt;
		z-index: 1;
		transition: all 500ms;
	}
	button:hover {
		color: white;
	}
}
.StrokeButton:hover:before {
	left: -2px;
}
</style>
