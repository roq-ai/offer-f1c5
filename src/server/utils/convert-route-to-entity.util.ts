const mapping: Record<string, string> = {
  users: 'user',
  vendors: 'vendor',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
