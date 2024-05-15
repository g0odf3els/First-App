using Domain.Entities;
using Infrastructure.Data.Context;
using System;
using System.Linq;

namespace Infrastructure.Data
{
    public static class DbInitializer
    {
        public static void Initialize(AppDbContext context)
        {
            if (context.Boards.Any())
            {
                return;
            }

            var personalBoard = new Board()
            {
                Id = Guid.NewGuid(),
                Name = "Personal"
            };

            var workBoard = new Board()
            {
                Id = Guid.NewGuid(),
                Name = "Work"
            };

            var personalToDoList = new CardList()
            {
                Id = Guid.NewGuid(),
                Name = "To Do",
                Board = personalBoard,
                BoardId = personalBoard.Id,
            };

            var personalInProgressList = new CardList()
            {
                Id = Guid.NewGuid(),
                Name = "In Progress",
                Board = personalBoard,
                BoardId = personalBoard.Id,
            };

            var personalShoppingList = new CardList()
            {
                Id = Guid.NewGuid(),
                Name = "Shopping List",
                Board = personalBoard,
                BoardId = personalBoard.Id,
            };

            var personalToDoListCards = new List<Card>()
            {
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = personalToDoList.Id,
                    List = personalToDoList,
                    BoardId = personalToDoList.BoardId,
                    Board = personalToDoList.Board,
                    Name = "Buy groceries",
                    Description = "Milk, bread, eggs, vegetables",
                    DueDate = DateTime.Now.AddDays(2)
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = personalToDoList.Id,
                    List = personalToDoList,
                    BoardId = personalToDoList.BoardId,
                    Board = personalToDoList.Board,
                    Name = "Pay bills",
                    Description = "Electricity, internet, phone",
                    DueDate = DateTime.Now.AddDays(7)
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = personalToDoList.Id,
                    List = personalToDoList,
                    BoardId = personalToDoList.BoardId,
                    Board = personalToDoList.Board,
                    Name = "Call mom",
                    Description = "Catch up and wish her happy birthday",
                    DueDate = DateTime.Now.AddDays(1)
                }
            };
            var personalShoppingListCards = new List<Card>()
            {
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = personalShoppingList.Id,
                    List = personalShoppingList,
                    BoardId = personalShoppingList.BoardId,
                    Board = personalShoppingList.Board,
                    Name = "Apples",
                    Description = "2 kg",
                    DueDate = DateTime.Now
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = personalShoppingList.Id,
                    List = personalShoppingList,
                    BoardId = personalShoppingList.BoardId,
                    Board = personalShoppingList.Board,
                    Name = "Cheese",
                    Description = "Cheddar cheese, sliced",
                    DueDate = DateTime.Now
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = personalShoppingList.Id,
                    List = personalShoppingList,
                    BoardId = personalShoppingList.BoardId,
                    Board = personalShoppingList.Board,
                    Name = "Bread",
                    Description = "Whole wheat bread",
                    DueDate = DateTime.Now.AddDays(2)
                }
            };

            var workToDoList = new CardList()
            {
                Id = Guid.NewGuid(),
                Name = "To Do",
                Board = workBoard,
                BoardId = workBoard.Id,
            };

            var workInProgressList = new CardList()
            {
                Id = Guid.NewGuid(),
                Name = "In Progress",
                Board = workBoard,
                BoardId = workBoard.Id,
            };
            var workToDoListCards = new List<Card>()
            {
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = workToDoList.Id,
                    List = workToDoList,
                    BoardId = workToDoList.BoardId,
                    Board = workToDoList.Board,
                    Name = "Finish marketing report",
                    Description = "Gather data, analyze results, and create presentation",
                    DueDate = DateTime.Now.AddDays(3)
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = workToDoList.Id,
                    List = workToDoList,
                    BoardId = workToDoList.BoardId,
                    Board = workToDoList.Board,
                    Name = "Prepare for client meeting",
                    Description = "Review agenda, gather materials, and prepare talking points",
                    DueDate = DateTime.Now.AddDays(1)
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = workToDoList.Id,
                    List = workToDoList,
                    BoardId = workToDoList.BoardId,
                    Board = workToDoList.Board,
                    Name = "Resolve bug in code",
                    Description = "Identify issue, investigate cause, and implement fix",
                    DueDate = DateTime.Now.AddDays(5)
                }
            };
            var workInProgressListCards = new List<Card>()
            {
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = workInProgressList.Id,
                    List = workInProgressList,
                    BoardId = workInProgressList.BoardId,
                    Board = workInProgressList.Board,
                    Name = "Designing new website",
                    Description = "Creating wireframes and mockups",
                    DueDate = DateTime.Now.AddDays(10)
                },
                new Card()
                {
                    Id = Guid.NewGuid(),
                    ListId = workInProgressList.Id,
                    List = workInProgressList,
                    BoardId = workInProgressList.BoardId,
                    Board = workInProgressList.Board,
                    Name = "Writing blog post",
                    Description = "Researching topic, outlining content, and drafting text",
                    DueDate = DateTime.Now.AddDays(2)
                }
            };

            context.Boards.AddRange(new[] { personalBoard, workBoard });
            context.CardLists.AddRange(new[] { personalToDoList, personalInProgressList, personalShoppingList, workToDoList, workInProgressList });
            context.Cards.AddRange(personalToDoListCards.Concat(personalShoppingListCards).Concat(workToDoListCards).Concat(workInProgressListCards));

            context.SaveChanges();
        }
    }
}