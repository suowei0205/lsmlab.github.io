import { GraduationCap, Users, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function JoinUs() {
  return (
    <section id="join" className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-40"
        style={{ 
          backgroundImage: 'url("https://github.com/suowei0205/lsmlab.github.io/blob/main/images/join-bg.jpg?raw=true")',
        }}
      ></div>
      <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            加入我们 <span className="text-primary-600 dark:text-primary-400 font-light">Join Us</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            课题组每年招收硕士生1-3名，博士生1-2名，以及本科生1-5名。课题组计划招聘博士后1-3名。热诚欢迎有志于力学生物学研究的同学加入。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card bg-white/80 dark:bg-slate-800/80 p-8 rounded-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">专业背景需求</h3>
            </div>
            <ul className="space-y-4 text-slate-700 dark:text-slate-300">
              <li className="flex items-start">
                <ArrowRight size={18} className="mr-2 mt-1 text-primary-600 dark:text-primary-400 shrink-0" />
                <span><strong className="text-slate-900 dark:text-white">在物理学、生物学、基础医学、化学、工程、材料科学等理工科专业已经或即将取得学士、硕士或博士学位。 </strong> 具有细胞生物学、生物化学或生物物理经验者优先。</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card bg-white/80 dark:bg-slate-800/80 p-8 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">申请方式</h3>
              </div>
              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                请将个人简历（包含教育背景、项目经验、发表论文等）、成绩单以及简短的研究计划发送至以下邮箱。邮件标题请注明：<br/>
                <span className="font-mono bg-slate-50 dark:bg-slate-900 px-2 py-1 rounded mt-2 inline-block border border-slate-100 dark:border-slate-700">
                  [申请类型]-[姓名]-[学校]
                </span>
              </p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
              <div className="flex items-center gap-4">
                <Mail size={32} className="text-primary-600 dark:text-primary-400" />
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-1">联系邮箱 Contact Email</p>
                  <a href="mailto:leshimin@xmu.edu.cn" className="text-xl font-bold text-slate-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    leshimin@xmu.edu.cn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
