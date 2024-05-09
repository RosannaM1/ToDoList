using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoList.Context;
using ToDoList.Models;

namespace ToDoList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TareasController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Tareas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tarea>>> GetTareas()
        {
            try
            {
                var tareas = await _context.Tareas.ToListAsync();
                return Ok(tareas);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al obtener las tareas: {ex.Message}");
            }
        }

        // GET: api/Tareas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tarea>> GetTarea(int id)
        {
            try
            {
                var tarea = await _context.Tareas.FindAsync(id);

                if (tarea == null)
                {
                    return NotFound();
                }

                return Ok(tarea);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al obtener la tarea: {ex.Message}");
            }
        }

        // PUT: api/Tareas/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTarea(int id, Tarea tarea)
        {
            try
            {
                if (id != tarea.Id)
                {
                    return BadRequest("El ID de la tarea no coincide con el ID proporcionado en la solicitud.");
                }

                _context.Entry(tarea).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al actualizar la tarea: {ex.Message}");
            }
        }

        // POST: api/Tareas
        [HttpPost]
        public async Task<ActionResult<Tarea>> PostTarea(Tarea tarea)
        {
            try
            {
                _context.Tareas.Add(tarea);
                await _context.SaveChangesAsync();

                return CreatedAtAction("GetTarea", new { id = tarea.Id }, tarea);
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al crear la tarea: {ex.Message}");
            }
        }

        // DELETE: api/Tareas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTarea(int id)
        {
            try
            {
                var tarea = await _context.Tareas.FindAsync(id);
                if (tarea == null)
                {
                    return NotFound();
                }

                _context.Tareas.Remove(tarea);
                await _context.SaveChangesAsync();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status500InternalServerError, $"Error al eliminar la tarea: {ex.Message}");
            }
        }
    }
}
