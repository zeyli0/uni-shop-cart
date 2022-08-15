<template>
	<view class="wrapper" :data-theme="theme">
		<view class="page-index skeleton">
			<view class="header">
				<view class="serch-wrapper flex">
					<view class="logo skeleton-rect">
						MyShop
					</view>
					<navigator url="/pages/goods_search?title=navigate" class="input">
						<text class="iconfont icon-sousuo"></text>
						搜索商品
					</navigator>
				</view>
			</view>
			<view class="page_content skeleton">
				<view class="mp-bg"></view>
				<view id="pageIndex">
					<view class="swiper skeleton-rect"></view>
					<view class="notice acea-row row-middle row-between skeleton-rect"></view>
					<view class="nav acea-row"></view>
				</view>
				<view class="coupons skeleton skeleton-rect">
					
				</view>
				<view class="skeleton skeleton-rect">
					
				</view>
				<view :data-theme="theme" class="skeleton skeleton-rect">
					
				</view>
				<view class="sticky-box">
					
				</view>
				<view class="index-product-wrapper">
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visibleData:[{id:1, value:'1'}, {id:2, value:'2'}],
			theme: "theme1"
		}
	},
	onLoad() {
		console.log(getApp())
	},
	onPullDownRefresh() {
		console.log("下拉刷新")
	},
	onReachBottom() {
		console.log("上拉加载")
	},
	computed: {
		
	},
	mounted() {
		
	},
	methods: {
		
	}
}
</script>

<style scoped lang="scss">
	.tets {
		color: $uni-color-primary;
	}
</style>
