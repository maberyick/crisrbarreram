import { ReactNode } from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineFilePdf } from 'react-icons/ai';
import { ga } from '../../utils';

const QuickLinksBar = ({
  githubUsername,
  linkedin,
  resumeUrl,
  googleAnalyticsId,
}: {
  githubUsername: string;
  linkedin?: string;
  resumeUrl?: string;
  googleAnalyticsId?: string;
}) => {
  const links = [
    {
      key: 'github',
      label: 'GitHub',
      icon: <AiFillGithub className="text-xl" />,
      href: `https://github.com/${githubUsername}`,
    },
    linkedin
      ? {
          key: 'linkedin',
          label: 'LinkedIn',
          icon: <AiFillLinkedin className="text-xl" />,
          href: `https://www.linkedin.com/in/${linkedin}`,
        }
      : null,
    resumeUrl
      ? {
          key: 'resume',
          label: 'Resume',
          icon: <AiOutlineFilePdf className="text-xl" />,
          href: resumeUrl,
        }
      : null,
  ].filter(Boolean) as { key: string; label: string; icon: ReactNode; href: string }[];

  return (
    <div className="quick-links-wrap fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="quick-links-inner">
        {links.map((item) => (
          <a
            key={item.key}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="quick-link-item"
            onClick={() => {
              try {
                if (googleAnalyticsId) {
                  ga.event('select_content', {
                    content_type: 'quick_link',
                    item_id: item.key,
                  });
                }
              } catch (error) {
                console.error(error);
              }
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinksBar;
