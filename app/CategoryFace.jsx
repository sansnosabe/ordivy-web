import Image from "next/image";

export default function CategoryFace({ id, name }) {
  return (
    <div className="bf-card-content">
      <Image src={`/categories/${id}.png`} width={1536} height={1024} sizes="174px" alt="" />
      <span>{name}</span>
    </div>
  );
}
