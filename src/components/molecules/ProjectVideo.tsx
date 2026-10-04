import type { ProjectDetail, ProjectLanguage } from "@/data/projectDetails";

export const ProjectVideo = ({
  video,
  language,
}: {
  video: NonNullable<ProjectDetail["video"]>;
  language: ProjectLanguage;
}) => {
  const copy = language === "pl"
    ? {
        title: "Zobacz aplikację",
        description: "15-sekundowa prezentacja zrzutów z symulatora Garmin: licznik, menu projektu i postęp dzienny. Film bez dźwięku.",
        download: "Otwórz film MP4",
      }
    : {
        title: "Explore the app",
        description: "A 15-second presentation of Garmin simulator screenshots: counter, project menu and daily progress. Silent video.",
        download: "Open MP4 video",
      };

  return (
    <figure className="overflow-hidden rounded-md border-2 border-black bg-white">
      <video
        key={language}
        controls
        playsInline
        preload="none"
        poster={video.poster}
        aria-label={copy.title}
        className="aspect-video w-full bg-[#110e0b] object-contain"
      >
        <source src={video.src} type="video/mp4" />
        <track kind="captions" src={video.captions.pl} srcLang="pl" label="Polski" default={language === "pl"} />
        <track kind="captions" src={video.captions.en} srcLang="en" label="English" default={language === "en"} />
        <a href={video.src}>{copy.download}</a>
      </video>
      <figcaption className="flex flex-col gap-1 p-3 text-sm leading-6 text-gray-700">
        <strong className="text-black">{copy.title}</strong>
        <p>{copy.description}</p>
      </figcaption>
    </figure>
  );
};
