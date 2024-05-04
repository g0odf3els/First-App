using Application.DTOs;
using Application.Features.ActionHistory.Queries.GetActionHistoryPaged;
using Application.Features.ActionLog.Queries.GetCardActionLogPaged;
using Application.Features.Cards.Queries.GetCardPaged;
using MediatR;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [EnableCors("OpenCORSPolicy")]
    [ApiController]
    [Route("actionLogs")]
    public class ActionLogController : ControllerBase
    {
        private readonly ISender _sender;

        public ActionLogController(ISender sender)
        {
            _sender = sender;
        }

        [HttpGet]
        [ProducesResponseType(typeof(List<ActionLogDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetActionLogListPaged([FromQuery] GetActionLogPagedQuery request, CancellationToken cancellationToken)
        {
            var actionLogPaged = await _sender.Send(request, cancellationToken);
            return Ok(actionLogPaged);        
        }

        [HttpGet("{id:Guid}")]
        [ProducesResponseType(typeof(List<ActionLogDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetCardActionLogListPaged(Guid id, [FromQuery] GetActionLogPagedQuery request, CancellationToken cancellationToken)
        {
            var actionLogPaged = await _sender.Send(new GetCardActionLogPagedQuery(id, request.Page, request.PageSize), cancellationToken);
            return Ok(actionLogPaged);
        }
    }
}
