using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using myMusic.Model;

namespace myMusic.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MusicTracksController : ControllerBase
    {
        private readonly MusicTracksContext _context;

        private static string[] Genres = new[]{
            "Classical", "Disco", "Jazz", "Opm", "Pop", "Standard"};

        public MusicTracksController(MusicTracksContext context)
        {
            _context = context;
        }

        // GET: api/MusicTracks
        [HttpGet]
        public IEnumerable<MusicTrack> GetMusicTracks()
        {
            return _context.MusicTracks;
        }

        // GET: api/MusicTracks/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetMusicTrack([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var musicTrack = await _context.MusicTracks.FindAsync(id);

            if (musicTrack == null)
            {
                return NotFound();
            }

            return Ok(musicTrack);
        }

        // PUT: api/MusicTracks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMusicTrack([FromRoute] int id, [FromBody] MusicTrack musicTrack)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != musicTrack.ID)
            {
                return BadRequest();
            }

            _context.Entry(musicTrack).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MusicTrackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/MusicTracks
        [HttpPost]
        public async Task<IActionResult> PostMusicTrack([FromBody] MusicTrack musicTrack)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.MusicTracks.Add(musicTrack);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMusicTrack", new { id = musicTrack.ID }, musicTrack);
        }

        // DELETE: api/MusicTracks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMusicTrack([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var musicTrack = await _context.MusicTracks.FindAsync(id);
            if (musicTrack == null)
            {
                return NotFound();
            }

            _context.MusicTracks.Remove(musicTrack);
            await _context.SaveChangesAsync();

            return Ok(musicTrack);
        }

        // GET: api/MusicTracks
        [HttpGet("Genres")]
        public string[] GetGenres()
        {
            return Genres;
        }

        private bool MusicTrackExists(int id)
        {
            return _context.MusicTracks.Any(e => e.ID == id);
        }
    }
}