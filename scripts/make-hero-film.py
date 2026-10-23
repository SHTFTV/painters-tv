from pathlib import Path
import subprocess
f='/Users/kk/Documents/Codex/2026-10-20/o/work/video-tools/imageio_ffmpeg/binaries/ffmpeg-macos-aarch64-v7.1'
base=Path('work/painters-brand');out=Path('work/painter-film');out.mkdir(exist_ok=True)
for i,name in enumerate(['painters-hero-v2.webp','interior.webp','exterior.webp']):
 subprocess.run([f,'-loop','1','-i',str(base/'public'/name),'-vf',"scale=1440:960:force_original_aspect_ratio=increase,crop=1440:960,zoompan=z='1+0.00065*on':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':d=96:s=960x640:fps=24",'-frames:v','96','-an','-c:v','libx264','-preset','medium','-crf','25','-pix_fmt','yuv420p','-y',str(out/f'{i}.mp4'),'-loglevel','error'],check=True)
(out/'clips.txt').write_text(''.join("file '"+str((out/f'{i}.mp4').resolve())+"'\n" for i in range(3)))
subprocess.run([f,'-f','concat','-safe','0','-i',str(out/'clips.txt'),'-c','copy','-movflags','+faststart','-y',str(base/'public/video/painters-brand-hero.mp4'),'-loglevel','error'],check=True)
