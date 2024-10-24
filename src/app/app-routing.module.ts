import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './profile/blog.component';
import { CareersComponent } from './student/careers.component';
import { Contact2Component } from './contact2/contact2.component';
import { ContactComponent } from './contact/contact.component';
import { FaqComponent } from './faq/faq.component';
import { OfferComponent } from './staf/offer.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:'home',
  },
  {
    component:AboutComponent,
    path:'about',
},
{
  component:BlogComponent,
  path:'blog'
},
{
  component:CareersComponent,
  path:'careers'
},
{
  component:ContactComponent,
  path:'contant'

},
{
  component:Contact2Component,
  path:'contact2'
},
{
  component:FaqComponent,
  path:'faq'
},
{
  component:OfferComponent,
  path:'offer'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
