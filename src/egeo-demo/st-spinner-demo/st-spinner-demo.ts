/*
 * © 2017 Stratio Big Data Inc., Sucursal en España.
 *
 * This software is licensed under the Apache License, Version 2.0.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the terms of the License for more details.
 *
 * SPDX-License-Identifier: Apache-2.0.
 */
import { Component } from '@angular/core';

@Component({
   selector: 'st-spinner-demo',
   templateUrl: 'st-spinner-demo.html',
   styleUrls: ['./st-spinner-demo.component.scss']
})
export class StSpinnerDemoComponent {
   public configDoc: any = {
      html: 'demo/st-spinner-demo/st-spinner-demo.html',
      ts: 'demo/st-spinner-demo/st-spinner-demo.ts',
      component: 'lib/st-spinner/st-spinner.component.ts'
   };
   public size = 50;
}
