import { PreloadAllModules, PreloadingStrategy, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { AppLayoutComponent } from "./layout/app.layout.component";
import { FormGroup } from '@angular/forms';
import { CustomPreloadingStrategyService } from './custom-preloading-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: AppLayoutComponent,
                children: [

                    { path: '', loadChildren: () => import('./demo/components/dashboard/dashboard.module').then(m => m.DashboardModule),data: {preload: true, loadAfterSeconds: 5 }},
                    { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule),data: {preload: true, loadAfterSeconds: 10 }},
                    { path: 'school', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule) ,data: {preload: true, loadAfterSeconds: 20 }},
                ]
            },
           
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule),data: {preload: true, loadAfterSeconds: 5 }},
            { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            { path: 'notfound', component: NotfoundComponent },
            { path: '**', redirectTo: '/notfound' },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload',preloadingStrategy:CustomPreloadingStrategyService  })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}