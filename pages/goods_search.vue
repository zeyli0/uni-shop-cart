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
		</view>
	</view>
</template>

<script>
import search from "./component/search.vue"
import recommend from './component/recommendTitle.vue'
export default {
	data () {
		return {
			theme: "",
			searchVal: "",
			title: "热门搜索",
			keyword: []
		}
	},
	components:{
		search,
		recommend 
	},
	created() {
		this.getHotList()
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
		}
	}
}
</script>

<style>
</style>
