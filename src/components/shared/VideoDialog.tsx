import { HeroVideoDialog } from "../ui/hero-video-dialog";

export default function VideoDialog() {
  return (
    <div>
      <HeroVideoDialog
        animationStyle="from-center"
        videoSrc="https://www.youtube-nocookie.com/embed/QJyYhNGA6A8?si=pCZa3LdGHmCxFvFZ"
        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
