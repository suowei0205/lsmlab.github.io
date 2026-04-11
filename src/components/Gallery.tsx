import { motion } from 'motion/react';

const galleryItems = [
  /*{
    src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/gallery/1.jpg?raw=true',
    alt: '课题组日常 1',
    span: 'col-span-1 md:col-span-2 row-span-2'
  },
  {
    src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/gallery/2.gif?raw=true',
    alt: '实验动图',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/gallery/3.jpg?raw=true',
    alt: '课题组日常 3',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/gallery/4.jpg?raw=true',
    alt: '课题组日常 4',
    span: 'col-span-1 md:col-span-2 row-span-1'
  },
  {
    src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/gallery/5.jpg?raw=true',
    alt: '课题组日常 5',
    span: 'col-span-1 row-span-1'
  },
  {
    src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/gallery/6.jpg?raw=true',
    alt: '课题组日常 6',
    span: 'col-span-1 row-span-1'
  }*/
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            课题组日常 <span className="text-primary-600 dark:text-primary-400 font-light">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-400 max-w-3xl mx-auto">
            记录我们的科研生活与团队活动。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800 ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/gallery${index}/800/600`;
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-medium p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
