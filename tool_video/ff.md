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

### Convert Format

```sh
ffmpeg -i movie.mp4 movie.avi
```
### Sound

```sh
ffmpeg -i movie.avi -af "atempo=3/4,asetrate=44100*4/3" movie_ok.avi
```
