module.exports = (api) => {
	api.cache(true)
	return {
		ignore: [
			"babel.config.js",
			"dist",
			"node_modules",
			"src/components/*.stories.js",
			"src/templates",
			"src/**/*.mdx",
			"src/stories"
		]
	}
}