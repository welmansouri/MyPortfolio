import { Component ,Input,Output,EventEmitter} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-popup',
  imports: [MatIconModule,CommonModule,MatButtonModule,MatCardModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
    @Input() title:string="";
    @Input() icon:string="";
    @Input() text:string="";
    @Input() type:string="";
    @Input() subTitle:string="";
    @Input() isOpen: boolean = false;
    @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter(false);



    toggleModal(){
      this.isOpen = !this.isOpen
      this.isOpenChange.emit(this.isOpen);
    }


   

}
