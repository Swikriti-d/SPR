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
          <span className="absolute left-4 top-4 z-10 rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold text-white">
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
        <h3 className="text-2xl font-bold text-[var(--primary)]">
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