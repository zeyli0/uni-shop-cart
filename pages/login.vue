<template>
	<view data-theme="theme" class="login-wrapper">
		<view class="shading">
			<image src="../static/image/gouwuche2.svg" mode=""></image>
		</view>
		<view class="whiteBg">
			<view class="list">
				<view class="item">
					<view class="acea-row row-middle">
						<image src="/static/images/phone_1.png" mode="aspectFill" style="width: 12px; height: 17px;"></image>
						<input type="text" value="" class="texts"/>
					</view>	
				</view>
				<view class="item">
					<view class="acea-row row-middle">
						<image src="/static/images/code_2.png" mode="aspectFill" style="width: 14px; height: 16px;"></image>
						<input type="text" value="" class="codeIput"/>
						<button type="default" class="code main_color">获取验证码</button>
					</view>
				</view>
			</view>
			<view class="logon bg_color">
				登录
			</view>
			<view class="tips">
				<text>账号登录</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			theme: ""
		}
	}
}
</script>

<style lang="scss" scoped>
.login-wrapper {
	padding: 15px;
	.shading {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-top: 100px;
		uni-image {
			width: 90px;
			height: 90px;
		}
	}
	.whiteBg {
		margin-top: 50px;
		.list {
			border-radius: 8px;
			overflow: hidden;
			.item {
				border-bottom: 1px solid #f0f0f0;
				background: #fff;
				.row-middle {
					position: relative;
					padding: 8px 22px;
					display: flex;
					flex-direction: row;
					align-items: center;
					.texts {
						
					}
					.code {
						position: absolute;
						right: 15px;
						top: 50%;
						color: #e93323;
						font-size: 13px;
						-webkit-transform: translateY(-50%);
						transform: translateY(-50%);
					}
					uni-input {
						flex: 1;
						font-size: 14px;
						height: 40px;
						line-height: 40px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
		.logon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 43px;
			margin-top: 40px;
			background-color: #e93323;
			border-radius: 60px;
			color: #fff;
			font-size: 15px;
		}
		.tips {
			margin: 15px;
			text-align: center;
			color: #999;
		}
	}
}
</style>
