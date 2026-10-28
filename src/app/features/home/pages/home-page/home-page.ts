import { Component, inject, afterNextRender } from '@angular/core';
import { FlowbiteService } from '../../../../core/services/flowbite.service';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  private readonly flowbite = inject(FlowbiteService);

  constructor() {
    afterNextRender(() => {
      this.flowbite.loadFlowbite((flowbite) => {
        flowbite.initFlowbite();
      });
    });
  }
}
