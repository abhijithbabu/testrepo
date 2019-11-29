/*
 * Copyright (c) 2019. Touchcast
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production'
});