type StoryCardProps = {
  image: string
  title: string
  description: string
  badge?: string
}

const StoryCard = ({
  image,
  title,
  description,
  badge,
}: StoryCardProps) => {
  return (
    <div>
      
      {/* IMAGE */}
      <div className="relative overflow-hidden rounded-lg ">
        
        {/* BADGE */}
        {badge && (
          <span className="absolute top-4 left-4 bg-(--secondary) text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
            {badge}
          </span>
        )}

        <img
          src={image}
          alt={title}
          className="w-full h-[240px] object-cover object-top"
        />
      </div>

      {/* CONTENT */}
      <div className="mt-5">
        <h3 className="text-2xl font-bold text-(--primary)">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default StoryCard