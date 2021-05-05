<template>
	<div class="main-nav">
		<div class="container">
			<div class="logo">
				<img src="../../assets/logo.svg" alt="logo" />
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
			<StrokeButton val="Login" />
			<div class="menu">
				<MenuIcon @click.native="menuMobileOpen" />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//=============Main Vars
@import "../../scss/_vars.scss";
//======================
.main-nav {
	height: 100px;
	display: flex;
	align-items: center;
	.container {
		display: flex;
		align-items: center;
	}
	.logo {
		margin-bottom: 10px;
	}
	.menu {
		display: none;
	}
	//=========Start Links
	.links {
		flex: 1;
		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			width: max-content;
			margin: auto;
			margin-bottom: -15px;
		}
		li {
			display: inline-block;
			margin-right: 50px;
			padding: 10px 0;
			overflow: hidden;
			&:last-child {
				margin-right: 0;
			}
			.router-link-active {
				position: relative;
				&::before {
					content: "";
					position: absolute;
					bottom: -10px;
					left: 0;
					width: 20px;
					height: 3px;
					background-color: $main-color;
				}
			}
			a {
				color: $Font-color-first;
				transition: all 300ms;
				text-decoration: none;
				&::before {
					content: "";
					position: absolute;
					bottom: -10px;
					left: -25px;
					width: 20px;
					height: 3px;
					background-color: $main-color;
					transition: all 500ms;
				}
				&:hover {
					color: rgb(190, 190, 190);
				}
			}
		}
	}
	//====================
}

//==================================Start Responsive
//=====================Start Tablets
@media only screen and (max-width: 991.98px) {
	.main-nav {
		.links,
		.StrokeButton {
			display: none !important;
		}
		.logo {
			flex: 1;
		}
		.menu {
			display: block;
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
import StrokeButton from "./StrokeButton.vue";
import MenuIcon from "./MenuIcon.vue";
import $ from "jquery";
export default {
	name: "Navbar",
	components: { StrokeButton, MenuIcon },
	methods: {
		UpperLogin: function () {
			$(".overflow-login").show();
			$("body").toggleClass("notScroll");
			setTimeout(function () {
				$(".form").toggleClass("formOpen");
			}, 1);
		},
		menuMobileOpen: function () {
			$("body").toggleClass("notScroll");
			$(".menu-mobile").toggleClass("menu-mobile-open");
		},
	},
};
</script>
