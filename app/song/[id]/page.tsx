import { notFound } from "next/navigation";
import { SongView } from "@/components/song-view";
import { getSong, songs } from "@/lib/songs";

type SongPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return songs.map((song) => ({ id: song.id }));
}

export async function generateMetadata({ params }: SongPageProps) {
  const { id } = await params;
  const song = getSong(id);
  return {
    title: song ? song.title : "Song",
  };
}

export default async function SongDetailPage({ params }: SongPageProps) {
  const { id } = await params;
  const song = getSong(id);

  if (!song) notFound();

  return <SongView song={song} />;
}
