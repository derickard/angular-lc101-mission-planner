import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited: object = null;
  memberExists = false;
  memberInvalid = false;
  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    if(this.isValidMember(memberName)) {
      this.crew.push({name: memberName, firstMission: isFirst});
    }
  }

  isValidMember(memberName: string) {
  if (this.crew.some( member => member['name'].toLowerCase() === memberName.toLowerCase())) {
      this.memberExists = true;
    } else if (memberName === '') {
      this.memberInvalid = true;
    }
    return !(this.memberExists || this.memberInvalid);
  }

  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index,1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
  }

  save(name: string, member: object) {
    if(this.isValidMember(name)) {
      member['name'] = name;
      this.memberBeingEdited = null;
    }

  }

  cancelSave(member: object) {
    this.memberBeingEdited = null;
  }

}
