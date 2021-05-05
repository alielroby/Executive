<template>
	<div class="MenuIcon" @click="MenuIconOpen">
		<span></span>
		<span></span>
		<span></span>
	</div>
</template>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//============Main Vars
@import "../../scss/_vars.scss";
//======================
.MenuIcon {
	width: 35px;
	height: 35px;
	cursor: pointer;
	position: relative;
	z-index: 4;
	span {
		background-color: rgb(68, 68, 68);
		width: 100%;
		display: block;
		height: 3px;
		border-radius: 1px;
		transform-origin: right;
		position: relative;
		transition: all 500ms;
		&:nth-child(2),
		&:nth-child(3) {
			margin-top: 27%;
			will-change: left;
			left: 0;
		}
		&:nth-child(2) {
			transition: left 100ms;
		}
	}
}
.MenuIconOpen {
	span {
		&:nth-child(1) {
			transform: rotate(-45deg);
		}
		&:nth-child(2) {
			left: -101%;
			opacity: 0;
		}
		&:nth-child(3) {
			transform: rotate(45deg);
		}
	}
}
</style>
<script>
import $ from "jquery";
export default {
	name: "MenuIcon",
	methods: {
		MenuIconOpen: function () {
			$(".MenuIcon").toggleClass("MenuIconOpen");
		},
	},
};
</script>
