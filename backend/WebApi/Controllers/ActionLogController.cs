using Application.DTOs;
using Application.Features.ActionHistory.Queries.GetActionHistoryPaged;
using Application.Features.ActionLog.Queries.GetBoardActionLogPaged;
using Application.Features.ActionLog.Queries.GetCardActionLogPaged;
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

        [HttpGet("board/{id:Guid}")]
        [ProducesResponseType(typeof(List<ActionLogDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetBoardActionLogListPaged(Guid id, [FromQuery] GetBoardActionLogPagedRequest request, CancellationToken cancellationToken)
        {
            var actionLogPaged = await _sender.Send(new GetBoardActionLogPagedQuery(id, request.Page, request.PageSize));
            return Ok(actionLogPaged);
        }

        [HttpGet("card/{id:Guid}")]
        [ProducesResponseType(typeof(List<ActionLogDto>), StatusCodes.Status200OK)]
        public async Task<IActionResult> GetCardActionLogListPaged(Guid id, [FromQuery] GetCardActionLogPagedRequest request, CancellationToken cancellationToken)
        {
            var actionLogPaged = await _sender.Send(new GetCardActionLogPagedQuery(id, request.Page, request.PageSize), cancellationToken);
            return Ok(actionLogPaged);
        }
    }
}
