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
		<view class="cart-centent">
			<view class="labelNav">
				
			</view>
			<view class="cartBox">
				
			</view>
		</view>
		<view class="footer">
			
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
}
</style>
