import { Component, OnInit } from '@angular/core';
import { TimetableService } from 'src/app/timetable.service';

@Component({
  selector: 'app-v-timetable',
  templateUrl: './v-timetable.component.html',
  styleUrls: ['./v-timetable.component.scss']
})
export class VTimetableComponent implements OnInit {
tables:any[]=[];
  constructor(private timetableService:TimetableService) { }

  ngOnInit(): void {
  
this.tables=this. timetableService.getTable()
  }
}
