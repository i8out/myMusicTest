using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace myMusic.Model
{
    public class MusicContextFactory : IDesignTimeDbContextFactory<MusicTracksContext>
    {
        public MusicTracksContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                           .SetBasePath(Directory.GetCurrentDirectory())
                           .AddJsonFile("appsettings.json")
                           .Build();
            var optionsBuilder = new DbContextOptionsBuilder<MusicTracksContext>();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("MusicTracksContext"));

            return new MusicTracksContext(optionsBuilder.Options);
        }
    }
}
