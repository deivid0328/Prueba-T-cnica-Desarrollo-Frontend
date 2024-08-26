import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'',
        loadChildren:() => import('./components/images/images.routes').then(c => c.IMAGES_ROUTES)
    }


];
