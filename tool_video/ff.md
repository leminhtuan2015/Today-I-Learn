### Rotate

```sh
ffmpeg -i input.mp4 -vf "transpose=3,transpose=2" output.mp4
```

### Remove Audio From Video

```sh
./ffmpeg -i input.mp4 -c copy -an output.mp4

```
