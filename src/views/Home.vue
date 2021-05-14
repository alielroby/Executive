<template>
	<div class="home">
		<Navbar />
		<Header />
		<Universities />
		<Services />
		<News />
		<Events />
		<Countries />
		<Testimonial />
		<ApplyNow />
		<Footer />
	</div>
</template>

<script>
import Navbar from "../components/global/Navbar.vue";
import Header from "../components/local/Header.vue";
import Universities from "../components/local/Universities.vue";
import Services from "../components/local/Services.vue";
import News from "../components/local/News.vue";
import Events from "../components/local/Events.vue";
import Countries from "../components/local/Countries.vue";
import Testimonial from "../components/local/Testimonial.vue";
import ApplyNow from "../components/local/ApplyNow.vue";
import Footer from "../components/local/Footer.vue";

export default {
	name: "Home",
	components: {
		Navbar,
		Header,
		Universities,
		Services,
		News,
		Events,
		Countries,
		Testimonial,
		ApplyNow,
		Footer,
	},
};
</script>
<style lang="scss" scoped></style>
