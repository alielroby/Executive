<template>
	<button class="SocialLogin">
		Login With <span :style="'--bglogin: ' + bgcolor">{{ val }}</span>
		<span :style="'--bglogin: ' + bgcolor">
			<img :src="img" />
		</span>
	</button>
</template>

<style lang="scss" scoped>
.SocialLogin {
	height: 60px;
	width: 317px;
	padding-right: 47px;
	background-color: white;
	border: none;
	border-radius: 15px;
	position: relative;
	overflow: hidden;
	box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.247);
	color: #a2a2a2;
	margin-bottom: 30px;

	span:nth-child(2) {
		background-color: var(--bglogin);
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 47px;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: width 1s;
	}
	span:nth-child(1) {
		color: var(--bglogin);
	}
	&:hover span:nth-child(2) {
		width: 100%;
	}
}
</style>

<script>
export default {
	name: "SocialLogin",
	props: ["bgcolor", "val", "img"],
};
</script>
