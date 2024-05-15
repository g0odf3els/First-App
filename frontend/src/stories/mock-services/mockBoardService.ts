import { Observable, of } from "rxjs";
import { Board } from "../../app/data/models/board";

export class mockBoardService {


    loadBoards(): Observable<Board[]> {
        const boards: Board[] = [
            {
                "id": "edee4bf4-617c-4e54-8183-24bfbb22dd34",
                "name": "Personal"
            },
            {
                "id": "ddf0b6a8-66b8-420b-96c8-9fa67ca3d31f",
                "name": "Personal"
            },
            {
                "id": "18cf93b9-5912-4a4f-92a2-182ad0251874",
                "name": "Miscellaneous"
            }
        ];

        return of(boards);
    }

    createBoard(board: Board) {
    }

    updateBoard(board: Board) {
    }

    deleteBoard(boardId: string) {
    }
}