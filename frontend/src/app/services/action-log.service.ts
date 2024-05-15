import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { ActionLog } from '../data/models/action-log';
import { Observable } from 'rxjs';

export enum ApiPaths {
  actionLogBoard = 'actionLogs/board',
  actionLogCard = 'actionLogs/card'
}

@Injectable({
  providedIn: 'root'
})
export class ActionLogService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;

  loadBoardActionLogPaged(boardId: string, page: number, pageSize: number): Observable<ActionLog[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<ActionLog[]>(`${this.baseUrl}/${ApiPaths.actionLogBoard}/${boardId}`, { params });
  }

  loadCardActionLogPaged(cardId: string, page: number, pageSize: number): Observable<ActionLog[]> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<ActionLog[]>(`${this.baseUrl}/${ApiPaths.actionLogCard}/${cardId}`, { params });
  }
}
