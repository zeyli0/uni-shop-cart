<template>
	<view class="recommend">
		<zhuangshixian />
		<text class="name">{{title}}</text>
		<zhuangshixian class="lefticon"/>
	</view>
</template>

<script>
import zhuangshixian from './zhuangshixian.vue'
export default {
	props:['title'],
	components: {
		zhuangshixian
	}
}
</script>

<style lang="scss" scoped>
.recommend {
	height: 67px;
	line-height: 67px;
	font-size: 14px;
	color: #282828;
	text-align: center;
	.name {
		margin: 0 14px;
	}
	.lefticon {
		transform: rotate(180deg);
	}
}
</style>
