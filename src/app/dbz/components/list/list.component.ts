import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]

  @Output()
  public deletedId: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter( id: string ): void {
    //ToDo: Emitir el ID del personaje
    this.deletedId.emit(id);

  }

}
