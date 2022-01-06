import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {TabsPageModule} from "./navigation/tabs.module";
import {TabsPage} from "./navigation/tabs.page";
import {HomePage} from "./pages/home/home.page";
import {ProfilePage} from "./pages/profile/profile.page";

const routes: Routes = [
  {
    path: '',
    // loadChildren: () => import('./navigation/tabs.module').then(m => m.TabsPageModule)
    component: LoginComponent
  },
  { path: 'navigation',
  loadChildren: () => import('./navigation/tabs.module').then(m => m.TabsPageModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

// const routes: Routes = [
//   {path: '' , component: LoginComponent},
//   {
//     path: 'navigation',
//     component: TabsPage,
//     children: [
//       {
//         path: 'home',
//         component: HomePage,
//       },
//       {
//         path: 'profile',
//         component: ProfilePage
//       },
//       {
//         path: '',
//         redirectTo: '/navigation/home',
//         pathMatch: 'full'
//       }
//     ]
//   }
// ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}
