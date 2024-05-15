import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { ActionLog } from '../../data/models/action-log';
import { ActionType } from '../../data/enums/actionType';
import { PropertyLog } from '../../data/models/property-log';

@Component({
  selector: 'app-action-history',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './action-history.component.html',
  styleUrl: './action-history.component.css'
})
export class ActionHistoryComponent {
  @Input() actionLogs: ActionLog[]

  public actionType = ActionType;

  getPropertyLogByPropertyName(
    actionLog: ActionLog,
    propertyName: string
  ): PropertyLog | null {

    const matchingProperty = actionLog.affectedProperties.find(
      (property) => property.propertyName === propertyName
    );
    return matchingProperty || null;
  }

}