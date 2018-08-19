using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace myMusic.Model
{
    public class MusicTracksContext : DbContext
    {
        public MusicTracksContext(DbContextOptions<MusicTracksContext> options)
            : base(options)
        {
        }

        public DbSet<MusicTrack> MusicTracks { get; set; }
    }
}
