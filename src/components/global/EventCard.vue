<template>
	<div class="EventCard">
		<div class="headline">
			<div class="date">
				<div class="day">{{ day }}</div>
				<div class="month">{{ month }}</div>
			</div>
			<div class="title">
				<h3>{{ title }}</h3>
			</div>
		</div>
		<div class="des">
			<p>
				{{ des }}
			</p>
		</div>
		<div class="info">
			<a href="#"> Learn More <img src="../../assets/arrow-right.svg" /></a>
			<div class="time">
				<img src="../../assets/time.svg" />
				<div class="from">{{ from }}</div>
				<pre> - </pre>
				<div class="to">{{ to }}</div>
			</div>
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

.EventCard {
	min-height: 300px;
	width: 540px;
	background-color: white;
	border-radius: 10px;
	margin: 5px auto 50px auto;
	padding: 25px;
	box-shadow: $shadow;
	.date {
		background-color: #717dff3d;
		padding: 5px 20px;
		display: inline-block;
		border-radius: 5px;
		text-align: center;
		.day {
			color: $main-color;
			font-size: 18pt;
			height: max-content;
		}
		.month {
			color: $main-color;
			font-size: 12pt;
			height: max-content;
		}
	}
	.title {
		display: inline-block;
		vertical-align: top;
		margin: 10px 0 10px 35px;
		width: 70%;
		color: $Font-color-first;
	}
	.des {
		margin-top: 30px;
		p {
			color: $Font-p;
			line-height: 20pt;
			width: 95%;
			margin: auto;
		}
	}
	//======================Start Info
	.info {
		margin-top: 30px;
		display: flex;
		a {
			color: $main-color;
			text-decoration: none;
			transition: color 400ms;
			display: inline-block;
			flex: 1;
			&:hover {
				color: #aeb4ff;
			}
			img {
				margin: 0 0 1px 10px;
			}
		}
		//===================Start Time
		.time {
			display: flex;
			color: $Font-color-first;
			img {
				margin-top: -2px;
				margin-right: 10px;
			}
		}
		//=============================
	}
	//================================
}
</style>
<script>
export default {
	name: "EventCard",
	props: ["day", "month", "title", "des", "from", "to"],
};
</script>
