import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ];

  experimentBeingEdited: string = null;
  experimentExists = false;
  experimentInvalid = false;

  constructor() { }

  ngOnInit() {
  }

add(experimentName: string,) {
    if(this.isValidexperiment(experimentName)) {
      this.experiments.push(experimentName);
    }
  }

  isValidexperiment(experimentName: string) {
  if (this.experiments.some( experiment => experiment.toLowerCase() === experimentName.toLowerCase())) {
      this.experimentExists = true;
    } else if (experimentName === '') {
      this.experimentInvalid = true;
    }
    return !(this.experimentExists || this.experimentInvalid);
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index,1);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(newExperiment: string, experiment: string) {
    if(this.isValidexperiment(newExperiment)) {
      this.experiments[this.experiments.indexOf(experiment)]=newExperiment;
      this.experimentBeingEdited = null;
    }

  }

  cancelSave(experiment: string) {
    this.experimentBeingEdited = null;
  }



}
