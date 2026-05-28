import { Fragment } from 'react';
import { AiOutlineDatabase, AiOutlineCluster, AiOutlineCloudServer } from 'react-icons/ai';
import { HiOutlineSparkles } from 'react-icons/hi2';
import { Profile } from '../../interfaces/profile';
import { skeleton } from '../../utils';

const IMPACT_STATS = [
  {
    value: '2M+',
    label: 'Unlabeled OCT Volumes',
    icon: <AiOutlineDatabase className="text-xl" />,
  },
  {
    value: '600K+',
    label: 'Labeled Volumes',
    icon: <HiOutlineSparkles className="text-xl" />,
  },
  {
    value: '20+',
    label: 'GPUs in Training',
    icon: <AiOutlineCloudServer className="text-xl" />,
  },
  {
    value: '10+',
    label: 'Machines Orchestrated',
    icon: <AiOutlineCluster className="text-xl" />,
  },
];

const HeroImpactCard = ({
  loading,
  profile,
}: {
  loading: boolean;
  profile: Profile | null;
}) => {
  return (
    <Fragment>
      <div className="card hero-impact-card border border-base-300 shadow-xl overflow-hidden">
        <div className="card-body p-8 sm:p-10">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.16em] uppercase hero-impact-pill mb-4">
            <span className="hero-impact-dot" />
            AI Systems In Production
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold leading-tight text-base-content mb-4">
            {loading
              ? skeleton({ widthCls: 'w-3/4', heightCls: 'h-10', shape: 'rounded-lg' })
              : 'OCT Retina Pipelines to Foundation Models'}
          </h2>

          <p className="text-sm sm:text-base text-base-content/75 max-w-3xl">
            {loading
              ? skeleton({ widthCls: 'w-full', heightCls: 'h-5', shape: 'rounded-lg' })
              : profile?.bio ||
                'Currently developing AI workflows and pipelines for OCT retina images, while working with foundation models for complex ophthalmology pathologies.'}
          </p>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-7">
            {IMPACT_STATS.map((stat) => (
              <div key={stat.label} className="hero-impact-stat rounded-2xl p-4">
                <div className="flex items-center justify-between mb-2 text-primary">
                  <span>{stat.icon}</span>
                </div>
                <div className="text-lg sm:text-xl font-extrabold text-base-content">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-base-content/70 leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeroImpactCard;
