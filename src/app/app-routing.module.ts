import {NgModule} from "@angular/core"
import {Routes,RouterModule} from "@angular/router"
// import { AppComponent } from './app.component';
import { NewsCompoent } from './Component/Blocks/TinTuc/tintuc.component';
import { IntroComponent } from './Component/Blocks/GioiThieu/gioithieu.component';


const routerConfig:Routes=[
    {path:'tintuc',component:NewsCompoent},
    {path:'gioithieu',component:IntroComponent}
];
@NgModule({
    declarations:[
        NewsCompoent,
        IntroComponent
    ],
    imports:[
        RouterModule.forRoot(routerConfig)
    ],
    exports:[RouterModule]
})
export class AppRoutingModule{

}