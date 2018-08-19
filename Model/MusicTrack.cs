using System.ComponentModel.DataAnnotations;

namespace myMusic.Model
{
    public class MusicTrack
    {
        [Key]
        public int ID { get; set; }
        public string Title { get; set; }
        public string Artist { get; set; }
        public string Genre { get; set; }
    }
}
