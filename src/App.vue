<template>
	<div id="app">
		<Navbar />
		<MenuMobile />
		<router-view />
	</div>
</template>
<script>
import Navbar from "./components/global/Navbar.vue";
import MenuMobile from "./components/global/MenuMobile.vue";
export default {
	name: "App",
	components: {
		Navbar,
		MenuMobile,
	},
};
</script>
<style lang="scss"></style>
