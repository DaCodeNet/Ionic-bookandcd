import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'list',
    component: TabsPage,
    children: [
      {
        path: 'book',
        children: [
          {
            path: '',
            loadChildren: '../booklist/booklist.module#BookListPageModule'
          }
        ]
      },
      {
        path: 'cd',
        children: [
          {
            path: '',
            loadChildren: '../cdlist/cdlist.module#CdListPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/list/book',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/list/book',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
