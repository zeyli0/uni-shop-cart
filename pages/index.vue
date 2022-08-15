<template>
	<view class="wrapper">
		<view class="iconfont icon-icon-test" style="font-size: 100px;"></view>
		<view ref="list"  class="container" style="width: 100%;height: 80vh;">
			<!-- <view class="list-tom" :style="{height: listHeight+'px'}"></view> -->
			<view  
			v-for="(item,index) in visibleData" 
			class='list-item' 
			:key='item.id'>
			{{item.value}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			visibleData:[{id:1, value:'1'}, {id:2, value:'2'}],
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

<style>
	
</style>
