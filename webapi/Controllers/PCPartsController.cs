using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PCPartsController : ControllerBase
    {
        [HttpGet("{component}")]
        public IEnumerable<PCPart> Get(string component)
        {
            string fileName;
            switch (component.ToLower())
            {
                case "cpu":
                    fileName = "cpu.json";
                    return DeserializeJson<CPU>(fileName);
                case "gpu":
                    fileName = "video-card.json";
                    return DeserializeJson<GPU>(fileName);
                case "motherboard":
                    fileName = "motherboard.json";
                    return DeserializeJson<Motherboard>(fileName);
                case "psu":
                    fileName = "power-supply.json";
                    return DeserializeJson<PSU>(fileName);
                case "memory":
                    fileName = "memory.json";
                    return DeserializeJson<Memory>(fileName);
                case "case":
                    fileName = "case.json";
                    return DeserializeJson<Case>(fileName);
                
                default:
                    return new List<PCPart>();
            }
        }

        private IEnumerable<T> DeserializeJson<T>(string fileName) where T : PCPart
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "json", fileName);

            if (!System.IO.File.Exists(filePath))
            {
                return new List<T>();
            }

            
            var jsonData = System.IO.File.ReadAllText(filePath);

            
            return JsonSerializer.Deserialize<List<T>>(jsonData);
        }
    }
}