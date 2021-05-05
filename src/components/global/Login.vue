<template>
	<div class="overflow-login">
		<div class="form">
			<div class="exit" @click="HideLogin()">
				<img src="../../assets/wrong.svg" />
			</div>
			<form action=""></form>
			<img class="hat" src="../../assets/hat.svg" alt="hat" />
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

.overflow-login {
	background-color: rgba(51, 51, 51, 0.596);
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: none;

	//=========================Start Form
	.form {
		position: absolute;
		width: 0px;
		height: 0px;
		padding: 20px;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		border: 4px solid #{$main-color};
		border-radius: 10px;
		background-color: rgba(255, 255, 255, 0.651);
		transition: all 2s;
		//===================Start Exit

		.exit {
			width: 17px;
			height: 17px;
			position: absolute;
			right: 17px;
			top: 17px;
			opacity: 0;
			transition: all 1s;
			transition-delay: 500ms;
			cursor: pointer;
		}
		//=============================

		.hat {
			position: absolute;
			width: 90px;
			left: 50%;
			top: 54%;
			transform: translate(-50%, -50%) rotate(0deg);
			transition: all 800ms;
			z-index: 2;
		}
	}
	//====================================

	//=========================Start Form Open
	.formOpen {
		width: 500px;
		height: 600px;
		//===================Start Exit

		.exit {
			width: 17px;
			height: 17px;
			position: absolute;
			right: 17px;
			top: 17px;
			opacity: 1;
		}
		//=============================

		.hat {
			left: 0%;
			top: 0%;
			transform: translate(-50%, -50%) rotate(-20deg);
		}
	}
	//====================================
}
@keyframes Login {
	from {
		transform: translate(-50%, -50%);
	}
	to {
		transform: translate(-50%, -55%) rotate(-5deg);
	}
}
</style>
<script>
import $ from "jquery";
export default {
	name: "Login",
	methods: {
		HideLogin: function () {
			$(".overflow-login").hide();
			$("body").toggleClass("notScroll");
			$(".form").toggleClass("formOpen");
		},
		Login: function () {
			$.get(
				"https://executive1.000webhostapp.com/Connect.php",
				function (data) {
					console.log(data);
				}
			);
		},
	},
};
</script>
