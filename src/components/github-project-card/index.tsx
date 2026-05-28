import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar, AiOutlineGithub } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  googleAnalyticsId,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="card shadow-md card-sm bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <a
        className="card shadow-md card-sm bg-base-100 cursor-pointer border border-base-300 hover:border-primary/40 transition-all duration-300 hover:-translate-y-1"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticsId) {
              ga.event('Click project', { project: item.name });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="inline-flex w-fit text-[10px] tracking-[0.15em] uppercase font-semibold rounded-full px-3 py-1 mb-3 bg-primary/10 text-primary border border-primary/20">
              Open Source
            </div>
            <div className="flex items-center truncate mb-2">
              <div className="card-title text-lg tracking-wide flex text-base-content">
                <MdInsertLink className="my-auto mr-1 opacity-70" />
                <span>{item.name}</span>
              </div>
            </div>
            <p className="mb-5 mt-1 text-base-content/70 text-sm leading-relaxed">
              {item.description || 'Repository and implementation details.'}
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-2 text-xs text-base-content truncate">
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-full px-2.5 py-1 bg-base-200 border border-base-300">
                <AiOutlineStar className="mr-1" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="inline-flex items-center rounded-full px-2.5 py-1 bg-base-200 border border-base-300">
                <AiOutlineFork className="mr-1" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-full px-2.5 py-1 bg-base-200 border border-base-300">
                <div
                  className="w-2.5 h-2.5 rounded-full mr-1"
                  style={{ backgroundColor: getLanguageColor(item.language) }}
                />
                <span>{item.language || 'Code'}</span>
              </span>
              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-primary border border-primary/25 bg-primary/10">
                View Repo
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="card bg-base-200 shadow-xl border border-base-300">
          <div className="card-body p-8">
            {/* Enhanced Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-3">
                {loading ? (
                  skeleton({
                    widthCls: 'w-12',
                    heightCls: 'h-12',
                    className: 'rounded-xl',
                  })
                ) : (
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
                    <AiOutlineGithub className="text-2xl" />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-bold text-base-content truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-48', heightCls: 'h-8' })
                      : header}
                  </h3>
                  <div className="text-base-content/60 text-xs sm:text-sm mt-1 truncate">
                    {loading
                      ? skeleton({ widthCls: 'w-32', heightCls: 'h-4' })
                      : `Showcasing ${githubProjects.length} featured repositories`}
                  </div>
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {loading ? renderSkeleton() : renderProjects()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
