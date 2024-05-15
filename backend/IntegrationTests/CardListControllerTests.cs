using Application.DTOs;
using Application.Features.CardLists.Commands.CreateCardListCommand;
using Application.Features.CardLists.Commands.UpdateCardList;
using Domain.Entities;
using Infrastructure.Data.Context;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http.Json;

namespace IntegrationTests
{
    [TestClass]
    public class CardListControllerTests
    {
        private readonly HttpClient _client;
        private readonly CustomWebApplicationFactory<Program> _factory;
        private readonly IServiceScopeFactory _scopeFactory;

        private List<Board> testBoards;
        private List<CardList> testCardLists;

        public CardListControllerTests()
        {
            _factory = new CustomWebApplicationFactory<Program>();
            _client = _factory.CreateClient();
            _scopeFactory = _factory.Services.GetRequiredService<IServiceScopeFactory>();
        }

        [TestInitialize]
        public async Task Initialize()
        {
            using (var scope = _scopeFactory.CreateScope())
            {
                var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();

                dbContext.Database.EnsureDeleted();
                dbContext.Database.EnsureCreated();

                testBoards = new List<Board>()
                {
                    new Board { Id = Guid.NewGuid(), Name = "Test Board 1" },
                    new Board { Id = Guid.NewGuid(), Name = "Test Board 2" }
                };

                testCardLists = new List<CardList>()
                {
                    new CardList {
                        Id = Guid.NewGuid(),
                        Board = testBoards[0],
                        BoardId = testBoards[0].Id,
                        Name = "Card List 1"
                    },
                    new CardList {
                        Id = Guid.NewGuid(),
                        Board = testBoards[0],
                        BoardId = testBoards[0].Id,
                        Name = "Card List 2"
                    }
                };

                testBoards[0].CardLists.Add(testCardLists[0]);
                testBoards[0].CardLists.Add(testCardLists[1]);

                await dbContext.AddRangeAsync(testBoards);

                await dbContext.SaveChangesAsync();
            }
        }

        [TestMethod]
        public async Task GetCardListPagedAsync()
        {
            var uriBuilder = new UriBuilder(_client.BaseAddress);

            uriBuilder.Path = "/cardLists";

            var queryParams = new List<KeyValuePair<string, string>>
            {
                new KeyValuePair<string, string>("boardId", testBoards[0].Id.ToString()),
            };

            uriBuilder.Query = new FormUrlEncodedContent(queryParams).ReadAsStringAsync().Result;

            var requestUri = uriBuilder.Uri;

            var response = await _client.GetAsync(requestUri);

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);

            var content = await response.Content.ReadAsStringAsync();
            var cardLists = JsonConvert.DeserializeObject<List<CardListDto>>(content);

            Assert.IsTrue(cardLists.Count > 0);
        }

        [TestMethod]
        public async Task GetCardListAsync()
        {
            var response = await _client.GetAsync($"/cardLists/{testCardLists[0].Id}");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);

            var content = await response.Content.ReadAsStringAsync();
            var cardList = JsonConvert.DeserializeObject<CardListDto>(content);

            Assert.IsNotNull(cardList);
        }

        [TestMethod]
        public async Task CreateCardListAsync_ValidInput()
        {
            CreateCardListCommand createBoardRequest
                = new CreateCardListCommand(testBoards[0].Id, "New List");

            var response = await _client.PostAsJsonAsync("/cardLists", createBoardRequest);

            Assert.AreEqual(HttpStatusCode.Created, response.StatusCode);
        }

        [TestMethod]
        public async Task CreateCardListAsync_EmptyName()
        {
            CreateCardListCommand createBoardRequest = new CreateCardListCommand(testBoards[0].Id, "");

            var response = await _client.PostAsJsonAsync("/cardLists", createBoardRequest);

            Assert.AreEqual(HttpStatusCode.UnprocessableContent, response.StatusCode);
        }

        [TestMethod]
        public async Task CreateCardListAsync_NoneExistingBoard()
        {
            CreateCardListCommand createBoardRequest = new CreateCardListCommand(Guid.NewGuid(), "New List");

            var response = await _client.PostAsJsonAsync("/cardLists", createBoardRequest);

            Assert.AreEqual(HttpStatusCode.NotFound, response.StatusCode);
        }

        [TestMethod]
        public async Task UpdateCardlistAsync_ValidInput()
        {
            var response = await _client.PatchAsJsonAsync($"/cardLists/{testCardLists[0].Id}",
                new UpdateCardListRequest("New name"));

            Assert.AreEqual(HttpStatusCode.NoContent, response.StatusCode);
        }

        [TestMethod]
        public async Task UpdateCardListAsync_EmptyName()
        {
            var response = await _client.PatchAsJsonAsync($"/cardLists/{testCardLists[0].Id}",
                new UpdateCardListRequest(""));

            Assert.AreEqual(HttpStatusCode.UnprocessableContent, response.StatusCode);
        }

        [TestMethod]
        public async Task DeleteCardListAsync()
        {
            var response = await _client.DeleteAsync($"/cardLists/{testCardLists[1].Id}");

            Assert.AreEqual(HttpStatusCode.NoContent, response.StatusCode);
        }
    }
}
