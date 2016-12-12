
# Yarn + webpack + TSX(TypeScript + JSX) + local npm cache server (lazy_npm) project example

## Run lazy_npm with docker-compose.

http://localhost:18888 will be the npm cache root.

```
$ docker-compose up
```

## Get JS dependencies with yarn.


```
$ yarn install
```

## Build `src/**` with webpack.

```
$ yarn run webpack
```

Or if you would like to launch it up with `webpack-dev-server` instead;

```
$ yarn run webpack-dev-server -- --content-base public --port 8080 --hot --inline
```

## License

MIT License.
