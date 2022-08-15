export const goBack = (index, url) => {
	if(index === 1) {
		// 关闭当前页，返回上一页面或多级页面。
		uni.navigateBack({
			delta: index,
			animationType:'pop-out',
			animationDuration:300
		})
	} else if(index === 2) {
		// 保留当前页，跳转到非tabbar页面，使用uni.navigateBack可以返回到原页面。
		uni.navigateTo({
			url:url,
			animationType:'pop-in',
			animationDuration:300
		})
	} else if(index === 3) {
		// 跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面。
		uni.switchTab({
			url:url,
			animationType: 'pop-in',
			animationDuration: 300
		})
	} else if(index === 4) {
		// 关闭所有页面，打开到应用内的某个页面。
		uni.reLaunch({
			url: url,
			animationType: 'pop-in',
			animationDuration: 300
		})
	} else if(index === 5) {
		// 关闭当前页面，跳转到应用内的某个页面。
		un.redirectTo({
			url: url
		})
	}
}

export const createVlist = (container, content, data_Source, item_Height) => {
            const dataSource = data_Source  // 数据源
            const itemHeight = item_Height  // 每一行元素高度
            const viewHeight = container.boundingClientRect(data => {
				console.log("data", data)
			}) // 视口高度（虚拟列表所展示部分高度）
            const contentHeight = itemHeight * dataSource.length // 滚动区域高度
            const itemCount = Math.ceil(viewHeight / itemHeight) // 视口元素数量
            // 设置容器元素overflow: auto （生成滚动区域，不被截取）
			// console.log(container, container.boundingClientRect(),viewHeight)
            container.setAttribute('style', `overflow:auto`)
            // 设置滚动区域高度
            content.setAttribute('style', `height:${contentHeight}px`)
            const scrollCallback = e => {
                const scrollTop = e.target.scrollTop                 // 容器元素的滚动距离
                const startIndex = Math.ceil(scrollTop / itemHeight) // 视口第一个元素所在数据源中的索引
                const endIndex = startIndex + itemCount              // 视口最后一个元素所在数据源中的索引
                // 根据startIndex endIndex找出数据源中需要展示在虚拟列表中的部分数据
                const itemList = dataSource.slice(startIndex, endIndex + 1)

                // 滚动区域高度contentHeight =  滚动区域paddingTop + 视口高度 + 滚动区域paddingBottom
                const paddingTop = startIndex * itemHeight
                const paddingBottom = contentHeight - paddingTop - itemCount * itemHeight

                // 动态调整滚动区域的paddingTop  paddingBottom 保证列表部分始终展示在视口
                content.setAttribute('style', `padding-top:${paddingTop}px;padding-bottom:${paddingBottom}px`)
                // 展示下一批次列表前删除上一批次列表数据
                content.innerHTML = ''
                // 动态调整每次滚动后对应的展示数据
                for (const val of itemList) {
                    const item = document.createElement('div')
                    item.innerHTML = val
                    item.setAttribute('style', `background-color:${val % 2 === 0 ? 'red' : 'blue'};width:100%;height:${item_Height}px`)
                    content.appendChild(item)
                }
            }
            // 添加容器元素的滚动监听
            container.addEventListener('scroll', scrollCallback)
            // 初始首屏数据
            scrollCallback({ target: container })
        }