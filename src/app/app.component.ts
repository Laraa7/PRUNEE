import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'home', url: '/home', icon: 'home' },
    { title: 'Zapatos', url: '/zapatos', icon: 'arrow-forward' },
    { title: 'Carteras', url: '/carteras', icon: 'arrow-forward' },
    
    { title: 'Accesorios', url: '/accesorios', icon: 'arrow-forward' },
    { title: 'Contactanos', url: '/contactanos', icon: 'person' },
  ];
  
  constructor() {}
}
