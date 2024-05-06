import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { ContactComponent } from './page/contact/contact.component';
import { ProductsComponent } from './page/products/products.component';
import { SingleComponent } from './page/single/single.component';

export const routes: Routes = [
    { path:"", component:HomeComponent},
    { path:"products", component:ProductsComponent},
    { path:"contact", component:ContactComponent},
    { path:"products/:id", component:SingleComponent}
];
