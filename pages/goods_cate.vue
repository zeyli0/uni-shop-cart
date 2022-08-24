<template>
	<view class="productSort">
		<search ref="search" v-model="inputVal" @confirm="confirm" placeholder="点击搜索商品信息"/>
		<view class="aside" :style="`height:${asideHeight}px;bottom:0px;`">
			<scroll-view scroll-y="true">
				<view v-for="(item, index) in category"
				:key="item.name+index"
				:class="['item', currentCateIdx === index ? 'active': '']" 
				@click="handleActive(index)">
					<text>{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="content">
			<view class="box"></view>
			<scroll-view scroll-y="true" 
			:scroll-into-view="toView"
			scroll-with-animation="true"
			:style="`height: ${asideHeight}px`">
				<view class="listw"
				v-for="(itm, idx) in category"
				:key="itm.name"
				:id="'b'+idx">
					<view class="title">
						<view class="line"></view>
						<view class="name">
							{{itm.name}}
						</view>
						<view class="line"></view>
					</view>
					<view class="list">
						<navigator v-for="(x, i) in itm.child"
						:key="x.id"
						url="navigate/navigate" 
						class="item">
							<view class="picture skeleton-rect"
							style="background-color: rgb(247, 247, 247)">
								<image :src="x.extra" mode="aspectFill"></image>
							</view>
							<view class="name line1">
								{{x.name}}
							</view>
						</navigator>
					</view>
				</view>
				<view style="height: 418px;"></view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import search from "./component/search.vue"
export default {
	data() {
		return {
			inputVal: "",
			asideHeight: 0,
			currentCateIdx: 0,
			category: [],
			toView: "",
			animation: null,
			animationData: {}
		} 
	},
	onLoad() {
		const _this = this;
		uni.getSystemInfo({
			success(res) {
				_this.asideHeight = res.screenHeight - 54 - 50
			}
		})
	},
	onShow() {
		this.animation = uni.createAnimation({
			duration:1000,
			timingFunction:'ease'
		})
	},
	mounted() {
		this.getCategory()
		const query = uni.createSelectorQuery().in(this)
		query.select(this.$refs.search).boundingClientRect(data => {
			console.log("------------",data, this.asideHeight)
		})
	},
	components: {
		search
	},
	computed: {
		
	},
	methods: {
		handleActive(index) {
			this.currentCateIdx = index
			this.toView = 'b' + index
			console.log(this.toView)
		},
		rotateAndScal() {
			this.animation.rotate(45).scale(2, 2).step()
			this.animationData = this.animation.export()
		},
		confirm(e) {
			if(!e) {
				uni.showToast({
					icon: 'none',
					title: "请填写要搜索的产品信息"
				})
				return 
			}
		},
		getCategory() {
			const _this = this;
			uni.request({
				url: 'https://apif.java.crmeb.net/api/front/category',
				method: 'GET',
				success(res) {
					_this.category = res.data.data
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.productSort {
	.aside {
		position: fixed;
		width: 90px;
		left: 0;
		top: 0;
		background-color: #f7f7f7;
		overflow-y: scroll;
		overflow-x: hidden;
		height: auto;
		margin-top: 54px;
		.item {
			height: 50px;
			width: 100%;
			font-size: 13px;
			color: #424242;
			position: relative;
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			text-indent: 8px;
			&.active {
				background-color: #fff;
				width: 100%;
				text-align: center;
				color: var(--bg-color-red)!important;
				font-weight: 700;
				&::before {
					content: "";
					width: 2px;
					height: 50px;
					position: absolute;
					left: 0;
					top: 0;
					background-color: var(--bg-color-red)!important;
				}
			}
		}
	}
	.content {
		margin-left: 90px;
		padding: 0 7px;
		background-color: #fff;
		.listw {
			padding-top: 10px;
			.title {
				height: 45px;
				display: flex;
				align-items: center;
				justify-content: center;
				.line {
					width: 50px;
					height: 1px;
					background-color: #f0f0f0;
				}
				.name {
					font-size: 14px;
					color: #333;
					margin: 0 15px;
					font-weight: 700;
				}
			}
			.list {
				display: flex;
				flex-wrap: wrap;
				.item {
					width: 88px;
					margin-top: 13px;
					display: flex;
					flex-direction: column;
					align-items: center;
					.picture {
						width: 60px;
						height: 60px;
						border-radius: 50%;
						uni-image {
							width: 100%;
							height: 100%;
							border-radius: 50%;
						}
					}
					.name {
						font-size: 12px;
						color: #333;
						height: 28px;
						line-height: 28px;
						width: 60px;
						text-align: center;
					}
				}
			}
		}
	}
}
</style>
