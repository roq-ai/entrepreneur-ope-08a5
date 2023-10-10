const mapping: Record<string, string> = {
  'accountability-scorecards': 'accountability_scorecard',
  businesses: 'business',
  'business-improvements': 'business_improvement',
  'regular-meetings': 'regular_meetings',
  users: 'user',
  'user-performances': 'user_performance',
  'vision-strategies': 'vision_strategy',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
