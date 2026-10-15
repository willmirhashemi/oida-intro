import sys
from PIL import Image, ImageDraw
out, cols, files = sys.argv[1], int(sys.argv[2]), sys.argv[3:]
tw, th = 480, 300
rows = (len(files)+cols-1)//cols
sheet = Image.new('RGB', (cols*tw, rows*(th+20)), 'white')
d = ImageDraw.Draw(sheet)
for i,f in enumerate(files):
    im = Image.open(f).convert('RGB'); im.thumbnail((tw, th))
    x, y = (i%cols)*tw, (i//cols)*(th+20)
    sheet.paste(im, (x, y+20)); d.text((x+4, y+4), f.split('/')[-1], fill='black')
sheet.save(out)
