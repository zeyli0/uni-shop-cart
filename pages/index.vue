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
					<view class="swiper skeleton-rect">
						<swiper 
						class="swiper" 
						circular 
						:indicator-dots="indicatorDots" 
						:autoplay="autoplay" 
						:interval="interval"
						:duration="duration">
							<swiper-item v-for="(item, index) in swiperList" :key="item+index">
								<view class="swiper-item">
									<image :src="item" mode="aspectFill"></image>
								</view>
							</swiper-item>
						</swiper>
					</view>
					<view class="notice acea-row row-middle row-between skeleton-rect">
						<image class="pic" :src="notice" mode="aspectFill"></image>
						<view class="line">
							<text>|</text>
						</view>
						<view class="swiper-little">
							<swiper
							autoplay="true" 
							:interval="interval"
							:duration="duration"
							vertical="true">
								<swiper-item v-for="(item, index) in hotnews" :data-url="item.url" :key="item.id+index">
									<view class="line1">
										{{item.info}}
									</view>
								</swiper-item>
							</swiper>
						</view>
						<view class="iconfont" @click="$goBack(2, '/pages/news_list')">
							<text>></text>
						</view>
					</view>
					<view class="nav acea-row">
						<view 
						class="item" 
						v-for="(itm, idx) in menus" 
						:key="itm.id + idx"
						@click="$goBack(2, itm.url)">
							<view class="pictrue">
								<image class="skeleton-radius" :src="itm.pic" mode="aspectFill"></image>
							</view>	
							<view class="menu-txt skeleton-rect">
								{{itm.name}}
							</view>
						</view>
					</view>
				</view>
				<view class="coupons skeleton skeleton-rect">
					<view>
						<view class="coupont_title">
							<text class="left_con skeleton-rect">领取优惠券</text>
							<view class="item skeleton-rect">
								<text class="right_con">查看更多</text>
								<text class="iconfont icon-gengduo3 right_con">></text>
							</view>
						</view>
						<view class="conter"> 
							<scroll-view scroll-x="true" style="white-space: nowrap;vertical-align: middle;">
								<coupons-item 
								v-for="(item,index) in coupons" 
								:key="item.id"
								:item="item"
								@click.native="handleCoupons(item)"></coupons-item>
							</scroll-view>
						</view>
					</view>
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
import couponsItem from "./component/couponsItem.vue"
export default {
	components: {
		couponsItem
	},
	data() {
		return {
			visibleData:[{id:1, value:'1'}, {id:2, value:'2'}],
			theme: "theme1",
			swiperList: [],
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			notice: "/static/image/png/new_header5.png",
			newsData: {},
			coupons: []
		}
	},
	onLoad() {
		console.log(getApp())
		this.getSwiperPng() 
		this.getFrontIndex()
		this.getCoupons()
	},
	onPullDownRefresh() {
		console.log("下拉刷新")
	},
	onReachBottom() {
		console.log("上拉加载")
	},
	computed: {
		hotnews() {
			return this.newsData.roll
		},
		menus() {
			return this.newsData.menus
		}
	},
	mounted() {
		
	},
	methods: {
		handleCoupons(item) {
			item.isUse = !item.isUse;
		},
		getSwiperPng() {
			const _this = this;
			uni.request({
				url: "static/data/list.json",
				method: "GET",
				success(res) {
					if(res.statusCode === 200) {
						res.data.swiperpng.forEach(item => {
							_this.swiperList.push(`/static/image/png/${item}`)
						})
					}
				}
			})
		},
		getFrontIndex() {
			const _this = this;
			uni.request({
				url: "static/data/news.json",
				method: "GET",
				success(res) {
					if(res.statusCode === 200) {
						_this.newsData = res.data
					}
				}
			})
		},
		getCoupons() {
			const _this = this;
			uni.request({
				url: "static/data/coupons.json",
				method: "GET",
				success(res) {
					if(res.statusCode === 200) {
						_this.coupons = res.data.coupons.slice(0, 6)
					}
				}
			})
		}
	}
}
</script>

<style scoped lang="scss">
</style>
