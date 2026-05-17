import { BadgeCheck, UsersRound } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';

const FoundationStrategy = () => {
return (
<section className="py-16">
    <Container>
    <div className="flex flex-col gap-10 md:flex-row">
        
        {/* LEFT */}
        <div className="flex-1 space-y-8">
            <div>
                <SectionTitle title="Our Foundation Strategy" />
                <p className="text-[var(--body)] leading-relaxed text-base sm:text-lg mt-8">
                    SPR Foundation operates on the principle of The Unified Sudurpaschim.
                    We move beyond localized aid to create a province-wide network of resilience.
                    Our approach is purely data-driven, ensuring every rupee is tracked and every
                    project is measured against global sustainability benchmarks.
                </p>
            </div>

            <div className="space-y-6">
                <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-full bg-white shadow flex items-center justify-center">
                        <BadgeCheck className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[var(--primary)] text-base sm:text-lg">
                            Integrity First
                        </h4>
                        <p className="text-[var(--body)] text-base sm:text-lg">
                            We maintain a 'No-Boundary' transparency policy for every rupee donated and spent.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 items-start">
                    <div className="p-2 rounded-full bg-white shadow flex items-center justify-center">
                        <UsersRound className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                    <div>
                        <h4 className="font-bold text-[var(--primary)] text-base sm:text-lg">
                            Community-Led
                        </h4>
                        <p className="text-[var(--body)] text-base sm:text-lg">
                            Our projects are chosen and managed by local leaders to ensure cultural alignment and
                            longevity.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex gap-4">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4 flex-1">
                <div className="flex-[3] min-h-[120px] overflow-hidden">
                    <img src="src/assets/image/GROUP1.png"
                        className="w-full h-full object-cover" alt="Women in traditional dress" />
                </div>
                <div
                    className="flex-1 bg-[var(--badge-2)] flex flex-col items-start justify-center px-3 py-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--badge-text)]">09</h3>
                    <p className="text-lg sm:text-2xl font-bold text-[var(--badge-text)]">Districts Unified</p>
                </div>
            </div>
            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 flex-1">
                <div className="bg-[var(--badge-1)] px-3 sm:px-6 flex items-center justify-center flex-1">
                    <p className="text-lg sm:text-2xl font-bold text-white text-center py-2">
                        Driven by Legacy, Built for Future.
                    </p>
                </div>
                <div className="flex-[3] min-h-[120px] overflow-hidden">
                    <img src="src/assets/image/stadium.png"
                        className="w-full h-full object-cover" alt="Stadium" />
                </div>
            </div>
        </div>
    </div>
    </Container>
</section>
);
};

export default FoundationStrategy;