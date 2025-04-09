import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./layout.tsx', [
    index('routes/home.tsx'),
    route('profile', 'routes/profile.tsx'),
  ]),
  route('new-habit', 'routes/new-habit.tsx'),
  route('home/:id', 'routes/habit-details.tsx'),
] satisfies RouteConfig
