using Application.DTOs;
using Application.Features.Boards.Commands.CreateBoard;
using Application.Features.Boards.Commands.DeleteBoard;
using Application.Features.Boards.Commands.UpdateBoard;
using Application.Features.Boards.Queries.GetBoard;
using Application.Features.Boards.Queries.GetBoardPaged;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [EnableCors("OpenCORSPolicy")]
    [ApiController]
    [Route("boards")]
    public class BoardController : ControllerBase
    {
        private readonly ISender _sender;

        public BoardController(ISender sender)
        {
            _sender = sender;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<BoardDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetBoardPaged([FromQuery] GetBoardPagedQuery request, CancellationToken cancellationToken)
        {
            var boardPaged = await _sender.Send(request, cancellationToken);
            return Ok(boardPaged);
        }

        [HttpGet("{id:Guid}")]
        [ProducesResponseType(typeof(BoardDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetBoardById(Guid id, CancellationToken cancellationToken)
        {
            var board = await _sender.Send(new GetBoardQuery(id), cancellationToken);
            return Ok(board);
        }

        [HttpPost]
        [ProducesResponseType(typeof(BoardDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> CreateBoard([FromBody] CreateBoardCommand request, CancellationToken cancellationToken)
        {
            var board = await _sender.Send(request, cancellationToken);
            return CreatedAtAction(nameof(GetBoardById), new { board.Id }, board);
        }

        [HttpPatch("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> UpdateBoard(Guid id, [FromBody] UpdateBoardRequest request, CancellationToken cancellationToken)
        {
            await _sender.Send(new UpdateBoardCommand(id, request.Name));
            return NoContent();
        }

        [HttpDelete("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> DeleteBoard(Guid id, CancellationToken cancellationToken)
        {
            await _sender.Send(new DeleteBoardCommand(id), cancellationToken);
            return NoContent();
        }
    }
}
