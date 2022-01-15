import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-24200980","/DD.html",{},["/DD","/DD.md"]],
  ["v-8daa1a0e","/",{"title":""},["/index.html","/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
