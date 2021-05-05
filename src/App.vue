<template>
	<div id="app">
		<Navbar />
		<MenuMobile />
		<router-view />
		<Login />
	</div>
</template>
<script>
import Login from "./components/global/Login.vue";
import Navbar from "./components/global/Navbar.vue";
import MenuMobile from "./components/global/MenuMobile.vue";
export default {
	name: "App",
	components: {
		Navbar,
		Login,
		MenuMobile,
	},
};
</script>
<style lang="scss"></style>
