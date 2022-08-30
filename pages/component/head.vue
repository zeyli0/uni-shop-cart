<template>
	<view class="header">
		<slot name="left"></slot>
		<slot name="center"></slot>
		<slot name="right"></slot>
	</view>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
	height: 48px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: var(--bg-color-yellow);
}
</style>
