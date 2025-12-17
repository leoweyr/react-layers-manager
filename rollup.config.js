import typescript from "@rollup/plugin-typescript";
import babel from 'rollup-plugin-babel';


export default ['cjs', 'es'].map(format => (
    {
        input: './src/index.ts',
        output: {
            file: `./lib/index.${format}.js`,
            format
        },
        plugins: [
            typescript(
                {
                    declaration: true,
                    declarationDir: './lib',
                    rootDir: './src'
                }
            ),
            babel(
                {
                    exclude: 'node_modules/**'
                }
            )
        ],
        external: ['react', 'react-dom']
    }
));
