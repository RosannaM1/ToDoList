namespace ToDoList.Models
{
    public class Tarea
    {
        public int Id { get; set; }
        public required string Descripcion { get; set; }        
        public bool estado { get; set; }

    }
}
