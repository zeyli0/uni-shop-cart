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
				<view class="nav flex-center-between">
					<view>
						购物数量
						<text class="num font_color">{{totalCount}}</text>
					</view>
					<view class="administrate">管理</view>
				</view>
				<view class="pad30">
					<view class="list">
						<checkbox-group @change="checkboxChange">
							<view class="item" v-for="(item, index) in lists" :key="index">
								<checkbox :value="item.value" :checked="item.checked" />
								<navigator url="" class="picTxt">
									<view class="picture">
										<image :src="item.image" mode="aspectFill"></image>
									</view>
									<view class="text">
										<view class="line1">
											{{item.storeName}}
										</view>
										<view class="infor line1">
											{{item.suk}}
										</view>
										<view class="money mt-28">
											￥{{item.price}}
										</view>
									</view>
									<view class="carnum">
										<view class="reduce on">
											-
										</view>
										<view>
											{{item.cartNum}}
										</view>
										<view class="plus">
											+
										</view>
									</view>
								</navigator>
							</view>
						</checkbox-group>
					</view>
				</view>
			</view>
		</view>
		<view class="footer flex-center-between">
			<label class="radio">
				<radio value="r1" :checked="allCheck" color="#fe5c2d"/>全选({{totalNum}})
			</label>
			<view class="money flex align-center">
				<text class="price-color">合计:￥{{totalPrice}}</text>
				<form @submit="formSubmit">
					<button class="placeOrder bg_color" form-type="submit">结算</button>
				</form>
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
			totalCount: 0,
			totalPrice: 0,
			totalNum: 0,
			allCheck: false,
			lists: [],
		}
	},
	created() {
		this.getCount()
		this.getCartList()
	},
	methods: {
		checkboxChange() {},
		getCount() {
			const _this = this;
			uni.request({
				url:"https://apif.java.crmeb.net/api/front/cart/count",
				method: "GET",
				data: {
					numType: true,
					type: 'sum'
				},
				header: {
					"authori-zation": uni.getStorageSync("token"),
					"content-type": "application/json"
				},
				success(res) {
					if(res.data.code == 200) {
						_this.totalCount = res.data.data.count
					} else {
						_this.$goBack(2, '/pages/login')
					}
				}
			})
		},
		getCartList() {
			const _this = this;
			uni.request({
				url: "https://apif.java.crmeb.net/api/front/cart/list",
				method: "GET",
				data: {
					page: 1,
					limit: 20,
					isValid: true
				},
				header: {
					"authori-zation": uni.getStorageSync("token"),
					"content-type": "application/json"
				},
				success(res) {
					_this.lists = res.data.data.list
				}
			})
		},
		formSubmit() {
			
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
			.nav {
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
				.num {
					margin-left: 6px;
					color: #fe5c2d!important;
				}
				.administrate {
					font-size: 14px;
					color: #333;
				}
			}
			.pad30 {
				padding: 0 15px;
				.list {
					width: 100%;
					overflow: hidden;
					border-bottom-left-radius: 7px;
					border-bottom-right-radius: 7px;
				}
			}
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
		.radio {
			uni-radio {
				transform: scale(0.8);
			}
		}
		.money {
			font-size: 15px;
			font-weight: 600;
			color: var(--window-bottom);
			.price-color {
				color: #fe5c2d!important;
			}
			.placeOrder {
				color: #fff;
				font-size: 15px;
				width: 113px;
				height: 35px;
				border-radius: 25px;
				text-align: center;
				line-height: 35px;
				margin-left: 11px;
				background-color: #fe5c2d!important;
			}
		}
	}
}
</style>
