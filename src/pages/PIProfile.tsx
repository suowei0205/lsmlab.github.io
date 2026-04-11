import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Globe, MapPin, GraduationCap, Briefcase, Award, FileText, Scroll } from 'lucide-react';

export default function PIProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-900">
      <Navbar activeSection="team" />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Header */}
          <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-md border border-slate-100 dark:border-slate-700 overflow-hidden mb-8">
            <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-800"></div>
            <div className="px-8 pb-8">
              <div className="relative flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6 gap-6">
                <div className="w-32 rounded-lg overflow-hidden shadow-lg bg-white">
                  <img 
                    src="https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/leshimin.jpg?raw=true" 
                    alt="Prof. Le Shimin" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="flex-1 pt-2 md:pt-0">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    乐世敏 <span className="text-xl font-normal text-slate-700 dark:text-slate-400 ml-2">Prof. Le Shimin</span>
                  </h1>
                  <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                    教授 / 博士生导师 Professor / Ph.D. Supervisor
                  </p>
                  <p className="text-slate-700 dark:text-slate-400 mt-1">
                    厦门大学物理科学与技术学院
                  </p>
                </div>
                <div className="flex gap-3 mt-4 md:mt-0">
                  <a href="https://faculty.xmu.edu.cn/LSM1234567/en/index.htm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                    <Globe size={18} />
                    <span className="hidden sm:inline">Website</span>
                  </a>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="md:col-span-2 space-y-8">
                  {/* Biography */}
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center text-primary-600 dark:text-primary-400">
                        <FileText size={20} />
                      </span>
                      个人简介 Biography
                    </h2>
                    <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
                      <p>
                        乐世敏，厦门大学物理科学与技术学院教授，博士生导师。主要从事单分子生物物理与力学生物学研究。
                        利用单分子操纵和单分子荧光成像技术，研究生物大分子在力作用下的结构与功能变化，
                        揭示细胞机械感知与信号传导的分子机制。
                      </p>
                    </div>
                  </section>

                  {/* Research Interests */}
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        <MicroscopeIcon size={20} />
                      </span>
                      研究兴趣 Research Interests
                    </h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        '单分子与单细胞生物物理 (Single-molecule & Single-cell Biophysics)',
                        '软凝聚态物理 (Soft Condensed Matter Physics)',
                        '力学生物学 (Mechanobiology)',
                        '蛋白质折叠与动力学 (Protein Folding & Dynamics)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700">
                          <div className="w-2 h-2 rounded-full bg-primary-500"></div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Research Grants */}
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
                        <Scroll size={20} />
                      </span>
                      科研基金及项目 Research Grants & Projects
                    </h2>
                    <ul className="space-y-3">
                      {[
                        '国家级高层次青年引进人才计划',
                        '国家自然科学基金面上项目，2023.01-2026.12，主持',
                        '国家自然科学基金青年项目，2023.01-2025.12，主持',
                        '厦门大学南强青年拔尖人才支持计划（A类）',
                        '厦门大学校长基金，2022.01-2024.12，主持'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-100 dark:border-slate-700">
                          <div className="w-2 h-2 rounded-full bg-primary-500 mt-2 shrink-0"></div>
                          <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                  
                  {/* Selected Publications */}
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                        <Award size={20} />
                      </span>
                      代表性论文 Selected Publications
                    </h2>
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                          Implementing Optogenetic Modulation in Mechanotransduction, 
                        </h3> 
                        <p className="text-sm text-slate-700 dark:text-slate-400 mb-2">
                          Phys. Rev. X, 10, 021001 (2020)
                        </p>
                        <a href="https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.021001" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                          View Paper
                        </a>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                          Direct Single-molecule Quantification Reveals Surprisingly High Mechanical Stability of Vinculin--Talin/alpha-Catenin Linkages
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400 mb-2">
                          Sci. Adv., 5 (12), eaav2720 (2019)
                        </p>
                        <a href="https://www.science.org/doi/10.1126/sciadv.aav2720" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                          View Paper
                        </a>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                        <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                          Phosphorylation Reduces the Mechanical Stability of alpha-catenin/beta-catenin Complex, Angew
                        </h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400 mb-2">
                          Chem. Int. Ed, 58(51) 18663-18669 (2019)
                        </p>
                        <a href="https://onlinelibrary.wiley.com/doi/full/10.1002/anie.201911383" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                          View Paper
                        </a>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="space-y-8">
                  {/* Contact Info */}
                  <section className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4">联系方式 Contact</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <MapPin size={20} className="text-slate-600 mt-1 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">地址 Address</p>
                          <p className="text-sm text-slate-700 dark:text-slate-400">
                            福建省厦门市思明区曾厝垵西路9号<br/>
                            海韵园物理大楼 633<br/>
                            邮编：361005
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Mail size={20} className="text-slate-600 mt-1 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-slate-900 dark:text-white">邮箱 Email</p>
                          <span className="text-sm text-primary-600 dark:text-primary-400">
                            leshimin@xmu.edu.cn
                          </span>
                        </div>
                      </li>
                    </ul>
                  </section>

                  {/* Education */}
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400">
                        <GraduationCap size={20} />
                      </span>
                      教育经历 Education
                    </h2>
                    <div className="space-y-6 ml-3 pl-6 relative">
                      <div className="absolute left-0 top-3 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-700"></div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-primary-500"></div>
                        <h3 className="font-bold text-slate-900 dark:text-white">力学生物学研究所 博士 Ph.D.</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400">新加坡国立大学 (National University of Singapore)</p>
                        <p className="text-xs text-slate-700 mt-1">2010.08-2015.10</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-600"></div>
                        <h3 className="font-bold text-slate-900 dark:text-white">物理系 物理学学士 B.S.</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400">厦门大学 (Xiamen University)</p>
                        <p className="text-xs text-slate-700 mt-1">2006.09-2010.07</p>
                      </div>
                    </div>
                  </section>

                  {/* Work Experience */}
                  <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
                        <Briefcase size={20} />
                      </span>
                      工作经历 Experience
                    </h2>
                    <div className="space-y-6 ml-3 pl-6 relative">
                      <div className="absolute left-0 top-3 bottom-0 w-[2px] bg-slate-100 dark:bg-slate-700"></div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-primary-500"></div>
                        <h3 className="font-bold text-slate-900 dark:text-white">物理系 教授，博士生导师</h3>
                        <h3 className="font-bold text-slate-900 dark:text-white">Professor, Ph.D. Supervisor</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400">厦门大学 (Xiamen University)</p>
                        <p className="text-xs text-slate-700 mt-1">2022.10 - Present</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-600"></div>
                        <h3 className="font-bold text-slate-900 dark:text-white">物理系 副教授，博士生导师 </h3>
                        <h3 className="font-bold text-slate-900 dark:text-white">Associate Professor, Ph.D. Supervisor</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400">厦门大学 (Xiamen University)</p>
                        <p className="text-xs text-slate-700 mt-1">2022.04-2022.09</p>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-600"></div>
                        <h3 className="font-bold text-slate-900 dark:text-white">物理系 博士后研究员</h3>
                        <h3 className="font-bold text-slate-900 dark:text-white"> Research Fellow</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-400">新加坡国立大学 (National University of Singapore)</p>
                        <p className="text-xs text-slate-700 mt-1">2016.02-2022.02</p>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

function MicroscopeIcon({ size, className }: { size?: number, className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}
