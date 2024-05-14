// src/app/services/board.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Board } from '../data/models/board';

export enum ApiPaths {
  boards = 'boards',
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  loadBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(`${this.baseUrl}/${ApiPaths.boards}`);
  }

  createBoard(board: Board): Observable<Board> {
    return this.http.post<Board>(`${this.baseUrl}/${ApiPaths.boards}`, board);
  }

  updateBoard(board: Board): Observable<void> {
    return this.http.patch<void>(`${this.baseUrl}/${ApiPaths.boards}/${board.id}`, board);
  }

  deleteBoard(boardId: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${ApiPaths.boards}/${boardId}`);
  }
}