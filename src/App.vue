<template>
	<div id="app">
		<MenuMobile />
		<router-view />
	</div>
</template>
<script>
import MenuMobile from "./components/global/MenuMobile.vue";
export default {
	name: "App",
	components: {
		MenuMobile,
	},
};
</script>
<style lang="scss"></style>
