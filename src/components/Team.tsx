import { useState } from 'react';
import { Mail, Globe, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    category: '导师 PI',
    members: [
      {
        name: '乐世敏',
        nameEn: 'Prof. Le',
        role: '教授 \\ 博士生导师',
        research: '单分子力学生物学',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/leshimin.jpg?raw=true',
        email: 'leshimin@xmu.edu.cn',
        website: 'https://www.leshimin.org/Home.html',
        profileLink: '/pi-profile'
      }
    ]
  },
  {
    category: '博士生 Ph.D Candidates',
    members: [
      {
        name: '张宇航',
        nameEn: 'ZHANG Yuhang',
        role: '2023级',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/zhangyuhang.jpg?raw=true',
        //email: '',
      },
      {
        name: '王昱凯',
        nameEn: 'WANG Yukai',
        role: '2024级',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/wangyukai.png?raw=true',
        //email: '',
      },
      {
        name: '梁洋洋',
        nameEn: 'LIANG Yangyang',
        role: '2024级',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/liangyangyang.jpg?raw=true',
       // email: '',
      },
      {
        name: '叶嘉清',
        nameEn: 'YE Jiaqing',
        role: '2025级',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/yejiaqing.png?raw=true',
       // email: '',
      }
      
    ]
  },
  {
    category: '硕士生 Master Students',
    members: [
      {
        name: '贺嘉琪',
        nameEn: 'HE Jiaqi',
        role: '2024级',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/hejiaqi.jpg?raw=true',
      },
    ]
  },
  {
    category: '本科生 Undergraduate Students',
    members: [
      {
        name: '甄学佶',
        nameEn: 'ZHEN Xuejie',
        role: '2022级强基班',
        //research:
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/zhenxuejie.jpg?raw=true',
      },
      {
        name: '林斯玮',
        nameEn: 'LIN Siwei',
        role: '2022级强基班',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/linsiwei.jpg?raw=true',
      },
      {
        name: '孙萱仪',
        nameEn: 'SUN Xuanyi',
        role: '2022级拔尖班',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/sunxuanyi.jpg?raw=true',
      },
      {
        name: '许烨',
        nameEn: 'XU Ye',
        role: '2022级物理',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/xuye.jpg?raw=true',
      }
    ]
  },
  {
    category: '校友 Alumni',
    members: [
      {
        name: '尚菲',
        nameEn: 'SHANG Fei',
        role: '2021级 联合培养 博士',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/shangfei.jpg?raw=true',
        //email: '',
      },
      {
        name: '游珑凌',
        nameEn: 'YOU Longling',
        role: '2022级 硕士',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/youlongling.jpg?raw=true',
      },
      /* {
        name: '张蔚华',
        nameEn: 'ZHANG Weihua',
        role: '2023级 硕士生',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/zhangweihua.jpg?raw=true',
      }, */
      {
        name: '周乐',
        nameEn: 'ZHOU Le',
        role: '2021级 学士',
        //research: '',
        image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/team/zhoule.png?raw=true',
      }
    ]
  }
];

export default function Team() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="team" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            团队成员 <span className="text-primary-600 dark:text-primary-400 font-light">Our Team</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {teamMembers.map((group, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeTab === index
                  ? 'bg-primary-600 border-primary-600 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-200 dark:hover:border-slate-500'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Members Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`grid gap-8 ${
            activeTab === 0 
              ? 'grid-cols-1 max-w-2xl mx-auto' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          }`}
        >
          {teamMembers[activeTab].members.map((member, index) => {
            const isPI = activeTab === 0;
            const CardContent = () => (
              <>
                <div className={`relative mx-auto mb-6 overflow-hidden border border-white dark:border-slate-800 shadow-lg ${
                  isPI ? 'w-56 h-auto aspect-[3/4] rounded-2xl' : 'w-32 h-32 rounded-2xl'
                }`}>
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full group-hover:scale-110 transition-transform duration-500 object-cover bg-slate-50 dark:bg-slate-900"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className={`${isPI ? 'text-2xl' : 'text-xl'} font-bold text-slate-900 dark:text-white`}>
                  {member.name} <span className="text-sm font-normal text-slate-700 dark:text-slate-400 ml-1">{member.nameEn}</span>
                </h3>
                <p className={`${isPI ? 'text-base' : 'text-sm'} font-medium text-primary-600 dark:text-primary-400 mt-1 mb-3`}>
                  {member.role}
                </p>
                {member.research && (
                  <p className="text-sm text-slate-700 dark:text-slate-400 mb-6 line-clamp-2">
                    研究方向: {member.research}
                  </p>
                )}
                
                {!member.profileLink && (
                  <div className="flex justify-center gap-3">
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors">
                        <Mail size={16} />
                      </a>
                    )}
                    {member.website && (
                      <a href={member.website} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors">
                        <Globe size={16} />
                      </a>
                    )}
                    {member.github && (
                      <a href={member.github} className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900 dark:hover:text-primary-400 transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                )}
              </>
            );

            return member.profileLink ? (
              <Link 
                key={index} 
                to={member.profileLink}
                onClick={() => window.scrollTo(0, 0)}
                className="glass-card rounded-2xl overflow-hidden group text-center p-6 block hover:shadow-lg transition-all duration-300"
              >
                <CardContent />
              </Link>
            ) : (
              <div key={index} className="glass-card rounded-2xl overflow-hidden group text-center p-6">
                <CardContent />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
