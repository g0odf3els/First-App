using Application.DTOs;
using Application.Features.CardLists.Commands.CreateCardListCommand;
using Application.Features.CardLists.Commands.DeleteCardListCommand;
using Application.Features.CardLists.Commands.UpdateCardList;
using Application.Features.CardLists.Queries.GetCardList;
using Application.Features.CardLists.Queries.GetCardListPagedCommand;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("cardLists")]
    public class CardListController : ControllerBase
    {
        private readonly ISender _sender;

        public CardListController(ISender sender)
        {
            _sender = sender;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<CardListDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetCardListPaged([FromQuery] GetCardListPagedQuery request, CancellationToken cancellationToken)
        {
            var cardListPaged = await _sender.Send(request, cancellationToken);
            return Ok(cardListPaged);
        }

        [HttpGet("{id:Guid}")]
        [ProducesResponseType(typeof(CardListDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetCardListById(Guid id, CancellationToken cancellationToken)
        {
            var cardList = await _sender.Send(new GetCardListQuery(id), cancellationToken);
            return Ok(cardList);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CardListDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> CreateCardList([FromBody] CreateCardListCommand request, CancellationToken cancellationToken)
        {
            var cardList = await _sender.Send(request, cancellationToken);
            return CreatedAtAction(nameof(GetCardListById), new { cardList.Id }, cardList);
        }

        [HttpPatch("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> UpdateCardList(Guid id, [FromBody] UpdateCardListRequest request, CancellationToken cancellationToken)
        {
            await _sender.Send(new UpdateCardListCommand(id, request.Name), cancellationToken);
            return NoContent();
        }

        [HttpDelete("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> DeleteCardList(Guid id, CancellationToken cancellationToken)
        {
            await _sender.Send(new DeleteCardListCommand(id), cancellationToken);
            return NoContent();
        }
    }
}
