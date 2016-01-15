import babel from 'rollup-plugin-babel';
import npm from 'rollup-plugin-npm';
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
    plugins: [ babel(babelOptions), npm({ jsnext: true }), commonjs() ],
    moduleName: 'dekuRedux',
    moduleId: 'dekuRedux',
    dest: 'dist/umd/dekuRedux.js'
};
