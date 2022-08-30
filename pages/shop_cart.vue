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
			<view class="labelNav">
				<view class="item" v-for="item in labels" :key="item.id">
					<text>{{item.text}}</text>
				</view>
			</view>
			<view class="cartBox">
				
			</view>
		</view>
		<view class="footer flex-center-between">
			<label class="radio"><radio value="r1" checked/>全选</label>
			<view class="right flex">
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
			labels: [{id:1,text:'100%保障'}],
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
			height: 60px;
			background-color: var(--bg-color-yellow);
			.item {
				width: 80%;
				margin: 0 auto;
				padding-top: 10px;
				color: #fff;
			}
		}
	}
	.footer {
		width: 90%;
		margin: 0 auto;
		height: 50px;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
	}
}
</style>
