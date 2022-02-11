import {Component} from '@angular/core';
import {NAE_VIEW_ID_SEGMENT, ViewIdService} from '@netgrif/application-engine';

@Component({
  selector: 'app-empty-view',
  templateUrl: './empty-view.component.html',
  styleUrls: ['./empty-view.component.scss'],
  providers: [
    {
      provide: NAE_VIEW_ID_SEGMENT,
      useValue: 'emptyView'
    },
    ViewIdService,
  ]
})
export class EmptyViewComponent {

  constructor() {
  }

}
