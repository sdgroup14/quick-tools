import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    // соответствует вашему client-route 'blog/:slug'
    path: 'blog',
    renderMode: RenderMode.Server,
  },
   {
    // соответствует вашему client-route 'blog/:slug'
    path: 'blog/:slug',
    renderMode: RenderMode.Server,
  },

  {
    path: '**',
    renderMode: RenderMode.Prerender
  },


];
