import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Board } from '../data/models/board';

export enum ApiPaths {
  boards = 'boards',
}

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;

  public boardsSubject: BehaviorSubject<Board[]> = new BehaviorSubject<Board[]>([]);
  public boards$ = this.boardsSubject.asObservable();

  public selectedBoardSubject: BehaviorSubject<Board | null> = new BehaviorSubject<Board | null>(null);
  public selectedBoard$ = this.selectedBoardSubject.asObservable();

  loadBoardsPaged(page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    this.http.get<Board[]>(`${this.baseUrl}/${ApiPaths.boards}`, { params }).subscribe(
      {
        next: (data) => {
          this.boardsSubject.next(data);
          if (data.length > 0) {
            this.selectedBoardSubject.next(data[0]);
          }
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  createBoard(board: Board) {
    this.http.post<Board>(`${this.baseUrl}/${ApiPaths.boards}`,
      {
        name: board.name
      }).subscribe(
        {
          next: (data) => {
            const updatedBoards = [...this.boardsSubject.getValue(), data];
            this.boardsSubject.next(updatedBoards);
          },
          error: (error) => {
            console.log(error);
          }
        });
  }

  updateBoard(board: Board) {
    this.http.patch<void>(`${this.baseUrl}/${ApiPaths.boards}/${board.id}`, { "name": board.name }).subscribe(
      {
        next: () => {
          const updatedBoards = this.boardsSubject.value.map(item => {
            if (item.id === board.id) {
              return { ...item, name: board.name };
            }
            return item;
          });
          this.boardsSubject.next(updatedBoards);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  deleteBoard(board: Board) {
    return this.http.delete<void>(`${this.baseUrl}/${ApiPaths.boards}/${board.id}`).subscribe(
      {
        next: () => {
          const updatedBoards = this.boardsSubject.value.filter(item => item.id !== board.id);
          this.boardsSubject.next(updatedBoards);
          if (this.selectedBoardSubject.value?.id === board.id) {
            this.selectedBoardSubject.next(null);
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}