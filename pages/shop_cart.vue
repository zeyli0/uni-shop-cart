<template>
	<view class="shop-cart">
		<view class="cart-nav">
			<head-com>
				<template v-slot:left>
					<view class="iconfont icon-shangcheng"></view>
				</template>
				<template v-slot:center>
					<view>购物车</view>
				</template>
				<template slot="right">
					<view class="iconfont icon-gengduo"></view>
				</template>
			</head-com>
		</view>
		<view class="cart-content">
			<view class="labelNav flex justify-around">
				<view class="item" v-for="item in labels" :key="item.id">
					<text>{{item.text}}</text>
				</view>
			</view>
			<view class="cartBox">
				<view class="nav">
					<view>
						
					</view>
					<view class="administrate">
						
					</view>
				</view>
			</view>
		</view>
		<view class="footer flex-center-between">
			<label class="radio"><radio value="r1" checked/>全选</label>
			<view class="money flex">
				<label>合计:<sub>￥</sub>{{total}}</label>
				<view class="btn">
					结算
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import headCom from './component/head.vue'
export default {
	components: {
		headCom
	},
	data() {
		return {
			labels: [
				{id:1, text:'100%正品保证'},
				{id:2, text:'所有商品精挑细选'},
				{id:3, text:'售后无忧'},
			],
			total: 0,
		}
	},
	created() {
	// 	this.getCartList()
	},
	methods: {
		getCartList() {
			uni.request({
				url: "https://apif.java.crmeb.net/api/front/cart/list",
				method: "GET",
				data: {
					page: 1,
					limit: 20,
					isValid: true
				},
				success(res) {
					// console.log("res", res)
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.shop-cart {
	.cart-nav {
		.iconfont {
			font-size: 30px;
		}
	}
	.cart-content {
		.labelNav {
			height: 89px;
			padding: 15px 15px 0;
			font-size: 11px;
			color: #fff;
			width: 100%;
			box-sizing: border-box;
			background-color: var(--bg-color-yellow);
			z-index: 5;
		}
		.cartBox {
			width: 92%;
			height: 45px;
			background-color: #fff;
			padding: 0 12px;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			font-size: 14px;
			color: #282828;
			margin: -45px auto 0;
			z-index: 6;
			border-top-left-radius: 7px;
			border-top-right-radius: 7px;
		}
	}
	.footer {
		z-index: 999;
		width: 100%;
		height: 50px;
		background-color: #fff;
		position: fixed;
		padding: 0 12px;
		box-sizing: border-box;
		border-top: 0.5px solid #eee;
		bottom: var(--window-bottom);
		.money {
			font-size: 15px;
			color: var(--window-bottom);
		}
	}
}
</style>
