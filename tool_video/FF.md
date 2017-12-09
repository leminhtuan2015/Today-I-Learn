### Rotate

```sh
ffmpeg -i input.mp4 -vf "transpose=3,transpose=2" output.mp4
```

### Remove Audio From Video

```sh
ffmpeg -i input.mp4 -c copy -an output.mp4

```

### Add Audio to Video

```sh
ffmpeg -i videos/B1.mov -i videos/7838967.LOFI.mp3 -codec copy videos/C.mov
```

### Watermark

```sh
ffmpeg -i B2.mov -i logo.png -filter_complex \
"overlay=main_w-overlay_w-5:15" \
-codec:a copy output.mp4
```

```sh
ffmpeg -i INPUT.mp4  -i 7.png -filter_complex \
"overlay=main_w-overlay_w-0:1" \
-codec:a copy output.mp4
```

### Convert Format

```sh
ffmpeg -i movie.mp4 movie.avi
```
### Sound

```sh
ffmpeg -i movie.avi -af "atempo=3/4,asetrate=44100*4/3" movie_ok.avi
```

### Trim video

```sh
ffmpeg -i movie.mp4 -ss 00:00:03 -t 00:00:08 -async 1 cut.mp4
```

### Get MP3 from MP4

```sh
ffmpeg -i Creative.mp4 filename.mp3
```

### Create Video

```sh
brew install ffmpeg --with-freetype
```

```sh
ffmpeg -f lavfi -i color=c=blue:s=1280x720:d=1.5 -vf \
  "drawtext=fontfile=/Users/fuji/Desktop/v/Roboto/Roboto-Black.ttf:fontsize=100: \
  fontcolor=white:x=(w-text_w)/2:y=(h-text_h)/2:text='www.brightup.me'" ff_only_make.mp4
```
