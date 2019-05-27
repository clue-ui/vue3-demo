/**
 * photorouter option
 *
 * @author [author]
 * @since [version]
 */

export default {
  route: [
    {
      path: 'example',
      component: () => import(/* webpackChunkName: "chunk.discuss" */ './src/index')
    }, {
      path: 'example/:exampleId',
      props: true,
      component: () => import(/* webpackChunkName: "chunk.discuss" */ './src/view')
    }
  ],
  extra: {
    // todo
  }
}
