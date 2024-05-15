import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Card } from '../data/models/card';
import { Observable } from 'rxjs';

export enum ApiPaths {
  cards = 'cards',
}

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) { }

  private baseUrl = environment.baseUrl;

  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(`${this.baseUrl}/${ApiPaths.cards}`, {
      "boardId": card.boardId,
      "cardListId": card.listId,
      "name": card.name,
      "description": card.description,
      "dueTime": card.dueDate,
      "priority": card.priority
    });
  }

  updateCard(card: Card): Observable<Card> {
    return this.http.patch<Card>(`${this.baseUrl}/${ApiPaths.cards}/${card.id}`, {
      "cardListId": card.listId,
      "name": card.name,
      "description": card.description,
      "dueTime": card.dueDate,
      "priority": card.priority
    });
  }

  deleteCard(card: Card): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${ApiPaths.cards}/${card.id}`);
  }
}
