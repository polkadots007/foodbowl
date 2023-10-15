export default function Image({ src, caption }: any) {
    return <img src={src} alt={caption} className="object-cover" />;
  }