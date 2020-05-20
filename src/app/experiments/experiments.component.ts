import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];
   runOn: boolean = false;

   toConduct: string[] = [];

   constructor() { }

   ngOnInit() { }

   add(experiment: string) {
    if(!this.toConduct.includes(experiment)) {
       this.toConduct.push(experiment);
    } else {
      this.toConduct.splice(this.toConduct.indexOf(experiment),1);
    }
   }
}
