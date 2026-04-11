import { Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const newsItems = [
  {
    date: '2025-09-01',
    title: '欢迎2026级新生加入实验室',
    summary: '热烈欢迎加入 Laboratory of Single-molecule and Single-cell Mechanobiology 大家庭！',
    tag: 'Team'
  }
];

interface NewsProps {
  limit?: number;
  showAll?: boolean;
}

export default function News({ limit, showAll = false }: NewsProps) {
  const displayedNews = showAll ? newsItems : (limit ? newsItems.slice(0, limit) : newsItems);

  return (
    <section id="news" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              新闻动态 <span className="text-primary-600 dark:text-primary-400 font-light">Latest News</span>
            </h2>
            <div className="w-24 h-1 bg-primary-600 rounded-full"></div>
          </div>
          {!showAll && limit && limit < newsItems.length && (
            <Link to="/news" className="hidden md:inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-300 font-medium transition-colors">
              查看全部新闻 <ChevronRight size={20} />
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedNews.map((news, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-500/50 bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white dark:bg-slate-700 border border-slate-100 dark:border-slate-600 flex flex-col items-center justify-center text-center shadow-sm">
                  <span className="text-xs font-medium text-slate-700 dark:text-slate-300 uppercase">
                    {new Date(news.date).toLocaleString('en-US', { month: 'short' })}
                  </span>
                  <span className="text-xl font-bold text-primary-600 dark:text-primary-400 leading-none mt-1">
                    {new Date(news.date).getDate()}
                  </span>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    {news.tag}
                  </span>
                  <span className="flex items-center text-xs text-slate-700 dark:text-slate-400">
                    <Calendar size={12} className="mr-1" /> {news.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  <a href="#">{news.title}</a>
                </h3>
                <p className="text-sm text-slate-700 dark:text-slate-400 line-clamp-2">
                  {news.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && limit && limit < newsItems.length && (
          <div className="mt-8 text-center md:hidden">
            <Link to="/news" className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium">
              查看全部新闻 <ChevronRight size={20} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
