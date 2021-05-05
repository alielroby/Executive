<template>
	<div class="Events">
		<div class="container">
			<Heading
				headline="Upcoming University Events"
				des="Sunt autem nusquam hoc epicurus in gravissimo bello animadversionis metu degendae praesidia firmissima. Torquatos nostros? quos tu paulo ante cum teneam sententiam, quid bonum esse vult."
			/>
			<div class="con-events">
				<carousel paginationActiveColor="#717cff" :paginationSize="12">
					<slide v-for="Event in Events" :key="Event.id">
						<EventCard
							:day="Event.day"
							:month="Event.month"
							:title="Event.title"
							:des="Event.des"
							:from="Event.from"
							:to="Event.to"
						/>
					</slide>
				</carousel>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.Events {
	min-height: 870px;
	padding: 100px 0;
	.con-events {
		margin-top: 100px;
	}
}
</style>
<script>
import Heading from "../global/Heading.vue";
import { Carousel, Slide } from "vue-carousel";
import EventCard from "../global/EventCard.vue";
export default {
	name: "Events",
	components: {
		Heading,
		EventCard,
		Carousel,
		Slide,
	},
	data: function () {
		return {
			Events: [
				{
					id: 1,
					day: "23",
					month: "dec",
					title: "Macquarie University, Sydney, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "10:00 AM",
					to: "2:00 PM",
				},
				{
					id: 2,

					day: "17",
					month: "oct",
					title: "Federation University, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "2:00 PM",
					to: "6:00 PM",
				},
				{
					id: 3,
					day: "23",
					month: "dec",
					title: "Macquarie University, Sydney, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "10:00 AM",
					to: "2:00 PM",
				},
				{
					id: 4,
					day: "17",
					month: "oct",
					title: "Federation University, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "2:00 PM",
					to: "6:00 PM",
				},
				{
					id: 5,
					day: "23",
					month: "dec",
					title: "Macquarie University, Sydney, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "10:00 AM",
					to: "2:00 PM",
				},
				{
					id: 6,
					day: "17",
					month: "oct",
					title: "Federation University, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "2:00 PM",
					to: "6:00 PM",
				},
				{
					id: 7,
					day: "23",
					month: "dec",
					title: "Macquarie University, Sydney, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "10:00 AM",
					to: "2:00 PM",
				},
				{
					id: 8,
					day: "17",
					month: "oct",
					title: "Federation University, Australia",
					des:
						"Maiores voluptas laboriosam non dolorum perferendis fuga repellat aut. Blanditiis quos in minus. Voluptatum quia quia voluptas voluptatem vero ex possimus. Iure et consectetur ",
					from: "2:00 PM",
					to: "6:00 PM",
				},
			],
		};
	},
};
</script>
