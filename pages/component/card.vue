<template>
	<view class="card item">
		<view class="picture">
			<image :src="item.img" mode="aspectFill"></image>
			<view v-if="item.rank" class="rank_bdg top_1">
				{{item.rank}}
			</view>
		</view>
		<view v-if="theme === 1" :class="'lines'+theme">
			<view :class="['name', 'line'+theme]">
				{{item.text}}
			</view>
			<view class="money">
				￥<text class="num">{{item.price}}</text>
			</view>
			<view v-if="item.discount" class="y_money">
				{{item.discount}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['item','theme'],
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
.card.item {
	width: 100%;
	height: 100%;
	.picture {
		position: relative;
		width: 100%;
		height: 167px;
		uni-image {
			width: 100%;
			height: 100%;
			border-radius: 7px;
		}
	}
	.lines1 {
		width: 100%;
		.line1 {
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		}
		.name {
			font-size: 14px;
			color: #282828;
			margin-top: 10px;
		}
		.money {
			font-weight: 600;
			color: var(--text-color-red);
			.num {
				font-size: 14px;
			}
		}
	}
}
</style>
