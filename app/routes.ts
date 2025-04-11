import {
  type RouteConfig,
  route,
  index,
  layout,
} from '@react-router/dev/routes'

export default [
  layout('./layout.tsx', [
    route('/', 'routes/home.tsx', [
      route('create', 'routes/create.tsx'),
      route('new-habit', 'routes/new-habit.tsx'),
      route('habit/:id', 'routes/habit-details.tsx'),
      route('profile', 'routes/profile.tsx'),
    ]),
  ]),
] satisfies RouteConfig
