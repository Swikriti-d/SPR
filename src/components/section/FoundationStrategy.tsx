import { BadgeCheck } from 'lucide-react';
import { UsersRound } from 'lucide-react';

const FoundationStrategy = () => {
return (
<section className="container px-6 sm:px-10 md:px-20 lg:px-30 py-16">

    <div className="flex flex-col md:flex-row gap-14">

        {/* LEFT SIDE */}
        <div className="space-y-8 max-w-[690px] md:flex-1">
            <h2 className="relative text-3xl md:text-4xl font-extrabold text-[var(--primary)] pb-4">
                Our Foundation Strategy
                <span className="absolute left-0 bottom-0 h-1 w-20 rounded-4xl bg-[var(--secondary)]"></span>
            </h2>

            <p className="text-[var(--body)] leading-relaxed text-lg">
                SPR Foundation operates on the principle of The Unified Sudurpaschim .
                We move beyond localized aid to create a province-wide network of resilience.
                Our approach is purely data-driven, ensuring every rupee is tracked and every
                project is measured against global sustainability benchmarks.
            </p>

            <div className="space-y-6">
                <div className="flex gap-6 items-start">
                    <div className="p-2 flex items-center justify-center rounded-full bg-white shadow-md">
                        <BadgeCheck className="w-6 h-6 text-[var(--secondary)]" />
                    </div>

                    <div>
                        <h4 className="font-bold text-[var(--primary)] text-lg">
                            Integrity First
                        </h4>
                        <p className="text-[var(--body)] text-lg">
                            We maintain a 'No-Boundary' transparency policy for every rupee donated and spent.
                        </p>
                    </div>
                </div>

                <div className="flex gap-6 items-start">
                    <div className="p-2 flex items-center justify-center rounded-full bg-white shadow-md">
                        <UsersRound className="w-6 h-5 text-[var(--secondary)]" />
                    </div>

                    <div>
                        <h4 className="font-bold text-[var(--primary)] text-lg">
                            Community-Led
                        </h4>
                        <p className="text-[var(--body)] text-lg">
                            Our projects are chosen and managed by local leaders to ensure cultural alignment and
                            longevity.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex gap-3 md:gap-4 h-[360px] sm:h-[520px] md:flex-1">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 flex-[1]">

                <div className="overflow-hidden flex-[3]">
                    <img src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
                        className="w-full h-full object-cover" alt="Women in traditional dress" />
                </div>
                
                <div className="bg-[var(--badge-2)] px-8 flex flex-col justify-center flex-[1]">
                    <h3 className="text-2xl font-bold text-[var(--badge-text)]">09</h3>
                    <p className="text-2xl font-bold text-[var(--badge-text)]">Districts Unified</p>
                </div>

            </div>

            {/* RIGHT COLUMN - narrower */}
            <div className="flex flex-col gap-4 flex-[1]">

                {/* TOP - navy text card (short) */}
                <div className="bg-[var(--badge-1)] px-8 flex items-center flex-[1]">
                    <p className="text-2xl font-bold text-white leading-relaxed text-center">
                        Driven by Legacy,<br />Built for Future.
                    </p>
                </div>

                {/* BOTTOM - stadium image (tall) */}
                <div className="overflow-hidden flex-[3]">
                    <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211"
                        className="w-full h-full object-cover" alt="Stadium" />
                </div>

            </div>

        </div>
    </div>
</section>
)
}

export default FoundationStrategy