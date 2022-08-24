<template>
	<view class="productSort">
		<search ref="search" v-model="inputVal" @confirm="confirm" placeholder="点击搜索商品信息"/>
		<view class="aside" :style="`height:${asideHeight}px;bottom:0px;`">
			<scroll-view scroll-y="true" >
				<view v-for="(item, index) in category"
				:key="item.name+index"
				:class="['item', currentCateIdx === index ? 'active': '']" 
				@click="handleActive">
					<text>{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="content">
			<scroll-view scroll-y="true" :style="`height: ${asideHeight}px`">
				<view class="listw"
				v-for="(itm, idx) in lists"
				:key="itm.name"
				id="'b'+idx">
					<text>{{itm.name}}</text>
				</view>
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
			lists: []
		} 
	},
	onLoad() {
		const _this = this;
		uni.getSystemInfo({
			success(res) {
				_this.asideHeight = res.screenHeight - 54 - 50
			}
		})
	} ,
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
		handleActive() {
			
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
	}
}
</style>
