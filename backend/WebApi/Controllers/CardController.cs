using Application.DTOs;
using Application.Features.CardLists.Queries.GetCardListPagedCommand;
using Application.Features.Cards.Commands.CreateCard;
using Application.Features.Cards.Commands.DeleteCard;
using Application.Features.Cards.Commands.UpdateCard;
using Application.Features.Cards.Queries.GetCard;
using Application.Features.Cards.Queries.GetCardPaged;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [EnableCors("OpenCORSPolicy")]
    [ApiController]
    [Route("cards")]
    public class CardController : ControllerBase
    {
        private readonly ISender _sender;

        public CardController(ISender sender)
        {
            _sender = sender;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<CardDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetCardListPaged([FromQuery] GetCardPagedQuery request, CancellationToken cancellationToken)
        {
            var cardPaged = await _sender.Send(request, cancellationToken);
            return Ok(cardPaged);
        }

        [HttpGet("{id:Guid}")]
        [ProducesResponseType(typeof(CardDto), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetCardById(Guid id, CancellationToken cancellationToken)
        {
            var card = await _sender.Send(new GetCardQuery(id), cancellationToken);
            return Ok(card);
        }

        [HttpPost]
        [ProducesResponseType(typeof(CardDto), StatusCodes.Status201Created)]
        public async Task<IActionResult> CreateCard([FromBody] CreateCardCommand request, CancellationToken cancellationToken)
        {
            var card = await _sender.Send(request, cancellationToken);
            return CreatedAtAction(nameof(GetCardById), new { card.Id }, card);
        }

        [HttpPatch("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<IActionResult> UpdateCard(Guid id, [FromBody] UpdateCardRequest request, CancellationToken cancellationToken)
        {
            await _sender.Send(new UpdateCardCommand()
            {
                CardId = id,
                CardListId = request.CardListId,
                Name = request.Name,
                Description = request.Description,
                DueDate = request.DueTime,
                Priority = request.Priority,
            }, cancellationToken);

            return NoContent();
        }

        [HttpDelete("{id:Guid}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesDefaultResponseType]
        public async Task<ActionResult> DeleteCard(Guid id, CancellationToken cancellationToken)
        {
            await _sender.Send(new DeleteCardCommand(id), cancellationToken);
            return NoContent();
        }
    }
}
