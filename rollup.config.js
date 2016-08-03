import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

const babelOptions = {
    presets: [ 'es2015-rollup' ],
    plugins: [
        'transform-object-rest-spread',
        'transform-export-extensions'
    ],
    babelrc: false
};

export default {
    entry: 'modules/index.js',
    format: 'umd',
    plugins: [ commonjs(), nodeResolve(), babel(babelOptions) ],
    moduleName: 'dekuRedux',
    moduleId: 'dekuRedux',
    dest: 'dist/umd/dekuRedux.js'
};
