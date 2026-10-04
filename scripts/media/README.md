# Knitting Counter Pro portfolio media

The three PNG files in `public/projects/knitting-counter-pro/` are actual Garmin simulator screenshots, copied from the KnittingCounter project's `infoToPublish/assets/simulator-2026-10-02/` directory. They show the counter, project menu and daily progress.

`overview.mp4` is a silent 15-second slideshow of those screenshots, with crossfades, English on-screen labels and Polish/English WebVTT captions. It is a presentation of static screens, not a recording of app interaction. It is encoded as H.264/yuv420p at 1280×720 with fast-start metadata. The player loads video only on request.

To regenerate the MP4 and poster, use Python 3.9+ in a virtual environment with `pillow` and `imageio-ffmpeg` installed, then run:

```sh
python scripts/media/generate_knitting_video.py --font /path/to/Arial.ttf
```

Caption text is maintained separately in `captions-pl.vtt` and `captions-en.vtt`.
