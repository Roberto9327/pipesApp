import { Component, OnInit } from '@angular/core';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  providers: [MessageService]
})
export class MenuComponent  implements OnInit{
  public Items: MenuItem[] | undefined = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
      this.Items = [
          {
              label: 'Pipes de Angular',
              icon: 'pi pi-desktop',
              items: [
                  {
                      label: 'Basics',
                      icon: 'pi pi-align-left',
                      routerLink: '/'
                  },
                  {
                      label: 'Números',
                      icon: 'pi pi-dollar',
                      routerLink: '/numbers'
                  },
                  {
                      label: 'UnCommon',
                      icon: 'pi pi-globe',
                      routerLink: '/uncommon'
                  }
              ]
          },
          {
            label: 'Pipes Personalizados',
            icon: 'pi pi-cog',
            items: [
              {
              label: 'Otro elemento',
              icon:  'pi pi-cog',
              }
            ]
          }
      ];
  }

  update() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data Updated' });
  }

  delete() {
      this.messageService.add({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
  }
}
