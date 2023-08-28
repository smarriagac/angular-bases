import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {


  @Output()
  public onDelete = new EventEmitter<string>();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10,
  }]

  onDeleteCharacter(id?: string):void {

    if(!id) return;
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(id);
  }
}
