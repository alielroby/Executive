<template>
	<div class="loginPage">
		<!-- Start Sidebar -->
		<div class="Sidebar">
			<!-- Start Logo -->
			<div class="logo">
				<img src="../assets/logo-white.svg" alt="logo" />
			</div>
			<!-- Start Content -->
			<div class="content">
				<h2>Next Few Steps In Order To Create Your Account .</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
					diam neque.
				</p>
			</div>
			<!-- Start Svg -->
			<div class="svg">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 482.426 303.9">
					<path
						id="Path_4"
						data-name="Path 4"
						d="M25,739.775s81.55,274.836,481.236,301.535c-217.848,3.839-482.426,1.85-482.426,1.85Z"
						transform="translate(-23.81 -739.775)"
						fill="#828cff"
					/>
				</svg>
			</div>
		</div>
		<div class="main-content">
			<div class="login">
				<h1>Sign In</h1>
				<div class="form">
					<form>
						<div class="input">
							<label for="username">Username or Email</label>
							<input
								type="text"
								id="username"
								@click="Focuslabel"
								@blur="Blurlabel"
							/>
						</div>
						<div class="input">
							<label for="password">Password</label>
							<input
								type="password"
								id="password"
								@click="Focuslabel"
								@blur="Blurlabel"
							/>
						</div>
						<div id="submit">
							<input type="submit" value="Login" />
						</div>
					</form>
					<div class="socialLogin">
						<span>Or Connect With Social Media</span>
						<SocialLogin
							:bgcolor="'#257AF9'"
							:val="'Facebook'"
							:img="ficon"
						/>
						<SocialLogin
							:bgcolor="'#505050'"
							:val="'Github'"
							:img="giticon"
						/>
						<SocialLogin
							:bgcolor="'#FF3A3A'"
							:val="'Google'"
							:img="gicon"
						/>
					</div>
				</div>
			</div>
			<div class="forgetpass">
				You Forget Password ? <a href="#">Click Here</a>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
//=========================================//
//======Start Executive Version@1.0.0======//
//=========================================//

//=============Main Vars
@import "../scss/_vars.scss";
//======================

// ==========Start loginPage
.loginPage {
	min-height: 100vh;
	background-color: #eee;
	display: grid;
	grid-template-columns: 1fr 2fr;
	// ==========Start Sidebar
	.Sidebar {
		background-color: $main-color;
		margin: 15px;
		padding: 35px 50px;
		border-radius: 10px;
		position: relative;
		display: grid;
		grid-template-rows: auto 1fr;
		max-width: 400px;
		// ==========Start Content Sidebar
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			h2 {
				color: white;
			}
			p {
				color: #ffffff77;
				margin-top: 20px;
				font-size: 15px;
			}
		}
		// ==========End Content Sidebar

		.svg {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 100%;
			svg {
				path {
					width: 100%;
				}
			}
		}
	}
	// ==========End Sidebar

	// ==========Start Content
	.main-content {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		padding: 6% 0 0 6%;

		// ==========Start Login
		.login {
			width: 465px;

			// =========Start Form
			.form {
				margin: 130px 0px 100px 100px;
				form {
					display: flex;
					flex-direction: column;
					align-items: center;
				}
				input[type="text"],
				input[type="password"] {
					height: 50px;
					width: 350px;
					background-color: transparent;
					border: 0;
					border-bottom: 2px solid #707070;
					font-size: 20px;
				}
				.input {
					margin-bottom: 50px;

					label {
						position: relative;
						bottom: -35px;
						transition: bottom 200ms;
					}
					&:last-child {
						margin-bottom: 0;
					}
				}
				//===================Edit Submit Button
				#submit {
					position: relative;
					overflow: hidden;
					border-radius: 10px;
					width: 300px;
					margin: 10px auto 30px auto;
					&:hover::before {
						left: 0;
					}
					input {
						border: 2px solid $main-color;
						height: 50px;
						width: 100%;
						background-color: transparent;
						position: relative;
						border-radius: 10px;
						z-index: 1;
						transition: color 1s;
						&:hover {
							color: white;
						}
					}
					&::before {
						content: "";
						width: 100%;
						height: 100%;
						position: absolute;
						top: 0;
						left: -100%;
						transition: left 1s;
						z-index: 0;
						background-color: $main-color;
					}
				}
			}
			// =========End Form

			// ==========Start socialLogin
			.socialLogin {
				width: 100%;
				text-align: center;
				span {
					color: #aeaeae;
					font-size: 20px;
					margin: 20px 0;
					display: block;
				}
			}
			// ==========End socialLogin
		}
		// ==========End Login

		// ==========Start forgetpass
		.forgetpass {
			align-self: flex-end;
			margin: 20px;
		}
		// ==========End forgetpass
	}
	// ==========End Content
}
// ==========End loginPage
</style>

<script>
import $ from "jquery";
import SocialLogin from "../components/global/SocialLogin.vue";
import ficon from "../assets/facebook.svg";
import giticon from "../assets/github.svg";
import gicon from "../assets/google.svg";
export default {
	name: "Login",
	components: {
		SocialLogin,
	},
	data: function () {
		return {
			ficon: ficon,
			giticon: giticon,
			gicon: gicon,
		};
	},
	methods: {
		Focuslabel: function (e) {
			if ($(e.target).val() === "") {
				$(e.target).siblings().css("bottom", "0");
			}
		},
		Blurlabel: function (e) {
			if ($(e.target).val() === "") {
				$(e.target).siblings().css("bottom", "-35px");
			}
		},
	},
};
</script>
