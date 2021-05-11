import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
   colors: Color[] = [];
   currentColor:Color;
   deletedColor:Color;
  dataLoaded = false;
  constructor(private brandService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.brandService.getColors().subscribe((response) => {
      this.colors = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active";
    }
    else{
     return "list-group-item";
    }
  }

  deleteCurrentColor(){
    this.currentColor=this.deletedColor;
    }
  
    deleteCurrentColorClass(){
      if(this.currentColor==this.deletedColor){
        return "list-group-item active";
      }
      else{
        return "list-group-item";
      }
    }
}
