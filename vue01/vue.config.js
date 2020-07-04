//vue.config.js
module.exports = {
    pages: {
        index: {
            entry: 'src/pages/index/top.vue',
            filename: 'index',
            chunks: ['chunk-vendors', 'chunk-common', 'index']  // 'chunk-vendors', 'chunk-common' 是公用资源文件
        },
    }
};
