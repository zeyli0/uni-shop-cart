<script>
	export default {
		globalData:{
			test: "global test"
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import  "static/uview/index.scss";
	@import  url("./static/iconfont/iconfont.css");
	
</style>
