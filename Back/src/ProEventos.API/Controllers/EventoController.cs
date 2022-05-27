using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    
    public class EventoController : ControllerBase
    {
       private IEnumerable<Evento> _evento = new Evento[] {
                new Evento(){
                    EventoID = 1,
                    Tema = "dotnet - angular",
                    Local = "Rio de janeiro",
                    Lote = "Segundo Lote",
                    QuantidadePessoas = 33,
                    DataEvento = DateTime.Now.AddDays(2).ToString(),
                    ImageURL = "foto.png"
                },
                new Evento(){
                    EventoID = 2,
                    Tema = "dotnet",
                    Local = "Rio de janeiro",
                    Lote = "terceiro Lote",
                    QuantidadePessoas = 333,
                    DataEvento = DateTime.Now.AddDays(5).ToString(),
                    ImageURL = "foto.png"
                }
            };
        public EventoController()
        {
            
        }

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> GetById(int id)
        {
            return _evento.Where(evento => evento.EventoID == id);
        }
        
        [HttpPost]
        public string Post()
        {
            return "Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"Put {id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"Delete {id}";
        }
    }
}
