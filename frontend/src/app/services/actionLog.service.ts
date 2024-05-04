import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment.development";
import { ActionLog } from "../data/models/action-log";

export enum ApiPaths {
    actionLogs = 'actionLogs',
}

@Injectable({
    providedIn: 'root'
})
export class ActionLogService {

    constructor(private http: HttpClient) { }

    private baseUrl = environment.baseUrl;

    loadActionLogPaged(page: number, pageSize: number) {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());

        return this.http.get<ActionLog[]>(`${this.baseUrl}/${ApiPaths.actionLogs}`, { params });
    }

    loadCardActionLogPaged(cardId: string, page: number, pageSize: number) {
        const params = new HttpParams()
            .set('page', page.toString())
            .set('pageSize', pageSize.toString());

        return this.http.get<ActionLog[]>(`${this.baseUrl}/${ApiPaths.actionLogs}/${cardId}`, { params });
    }
}  