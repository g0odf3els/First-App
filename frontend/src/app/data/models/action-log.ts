import { ActionType } from "../enums/actionType";
import { PropertyLog } from "./property-log";

export interface ActionLog {
    id: string,
    boardId: string,
    entityId: string,
    entityName: string,
    entityType: string,
    action: ActionType,
    creationTime: Date,
    affectedProperties: PropertyLog[]
}