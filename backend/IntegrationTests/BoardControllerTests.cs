using Application.DTOs;
using Application.Features.Boards.Commands.CreateBoard;
using Application.Features.Boards.Commands.UpdateBoard;
using Domain.Entities;
using Infrastructure.Data.Context;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json;
using System.Net;
using System.Net.Http.Json;

namespace IntegrationTests
{
    [TestClass]
    public class BoardControllerTests
    {
        private readonly HttpClient _client;
        private readonly CustomWebApplicationFactory<Program> _factory;
        private readonly IServiceScopeFactory _scopeFactory;

        private Board[] testBoards = [
            new Board { Id = Guid.NewGuid(), Name = "Test Board 1" },
            new Board { Id = Guid.NewGuid(), Name = "Test Board 2" }
        ];

        public BoardControllerTests()
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

                await dbContext.AddRangeAsync(testBoards);

                await dbContext.SaveChangesAsync();
            }
        }

        [TestMethod]
        public async Task GetBoardPagedAsync()
        {
            var response = await _client.GetAsync("/boards");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);

            var content = await response.Content.ReadAsStringAsync();
            var boards = JsonConvert.DeserializeObject<List<BoardDto>>(content);

            Assert.IsTrue(boards.Count > 0);
        }

        [TestMethod]
        public async Task GetBoardAsync()
        {
            var response = await _client.GetAsync($"/boards/{testBoards[0].Id}");

            Assert.AreEqual(HttpStatusCode.OK, response.StatusCode);

            var content = await response.Content.ReadAsStringAsync();
            var board = JsonConvert.DeserializeObject<BoardDto>(content);

            Assert.IsNotNull(board);
        }

        [TestMethod]
        public async Task CreateBoardAsync_ValidInput()
        {
            CreateBoardCommand createBoardRequest = new CreateBoardCommand("New Board");

            var response = await _client.PostAsJsonAsync("/boards", createBoardRequest);

            Assert.AreEqual(HttpStatusCode.Created, response.StatusCode);
        }

        [TestMethod]
        public async Task CreateBoardAsync_EmptyName()
        {
            CreateBoardCommand createBoardRequest = new CreateBoardCommand("");

            var response = await _client.PostAsJsonAsync("/boards", createBoardRequest);

            Assert.AreEqual(HttpStatusCode.UnprocessableContent, response.StatusCode);
        }

        [TestMethod]
        public async Task UpdateBoardAsync_ValidInput()
        {
            var response = await _client.PatchAsJsonAsync($"/boards/{testBoards[0].Id}",
                new UpdateBoardRequest("New name"));

            Assert.AreEqual(HttpStatusCode.NoContent, response.StatusCode);
        }

        [TestMethod]
        public async Task UpdateBoardAsync_EmptyName()
        {
            var response = await _client.PatchAsJsonAsync($"/boards/{testBoards[0].Id}",
                new UpdateBoardRequest(""));

            Assert.AreEqual(HttpStatusCode.UnprocessableContent, response.StatusCode);
        }

        [TestMethod]
        public async Task DeleteBoardAsync()
        {
            var response = await _client.DeleteAsync($"/boards/{testBoards[1].Id}");

            Assert.AreEqual(HttpStatusCode.NoContent, response.StatusCode);
        }
    }
}
