import { AiOutlineEye, AiOutlineCluster, AiOutlineExperiment } from 'react-icons/ai';
import { ga, skeleton } from '../../utils';

const CASE_STACK = [
  'Foundation Models',
  'OCT Retina Imaging',
  'Distributed Training',
  'PyTorch',
  'MLOps',
  'Clinical AI Workflow',
];

const OCTCaseStudyCard = ({
  loading,
  googleAnalyticsId,
}: {
  loading: boolean;
  googleAnalyticsId?: string;
}) => {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="card bg-base-200 shadow-xl border border-base-300">
        <div className="card-body p-8">
          <div className="inline-flex w-fit text-[10px] tracking-[0.15em] uppercase font-semibold rounded-full px-3 py-1 mb-3 bg-primary/10 text-primary border border-primary/20">
            Featured Clinical AI Case Study
          </div>

          <h3 className="text-xl sm:text-3xl font-extrabold text-base-content leading-tight">
            {loading
              ? skeleton({ widthCls: 'w-3/4', heightCls: 'h-10', shape: 'rounded-lg' })
              : 'OCT Retina AI Pipeline + Foundation Model Development'}
          </h3>

          <p className="mt-3 text-sm sm:text-base text-base-content/75 leading-relaxed max-w-3xl">
            {loading
              ? skeleton({ widthCls: 'w-full', heightCls: 'h-5', shape: 'rounded-lg' })
              : 'Designing and implementing end-to-end AI workflow infrastructure for OCT retina imaging, including data pipeline orchestration, model training workflows, and foundation-model experimentation for complex ophthalmology pathologies.'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6">
            <div className="rounded-xl border border-base-300 bg-base-100 p-4">
              <div className="text-primary mb-2">
                <AiOutlineEye className="text-xl" />
              </div>
              <div className="text-xs uppercase tracking-wide text-base-content/60">Domain</div>
              <div className="font-bold text-sm text-base-content mt-1">Ophthalmology AI</div>
            </div>
            <div className="rounded-xl border border-base-300 bg-base-100 p-4">
              <div className="text-primary mb-2">
                <AiOutlineCluster className="text-xl" />
              </div>
              <div className="text-xs uppercase tracking-wide text-base-content/60">Focus</div>
              <div className="font-bold text-sm text-base-content mt-1">Workflow + Pipeline Engineering</div>
            </div>
            <div className="rounded-xl border border-base-300 bg-base-100 p-4">
              <div className="text-primary mb-2">
                <AiOutlineExperiment className="text-xl" />
              </div>
              <div className="text-xs uppercase tracking-wide text-base-content/60">Modeling</div>
              <div className="font-bold text-sm text-base-content mt-1">Foundation Model Exploration</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mt-6">
            {CASE_STACK.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full px-2.5 py-1 text-xs border border-primary/25 bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://crisbarrera.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase border border-primary/30 bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
              onClick={() => {
                try {
                  if (googleAnalyticsId) {
                    ga.event('select_content', {
                      content_type: 'case_study',
                      item_id: 'oct_retina_foundation_models',
                    });
                  }
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              Explore Current Focus
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OCTCaseStudyCard;
