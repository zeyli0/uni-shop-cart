<template>
	<view class="searchGood">
		<view class="search">
			<view class="input">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" 
				:value="value" 
				@input="input" 
				@confirm="confirm"
				:placeholder="defualtHolder"/>
			</view>
			<view v-if="hasBtn" class="bnt" @click="search">搜索</view>	
		</view>
		<view v-if="title" class="title">{{title}}</view>
		<view v-if="hasKeyword" class="list acea-row">
			<view class="item" 
			v-for="(item, index) in keyword" 
			:key="item.id+index"
			@click="tagClick(item)">
				{{item.title}}
			</view>
		</view>
		<view class="line"></view>
	</view>
</template>

<script>
export default {
	props: ['value','keyword','title','searchBtn','placeholder'],
	computed: {
		hasKeyword() {
			if(!this.keyword) {
				return false
			}
			return true
		},
		hasBtn() {
			if(!this.searchBtn) {
				return false
			}
			return true
		},
		defualtHolder() {
			if(this.placeholder) {
				return this.placeholder
			}
			return '点击搜索商品'
		}
	},
	methods: {
		confirm(e) {
			this.$emit("confirm", e.target.value)
		},
		input(e) {
			this.$emit("input", e.target.value)
		},
		search() {
			this.$emit("search", this.value)
		},
		tagClick(item) {
			this.$emit("tagClick", item)
		}
	}
}
</script>

<style lang="scss" scoped>
.searchGood {
	.search {
		padding-top: 10px;
		padding-left: 15px;
		padding-right: 15px;
		background-color: #fff!important;
		display: flex;
		flex-direction: row;
		.input {
			width: 100%;
			background-color: #f7f7f7;
			border-radius: 16px;
			padding: 0 17px;
			box-sizing: border-box;
			height: 33px;
			display: flex;
			align-items: center;
			.iconfont {
				color: #000;
				font-size: 17px;
			}
			uni-input {
				width: calc(100% - 17px);
				font-size: 13px;
				text-indent: 8px;;
			}
		}
		.bnt {
			width: 60px;
			text-align: center;
			height: 33px;
			line-height: 33px;
			font-size: 15px;
			color: #282828;
		}
	}
	.acea-row.row-between-wrapper {
		-webkit-box-align: center;
		-moz-box-align: center;
		-o-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		-webkit-box-pack: justify;
		-moz-box-pack: justify;
		-o-box-pack: justify;
		-ms-flex-pack: justify;
		-webkit-justify-content: space-between;
		justify-content: space-between;
	}
	.acea-row {
		display: -webkit-box;
		display: -moz-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-lines: multiple;
		-moz-box-lines: multiple;
		-o-box-lines: multiple;
		-webkit-flex-wrap: wrap;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
	}
	.title {
		font-size: 14px;
		color: #999;
		margin: 25px 15px 12px 15px;
	}
	.list {
		padding-left: 5px;
		.item {
			font-size: 13px;
			color: #454545;
			padding: 0 10px;
			height: 30px;
			border-radius: 15px;
			line-height: 30px;
			border: 0.5px solid #aaa;
			margin: 0 0 10px 10px;
		}
	}
	.line {
		border-bottom: 0.5px solid #eee;
		margin: 10px 15px 0 15px;
	}
}
</style>
