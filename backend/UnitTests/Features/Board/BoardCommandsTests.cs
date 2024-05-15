using Application.Contracts;
using Application.DTOs;
using Application.Features.Boards.Commands.CreateBoard;
using Application.Features.Boards.Commands.DeleteBoard;
using Application.Features.Boards.Commands.UpdateBoard;
using AutoMapper;
using Domain.Entities;
using Domain.Exceptions;
using Moq;

namespace UnitTests.FeaturesBoard
{
    public class BoardCommandsTests
    {
        [Fact]
        public async Task CreateBoard_ValidRequest_ReturnsBoardDto()
        {
            var expectedBoard = new Board { Name = "New board" };
            var expectedBoardDto = new BoardDto { Name = "New board" };

            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.AddAsync(It.IsAny<Board>())).ReturnsAsync(expectedBoard);

            var mockMapper = new Mock<IMapper>();
            mockMapper.Setup(mapper => mapper.Map<BoardDto>(It.IsAny<Board>())).Returns(expectedBoardDto);

            var request = new CreateBoardCommand("New board");
            var cancellationToken = new CancellationToken();

            var handler = new CreateBoardCommandHandler(mockRepository.Object, mockMapper.Object);

            var result = await handler.Handle(request, cancellationToken);

            Assert.NotNull(result);
            Assert.Equal(expectedBoardDto.Name, result.Name);
        }

        [Fact]
        public async Task DeleteBoard_ValidRequest_DeletesBoard()
        {
            var boardid = Guid.NewGuid();
            var boardToDelete = new Board { Id = boardid };

            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.GetByIdAsync(boardid)).ReturnsAsync(boardToDelete);

            var request = new DeleteBoardCommand(boardid);
            var cancellationToken = new CancellationToken();

            var handler = new DeleteBoardCommandHandler(mockRepository.Object);

            await handler.Handle(request, cancellationToken);

            mockRepository.Verify(repo => repo.DeleteAsync(boardToDelete));
        }

        [Fact]
        public async Task DeleteBoard_InvalidRequest_ThrowsNotFoundException()
        {
            var boardid = Guid.NewGuid();
            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.GetByIdAsync(boardid)).ReturnsAsync((Board)null);

            var request = new DeleteBoardCommand(Guid.NewGuid());
            var cancellationToken = new CancellationToken();
            var handler = new DeleteBoardCommandHandler(mockRepository.Object);

            await Assert.ThrowsAsync<NotFoundException>(() => handler.Handle(request, cancellationToken));
        }

        [Fact]
        public async Task UpdateBoard_ValidRequest_UpdatesBoard()
        {
            var boardid = Guid.NewGuid();
            var boardToUpdate = new Board { Id = boardid, Name = "Old name" };

            var mockRepository = new Mock<IGenericRepository<Board>>();
            mockRepository.Setup(repo => repo.GetByIdAsync(boardid)).ReturnsAsync(boardToUpdate);

            var mockMapper = new Mock<IMapper>();

            var handler = new UpdateBoardCommandHandler(mockRepository.Object, mockMapper.Object);
            var request = new UpdateBoardCommand(boardid, "New name");
            var cancellationToken = new CancellationToken();

            await handler.Handle(request, cancellationToken);

            mockRepository.Verify(repo => repo.UpdateAsync(boardToUpdate), Times.Once);
        }
    }
}