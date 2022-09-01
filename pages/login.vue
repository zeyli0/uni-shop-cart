<template>
	<view data-theme="theme" class="login-wrapper">
		<view class="shading">
			<image src="../static/image/gouwuche2.svg" mode=""></image>
		</view>
		<view class="whiteBg">
			<view class="list">
				<view class="item">
					<view class="acea-row row-middle">
						<image src="/static/image/phone_1.png" mode="aspectFill" style="width: 12px; height: 17px;"></image>
						<input type="text" v-model="phoneInput" class="texts" placeholder="输入手机号码"/>
					</view>	
				</view>
				<view class="item">
					<view class="acea-row row-middle">
						<image src="/static/image/code_2.png" mode="aspectFill" style="width: 14px; height: 16px;"></image>
						<input type="text" v-model="codeInput" class="codeIput" placeholder="填写验证码"/>
						<button 
						@click="getCode" 
						type="default" 
						class="code main_color"
						v-if="showText==true">获取验证码</button>
						<button
						@click="getCode" 
						type="default" 
						class="code main_color"
						v-else>剩余{{second}}s</button>
					</view>
				</view>
			</view>
			<view @click="submit" class="logon bg_color">登录</view>
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
			theme: "",
			phoneInput: "",
			codeInput: "",
			second: 60,
			showText:true,
			interval: null,
		}
	},
	onUnload() {
		this.interval = null;
	},
	methods: {
		validPhone() {
			const _this = this
			let regex = /^1(3[0-9]|4[01456789]|5[0-35-9]|6[2567]|7[0-8]|9[0-35-9])\d{8}$/
			return regex.test(_this.phoneInput)
		},
		getCode() {
			const _this = this;
			if(_this.validPhone()) {
				_this.sendCode().then(res => {
					if(res.data.code === 200) {
						_this.setSecond()
					} else {
						uni.showToast({
							icon: 'none',
							title: res.data.message
						})
					}
				})
			} else {
				uni.showToast({
					icon: 'none',
					title: "请输入正确的手机号码"
				})
			}
		},
		setSecond() {
			const _this = this;
			_this.showText = false
			_this.interval = setInterval(() => {
				let times = --_this.second
				_this.second = times < 10 ? '0'+ times : times
				if(times == 0) {
					clearInterval(_this.interval)
					_this.showText = true
					_this.second = 60
				}
			}, 1000)
		},
		sendCode() {
			return new Promise((resolve, reject) => {
				const _this = this;
				uni.request({
					url: "https://apif.java.crmeb.net/api/front/sendCode",
					method: "POST",
					data: {
						phone: _this.phoneInput
					},
					header:{
						'Content-Type':'application/x-www-form-urlencoded'
					},
					success(res) {
						resolve(res)
					},
					fail(error) {
						reject(error)
					}
				})
			})
		},
		submit() {
			const _this = this;
			uni.request({
				url: "https://apif.java.crmeb.net/api/front/login/mobile",
				method: "POST",
				data: {
					captcha: _this.codeInput,
					phone: _this.phoneInput
				},
				success(res) {
					console.log("res", res)
					uni.setStorageSync("token", res.data.data.token)
					let pageCur = getCurrentPages()
					uni.showToast({
						title: "登录成功",
						duration: 1000
					})
					if(pageCur[0].route !== 'pages/login') {
						uni.navigateBack()
					} else {
						uni.switchTab({
							url: "/pages/index"
						})
					}
				},
				fail(error) {
					console.log(error)
				}
			})
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
						margin-left: 10px;
					}
					uni-button::after {
					    border: 0;
					}
					uni-button[type=default] {
						background-color: #FFF;
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
