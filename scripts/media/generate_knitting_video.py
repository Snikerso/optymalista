"""Generate the portfolio slideshow. Requires Pillow and imageio-ffmpeg."""
import argparse
import subprocess
from pathlib import Path

import imageio_ffmpeg
from PIL import Image, ImageDraw, ImageFont

parser = argparse.ArgumentParser()
parser.add_argument('--font', required=True, help='Path to a TrueType font')
args = parser.parse_args()
root = Path(__file__).resolve().parents[2]
media = root / 'public/projects/knitting-counter-pro'
font = lambda size: ImageFont.truetype(args.font, size)
slides = [
    ('main.png', 'Count every row', ['Large touch controls', 'Start a new round'], '01 / COUNTER'),
    ('menu.png', 'Keep your context', ['Projects, rows, statistics', 'One menu on your wrist'], '02 / PROJECT MENU'),
    ('progress.png', 'See your progress', ['Daily goal and today’s rows', 'Track your streak'], '03 / DAILY PROGRESS'),
]
frames = []
for filename, title, lines, label in slides:
    frame = Image.new('RGB', (1280, 720), '#110e0b')
    draw = ImageDraw.Draw(frame)
    draw.text((64, 68), 'KNITTING COUNTER PRO', font=font(23), fill='#e6b477')
    draw.text((64, 220), label, font=font(19), fill='#c49a6e')
    draw.text((64, 273), title, font=font(43), fill='#fff0d8')
    for i, line in enumerate(lines):
        draw.text((64, 358 + i * 42), line, font=font(26), fill='#d1c3af')
    draw.text((64, 592), 'Garmin Connect IQ / Monkey C', font=font(20), fill='#e6b477')
    draw.text((64, 631), 'Simulator screenshots / silent presentation', font=font(16), fill='#a99a86')
    screen = Image.open(media / filename).convert('RGB').resize((480, 480), Image.Resampling.LANCZOS)
    frame.paste(screen, (736, 116))
    frames.append(frame)
frames[0].save(media / 'video-poster.jpg', quality=90)
fps = 24
command = [imageio_ffmpeg.get_ffmpeg_exe(), '-y', '-f', 'rawvideo', '-vcodec', 'rawvideo', '-s', '1280x720', '-pix_fmt', 'rgb24', '-r', str(fps), '-i', '-', '-an', '-c:v', 'libx264', '-crf', '24', '-preset', 'medium', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', str(media / 'overview.mp4')]
with subprocess.Popen(command, stdin=subprocess.PIPE, stderr=subprocess.PIPE) as process:
    for index, frame in enumerate(frames):
        for n in range(5 * fps):
            # A brief crossfade introduces each screen without simulating interaction.
            current = Image.blend(frames[index - 1], frame, n / 12) if index and n < 12 else frame
            process.stdin.write(current.tobytes())
    process.stdin.close()
    errors = process.stderr.read().decode()
    if process.wait():
        raise RuntimeError(errors)
print(media / 'overview.mp4')
