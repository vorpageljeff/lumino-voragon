from pathlib import Path
from PIL import Image
import imageio_ffmpeg
ROOT=Path(__file__).parent
scenes=[('/tmp/lumino-01.png',7),('/tmp/lumino-02.png',9),('/tmp/lumino-03.png',10),('/tmp/lumino-04.png',11),('/tmp/lumino-05.png',6)]
frames=[(Image.open(path).convert('RGB').resize((1280,800),Image.Resampling.LANCZOS),seconds) for path,seconds in scenes]
writer=imageio_ffmpeg.write_frames(str(ROOT/'apresentacao-lumino.mp4'),(1280,800),fps=24,codec='libx264',quality=8,pix_fmt_in='rgb24',pix_fmt_out='yuv420p',output_params=['-movflags','+faststart'])
writer.send(None)
previous=None
for frame,seconds in frames:
    for i in range(seconds*24):
        if previous is not None and i<12:
            output=Image.blend(previous,frame,(i+1)/12)
        else: output=frame
        writer.send(output.tobytes())
    previous=frame
writer.close()
print(ROOT/'apresentacao-lumino.mp4')
