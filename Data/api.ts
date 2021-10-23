const baseURL = "http://192.168.1.250:3000/api/"

interface routeObjType {
  route: string,
  url: string
}

export const apiRoutes: routeObjType[] = [
  {
    route: 'loginAPI',
    url: `${baseURL}login/`
  }
]