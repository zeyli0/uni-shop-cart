<template>
	<view :class="['itemCon', item.isUse?'listHui':'listActive']">
		<view class="itemCon_left" :data-isUse="item.isUse">
			<view class="quan_text">
				<view class="flex-center">
					<view class="sm_txt">￥</view>
					<view class="price_num">
						{{item.money}}
					</view>
				</view>
				<text class="man">满{{item.minPrice | formater}}可用</text>
			</view>
		</view>
		<view class="itemCon_right">
			<view :class="item.isUse?'column_dis':'column'">
				<text v-if="">已</text>
				<text>领</text>
				<text>取</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: ['item'],
	data() {
		return {}
	},
	filters: {
		formater(val) {
			return parseInt(val)
		}
	}
}
</script>

<style lang="scss" scoped>
.itemCon {
	display: inline-block;
	width: 114px;
	height: 54px;
	margin-right: 10px;
	border-radius: 7px;
	background-repeat: no-repeat;
	background-position: 100%;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: #fff;
		left: -5px;
		top: 22px;
	}
	.itemCon_left {
		width: 86px;
		height: 54px;
		border-radius: 7px;
		float: left;
		display: flex;
		justify-content: center;
		align-items: center;
		.quan_text {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
			.sm_txt {
				display: inline-block;
				width: 12px;
				height: 12px;
				border-radius: 50%;
				text-align: center;
				font-size: 10px;
				margin-top: 5px;
				color: #fff;
			}
			.man {
				font-size: 12px;
				opacity: .7;
			}
		}
	}
	.itemCon_right {
		width: 28px;
		height: 54px;
		float: left;
		background: transparent;
		.column_dis {
			height: 54px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			font-size: 12px;
			color: #fff;
			border-radius: 0 7px 7px 0;
			background-color: #ccc;
		}
		.column {
			height: 54px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: #fff;
			font-size: 12px;
			border-radius: 0 7px 7px 0;
		}
	}
}
.listHui {
	background-color: #ccc!important;
	.itemCon_left {
		background-color: #f6f6f6;
		color: #ccc;
		.quan_text {
			color: #ccc;
			.sm_txt {
				background-color: #ccc;
			}
		}
	}
}
.listActive {
	background: linear-gradient(90deg, var(--bg-color-red), var(--bg-color-red-light));
	.itemCon_left {
		background-color: var(--bg-color-red-litle)!important;
		.quan_text {
			color: var(--bg-color-red)!important;
			.sm_txt {
				background-color: var(--bg-color-red)!important;
			}
		}
	}
}
</style>
