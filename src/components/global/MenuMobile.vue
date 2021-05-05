<template>
	<div class="menu-mobile">
		<div class="login-signup">
			<StrokeButton val="Login" />
			<StrokeButton val="Signup" />
		</div>
		<div class="links">
			<ul>
				<li><router-link to="/" exact>Home</router-link></li>
				<li><router-link to="/about-us">About Us</router-link></li>
				<li>
					<router-link to="/our-services">Our Services</router-link>
				</li>
				<li>
					<router-link to="/responsibilities"
						>Responsibilities</router-link
					>
				</li>
				<li><router-link to="/country">Country</router-link></li>
			</ul>
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
.menu-mobile {
	width: 270px;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	right: -271px;
	top: 0;
	background-color: rgba(255, 255, 255, 0.781);
	backdrop-filter: blur(2px);
	box-shadow: $shadow;
	z-index: 3;
	transition: all 500ms;
	will-change: right;
	.login-signup {
		position: absolute;
		bottom: 30px;
		left: 20px;
		.StrokeButton {
			margin-right: 20px;
			&:nth-child(2) {
				margin-right: 0px;
			}
		}
	}
	.links {
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			li {
				margin-bottom: 30px;
				a {
					color: $main-color;
					text-decoration: none;
				}
			}
		}
	}
}
.menu-mobile-open {
	right: 0;
}
</style>
<script>
import StrokeButton from "./StrokeButton.vue";
export default {
	name: "MenuMobile",
	components: {
		StrokeButton,
	},
};
</script>
