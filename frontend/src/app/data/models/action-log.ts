import { ActionType } from "../enums/actionType";
import { PropertyLog } from "./property-log";

export interface ActionLog {
    entityId: string,
    entityType: string,
    entityName: string,
    action: ActionType,
    newValue: string,
    timestamp: string,
    affectedProperties: PropertyLog[]
}