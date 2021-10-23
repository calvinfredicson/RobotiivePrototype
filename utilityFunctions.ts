import { apiRoutes } from "./Data/api"

export function delay(time: number) {
  return new Promise<void>(resolve => setTimeout(resolve, time * 1000))
}

export function generateRoute(baseUrl: string, targetUrl: string) {
  return `${baseUrl}/${targetUrl}`
}

interface responseType {
  permission: boolean
}

export async function postAPI(url: string, bodyContent: Record<string, string>) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyContent)
  })
  const result: responseType = await response.json()
  return result
}

export async function getAPI(url: string) {
  const response = await fetch(url)
  const result: responseType = await response.json()
  return result
}


export function getAPIRoute(route: string) {
  const routeObj = apiRoutes.find(el => el.route == route)
  if (routeObj) {
    return routeObj.url
  }
}