<template>
	<view data-theme="theme">
		<search 
		v-model="searchVal" 
		:keyword="keyword"
		:title="title"
		@tagClick="tagClick" 
		@search="search" />
		<view class="noCommodity">
			<recommend title="热门推荐"/>
			<view class="recommendList">
				<card
				class="item"
				v-for="(item, index) in productList" 
				:key="index"
				:item="item"
				:theme="1"/>
			</view>
		</view>
	</view>
</template>

<script>
import search from "./component/search.vue"
import recommend from './component/recommendTitle.vue'
import card from './component/card.vue'
export default {
	data () {
		return {
			theme: "",
			searchVal: "",
			title: "热门搜索",
			keyword: [],
			productList: []
		}
	},
	components:{
		search,
		recommend,
		card
	},
	created() {
		this.getHotList()
		this.getHotProduct()
	},
	methods:{
		search() {
			console.log(this.searchVal)
		},
		tagClick(e) {
			console.log(e)
		},
		getHotList() {
			const _this = this;
			uni.request({
				url:"static/data/hot.json",
				method:"GET",
				success(res) {
					if(res.statusCode === 200) {
						_this.keyword = res.data.keyword
					}
				}
			})
		},
		getHotProduct() {
			const url = "https://apif.java.crmeb.net/api/front/product/hot?page=1&limit=8"
			const _this = this;
			uni.request({
				url: url,
				method:"GET",
				success(res) {
					if(res.statusCode === 200) {
						_this.productList = res.data.data.list
						_this.productList.map(item => {
							item.img = item.image
							item.text = item.storeName
							item.price = item.price
						})
					}
				}
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.noCommodity {
	.recommendList {
		padding: 0 15px;
		padding-bottom: 25px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		.item {
			width: 167px;
			margin-bottom: 15px;
		}
	}
}
</style>
