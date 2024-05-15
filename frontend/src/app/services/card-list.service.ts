import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CardList } from '../data/models/card-list';
import { environment } from '../../environments/environment.development';

export enum ApiPaths {
  cardLists = 'cardLists',
}

@Injectable({
  providedIn: 'root'
})
export class CardListService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;

  public cardListsSubject: BehaviorSubject<CardList[]> = new BehaviorSubject<CardList[]>([]);
  public cardLists$ = this.cardListsSubject.asObservable();

  loadCardListsPaged(boardId: string, page: number, pageSize: number) {
    const params = new HttpParams()
      .set('boardId', boardId)
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    this.http.get<CardList[]>(`${this.baseUrl}/${ApiPaths.cardLists}`, { params }).subscribe(
      {
        next: (data) => {
          this.cardListsSubject.next(data);
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  createCardList(cardList: CardList) {
    this.http.post<CardList>(`${this.baseUrl}/${ApiPaths.cardLists}`,
      {
        boardId: cardList.boardId,
        name: cardList.name
      }).subscribe(
        {
          next: (data) => {
            const updatedCardLists = [...this.cardListsSubject.getValue(), data];
            this.cardListsSubject.next(updatedCardLists);
          },
          error: (error) => {
            console.log(error);
          }
        });
  }

  updateCardList(cardLists: CardList) {
    this.http.patch<void>(`${this.baseUrl}/${ApiPaths.cardLists}/${cardLists.id}`, { "name": cardLists.name }).subscribe(
      {
        next: () => {
          const updatedCardLists = this.cardListsSubject.value.map(item => {
            if (item.id === cardLists.id) {
              return { ...item, name: cardLists.name };
            }
            return item;
          });
          this.cardListsSubject.next(updatedCardLists);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

  deleteCardList(cardList: CardList) {
    return this.http.delete<void>(`${this.baseUrl}/${ApiPaths.cardLists}/${cardList.id}`).subscribe(
      {
        next: () => {
          const updatedCardLists = this.cardListsSubject.value.filter(item => item.id !== cardList.id);
          this.cardListsSubject.next(updatedCardLists);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }
}
