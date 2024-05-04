import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Card } from '../data/models/card';
import { CardList } from '../data/models/card-list';
import { Priority } from '../data/enums/priority';
import { environment } from '../../environments/environment.development';

export enum ApiPaths {
  cards = 'cards',
  cardLists = 'cardLists',
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;
  cardLists: CardList[];

  private cardUpdateCreateSource = new Subject<Card>();
  private cardListsUpdatedSource = new Subject<void>();
  private cardCreateSource = new Subject<Card>();
  private cardSelectSource = new Subject<Card>();
  private errorSource = new Subject<string>();

  cardListsUpdated$ = this.cardListsUpdatedSource.asObservable();
  cardCreated$ = this.cardCreateSource.asObservable();
  cardUpdated$ = this.cardUpdateCreateSource.asObservable();
  cardSelected$ = this.cardSelectSource.asObservable();
  error = this.errorSource.asObservable();

  loadCardListsPaged(page: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    this.http.get<CardList[]>(`${this.baseUrl}/${ApiPaths.cardLists}`, { params }).subscribe(
      {
        next: (data) => {
          this.cardLists = data;
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      }
    );
  }

  createCardList(name: string) {
    this.http.post<CardList>(`${this.baseUrl}/${ApiPaths.cardLists}`, { "name": name }).subscribe(
      {
        next: () => {
          this.cardListsUpdatedSource.next();
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      });
  }


  updateCardList(id: string, name: string) {
    this.http.patch<void>(`${this.baseUrl}/${ApiPaths.cardLists}/${id}`, { "name": name }).subscribe(
      {
        next: () => {
          this.cardListsUpdatedSource.next();
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      });
  }

  deleteCardList(id: string) {
    return this.http.delete<void>(`${this.baseUrl}/${ApiPaths.cardLists}/${id}`).subscribe(
      {
        next: () => {
          this.cardListsUpdatedSource.next();
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      });
  }

  createCard(request: Card) {
    this.http.post<Card>(`${this.baseUrl}/${ApiPaths.cards}`, {
      "cardListId": request.listId,
      "name": request.name,
      "description": request.description,
      "dueTime": request.dueDate,
      "priority": request.priority
    }).subscribe(
      {
        next: () => {
          this.cardListsUpdatedSource.next();
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      });
  }

  updateCard(request: Card) {
    this.http.patch<Card>(`${this.baseUrl}/${ApiPaths.cards}/${request.id}`, {
      "cardListId": request.listId,
      "name": request.name,
      "description": request.description,
      "dueTime": request.dueDate,
      "priority": request.priority
    }).subscribe(
      {
        next: () => {
          this.cardListsUpdatedSource.next();
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      });
  }

  deleteCard(id: string) {
    return this.http.delete<void>(`${this.baseUrl}/${ApiPaths.cards}/${id}`).subscribe(
      {
        next: () => {
          this.cardListsUpdatedSource.next();
        },
        error: (error) => {
          this.errorSource.next(error);
          console.log(error);
        }
      });
  }

  openNewCardModal(selectedListId: string) {
    const newCard: Card = {
      listId: selectedListId,
      id: '',
      name: 'New Card',
      description: '',
      dueDate: new Date(),
      priority: Priority.Low,
    };

    this.cardCreateSource.next(newCard);
  }

  openEditCardModal(card: Card) {
    this.cardCreateSource.next(card);
  }

  openCardModal(card: Card) {
    this.cardSelectSource.next(card);
  }
}

