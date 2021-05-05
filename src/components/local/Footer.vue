<template>
	<footer class="main-footer">
		<!-- Start Info  -->
		<div class="info">
			<div class="logo">
				<img src="../../assets/logo-white.svg" alt="logo" />
			</div>
			<div class="adress">
				Concord Royal Court (3rd floor) Dhanmondi, Dhaka 1209, Bangladesh.
			</div>
			<div class="copyright">© 2020 Executive Trade International.</div>
		</div>
		<!-- End Info  -->

		<!-- Start Links -->
		<div class="links">
			<ul>
				<li><a href="#">About Us</a></li>
				<li><a href="#">Responsibilities</a></li>
				<li><a href="#">Our Services</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</div>
		<!-- End Links -->

		<!-- Start Links -->
		<div class="links">
			<ul>
				<li><a href="#">Disclaimer</a></li>
				<li><a href="#">Testimonials</a></li>
				<li><a href="#">Privacy Policy</a></li>
				<li><a href="#">Terms of Service</a></li>
			</ul>
		</div>
		<!-- End Links -->

		<!-- Start SocialMedia -->
		<div class="social-media">
			<SocialMedia />
		</div>
		<!-- End SocialMedia -->
	</footer>
</template>
<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//============Main Vars
@import "../../scss/_vars.scss";
//======================

//======================Main Footer
.main-footer {
	min-height: 345px;
	padding: 65px;
	background-color: $main-color;
	display: grid;
	grid-template-columns: 35% 23% 23% 19%;

	//==================Info
	.info {
		padding: 0 20px;

		//=========Start Logo

		//=========Start Adress
		.adress {
			margin-top: 20px;
			color: white;
			font-size: 17px;
		}

		//========Start Copyright
		.copyright {
			margin-top: 100px;
			color: white;
			font-size: 15px;
		}
	}

	//=================Links
	.links {
		padding: 20px 40px;
		ul {
			padding: 0;
			margin: 0;
			list-style: none;

			li {
				margin-bottom: 30px;
				a {
					color: white;
					text-decoration: none;
					transition: all 300ms;

					&:hover {
						color: rgb(75, 75, 75);
					}
				}
			}
		}
	}

	//================Social Media
	.social-media {
		width: 100%;
		height: 100%;
		position: relative;

		.SocialMedia {
			position: absolute;
			bottom: 0px;
			left: 0;
		}
	}
}
</style>

<script>
import SocialMedia from "../global/SocialMedia.vue";
export default {
	name: "Footer",
	components: {
		SocialMedia,
	},
};
</script>
