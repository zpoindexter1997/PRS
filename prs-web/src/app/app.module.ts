import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrornotfoundComponent } from './misc/errornotfound/errornotfound.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './misc/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { BoolDisplayPipe } from './bool-display.pipe';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { RequestlineListComponent } from './requestline/requestline-list/requestline-list.component';
import { RequestlineCreateComponent } from './requestline/requestline-create/requestline-create.component';
import { RequestlineDetailComponent } from './requestline/requestline-detail/requestline-detail.component';
import { RequestlineEditComponent } from './requestline/requestline-edit/requestline-edit.component';
import { NavbaritemComponent } from './navbaritem/navbaritem.component';
import { SortPipe } from './misc/sort.pipe';
import { SearchUserPipe } from './user/search-user.pipe';
import { SearchVendorPipe } from './vendor/search-vendor.pipe';
import { SearchProductPipe } from './product/search-product.pipe';
import { AboutComponent } from './misc/about/about.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { SearchRequestPipe } from './request/search-request.pipe';
import { RequestReviewListComponent } from './request/request-review-list/request-review-list.component';
import { RequestReviewItemComponent } from './request/request-review-item/request-review-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrornotfoundComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    BoolDisplayPipe,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    VendorListComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    VendorEditComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    ProductEditComponent,
    RequestlineListComponent,
    RequestlineCreateComponent,
    RequestlineDetailComponent,
    RequestlineEditComponent,
    NavbaritemComponent,
    SortPipe,
    SearchUserPipe,
    SearchVendorPipe,
    SearchProductPipe,
    AboutComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestListComponent,
    RequestLinesComponent,
    SearchRequestPipe,
    RequestReviewListComponent,
    RequestReviewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
