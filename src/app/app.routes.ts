import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: "explorar", pathMatch: 'full' },
    {path: 'explorar', loadComponent:()=>
        import('./explorar/explorar.component').then(c=>c.ExplorarComponent),
    },
    {path:'favoritos', loadComponent:()=>
        import('./favoritos/favoritos.component').then(c=>c.FavoritosComponent),
    },
    {path: 'series', loadComponent:()=>
        import('./series/series.component').then(c=>c.SeriesComponent),

    },
    {path: 'peliculas', loadComponent:()=>
        import('./peliculas/peliculas.component').then(c=>c.PeliculasComponent),
    }
];
