<template>
	<view class="productSort">
		<search ref="search" v-model="inputVal" @confirm="confirm" placeholder="点击搜索商品信息"/>
		<view class="aside" :style="`height:${asideHeight}px;bottom:0px;`">
			<scroll-view scroll-y="true" >
				<view class="category" 
				v-for="(item, index) in category"
				:key="item.name+index">
					<text>{{item.name}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="conter">
			<scroll-view scroll-y="true" :style="`height: ${asideHeight}px;margin-top: 54px;`">
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
	}
	.conter {
		margin: 48px 0 0 90px;
		padding: 0 7px;
		background-color: #fff;
	}
}
</style>
