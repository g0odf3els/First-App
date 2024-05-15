using Application.Contracts;
using Application.DTOs;
using Application.Features.Boards.Queries.GetBoard;
using Application.Features.Boards.Queries.GetBoardPaged;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using Moq;

namespace UnitTests.FeaturesBoard
{
    public class BoardQueriesTests
    {
        [Fact]
        public async Task GetBoard_ValidRequest_ReturnsBoardDto()
        {
            var boardId = Guid.NewGuid();
            var board = new Board { Id = boardId, Name = "Board" };
            var expectedBoardDto = new BoardDto { Id = boardId, Name = "Board" };

            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(mapper => mapper.Map<BoardDto>(board)).Returns(expectedBoardDto);

            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.GetByIdAsync(boardId)).ReturnsAsync(board);

            var request = new GetBoardQuery(boardId);
            var cancellationToken = new CancellationToken();
            var handler = new GetBoardQueryHandler(mockRepository.Object, mockMapper.Object);

            var result = await handler.Handle(request, cancellationToken);

            Assert.NotNull(result);
            Assert.Equal(expectedBoardDto.Id, result.Id);
        }

        [Fact]
        public async Task GetBoard_InvalidRequest_ThrowsNotFoundException()
        {
            var boardId = Guid.NewGuid();
            var board = new Board { Id = boardId, Name = "Board" };
            var expectedBoardDto = new BoardDto { Id = boardId, Name = "Board" };

            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(mapper => mapper.Map<BoardDto>(board)).Returns(expectedBoardDto);

            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.GetByIdAsync(boardId)).ReturnsAsync((Board)null);

            var request = new GetBoardQuery(boardId);
            var cancellationToken = new CancellationToken();
            var handler = new GetBoardQueryHandler(mockRepository.Object, mockMapper.Object);

            await Assert.ThrowsAsync<NotFoundException>(() => handler.Handle(request, cancellationToken));
        }

        [Fact]
        public async Task GetBoardPaged_ValidRequest_ReturnsListOfBoardDto()
        {

            var boards = new List<Board>
            {
                new Board { Id = Guid.NewGuid(), Name = "Board 1" },
                new Board { Id = Guid.NewGuid(), Name = "Board 2" }
            };

            var expectedBoardDtos = new List<BoardDto>
            {
                new BoardDto { Id = Guid.NewGuid(), Name = "Board 1" },
                new BoardDto { Id = Guid.NewGuid(), Name = "Board 2" }
            };

            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.GetPagedReponseAsync(1, 10)).ReturnsAsync(boards);

            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(mapper => mapper.Map<List<BoardDto>>(boards)).Returns(expectedBoardDtos);

            var request = new GetBoardPagedQuery { Page = 1, PageSize = 10 };
            var cancellationToken = new CancellationToken();
            var handler = new GetBoardPagedQueryHandler(mockRepository.Object, mockMapper.Object);

            var result = await handler.Handle(request, cancellationToken);

            Assert.NotNull(result);
            Assert.Equal(expectedBoardDtos.Count, result.Count);
        }
    }
}
