import { useMemo, useState } from 'react';
import { AiOutlineHistory } from 'react-icons/ai';
import { SanitizedExperience } from '../../interfaces/sanitized-config';
import { skeleton } from '../../utils';

const getYear = (value: string): string => {
  const match = value.match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : value;
};

const CareerTimelineCard = ({
  experiences,
  loading,
}: {
  experiences: SanitizedExperience[];
  loading: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const safeExperiences = useMemo(
    () => experiences.filter((item) => item.company || item.position),
    [experiences],
  );

  const active = safeExperiences[activeIndex] || safeExperiences[0];

  if (!loading && safeExperiences.length === 0) {
    return null;
  }

  const renderLoading = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 space-y-2">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="rounded-xl border border-base-300 bg-base-100 p-3">
              {skeleton({ widthCls: 'w-20', heightCls: 'h-4', shape: 'rounded-md' })}
              <div className="mt-2">
                {skeleton({ widthCls: 'w-full', heightCls: 'h-5', shape: 'rounded-md' })}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-2 rounded-2xl border border-base-300 bg-base-100 p-6">
          {skeleton({ widthCls: 'w-28', heightCls: 'h-4', shape: 'rounded-md' })}
          <div className="mt-3">{skeleton({ widthCls: 'w-2/3', heightCls: 'h-8', shape: 'rounded-md' })}</div>
          <div className="mt-2">{skeleton({ widthCls: 'w-1/2', heightCls: 'h-6', shape: 'rounded-md' })}</div>
          <div className="mt-6">{skeleton({ widthCls: 'w-full', heightCls: 'h-20', shape: 'rounded-lg' })}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="flex items-center space-x-3 mb-6">
            {loading ? (
              skeleton({ widthCls: 'w-12', heightCls: 'h-12', className: 'rounded-xl' })
            ) : (
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                <AiOutlineHistory className="text-2xl" />
              </div>
            )}
            <div>
              <h3 className="text-base sm:text-lg font-bold text-base-content">
                {loading ? skeleton({ widthCls: 'w-56', heightCls: 'h-8' }) : 'Career Timeline'}
              </h3>
              <div className="text-base-content/60 text-xs sm:text-sm mt-1">
                {loading
                  ? skeleton({ widthCls: 'w-40', heightCls: 'h-4' })
                  : `Interactive view of ${safeExperiences.length} career milestones`}
              </div>
            </div>
          </div>

          {loading || !active ? (
            renderLoading()
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1 space-y-2 timeline-list">
                {safeExperiences.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={`${item.company}-${item.position}-${idx}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`w-full text-left rounded-xl border p-3 timeline-item-btn transition-all ${
                        isActive
                          ? 'border-primary bg-primary/10 is-active'
                          : 'border-base-300 bg-base-100 hover:border-primary/40'
                      }`}
                    >
                      <span className="timeline-marker" aria-hidden="true" />
                      <div className="text-xs font-semibold tracking-wide uppercase text-base-content/60">
                        {getYear(item.from)} - {item.to.toLowerCase() === 'present' ? 'Now' : getYear(item.to)}
                      </div>
                      <div className="mt-1 font-bold text-sm text-base-content line-clamp-2">
                        {item.position || 'Role'}
                      </div>
                      <div className="text-xs text-base-content/70 line-clamp-1">{item.company}</div>
                    </button>
                  );
                })}
              </div>

              <div className="lg:col-span-2 rounded-2xl border border-base-300 bg-base-100 p-6">
                <div className="inline-flex w-fit text-[10px] tracking-[0.15em] uppercase font-semibold rounded-full px-3 py-1 mb-3 bg-primary/10 text-primary border border-primary/20">
                  Active Milestone
                </div>
                <h4 className="text-xl sm:text-2xl font-extrabold text-base-content leading-tight">
                  {active.position || 'Role'}
                </h4>
                <div className="text-base-content/70 font-medium mt-1">{active.company || 'Organization'}</div>
                <div className="mt-4 inline-flex items-center rounded-full px-3 py-1 text-xs border border-base-300 bg-base-200 text-base-content/70">
                  {active.from} - {active.to}
                </div>
                <p className="mt-5 text-sm text-base-content/75 leading-relaxed">
                  Focused on production-grade AI systems, model development, and cross-functional delivery in biomedical imaging and health data environments.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerTimelineCard;
