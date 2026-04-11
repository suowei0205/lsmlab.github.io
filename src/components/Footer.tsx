import { Github, Twitter, MapPin, Mail, QrCode } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const [showQR, setShowQR] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-950 pt-16 pb-8 border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
          {/* Brand */}
          <div className="flex-1 max-w-sm">
            <button onClick={() => handleNavClick('home')} className="text-2xl font-bold text-primary-600 dark:text-primary-500 tracking-tight mb-4 inline-block cursor-pointer">
              LSM <span className="text-slate-900 dark:text-white">Lab</span>
            </button>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
              Laboratory of Single-molecule and Single-cell Mechanobiology<br/>
              单分子与单细胞力学生物学实验室<br/>
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1 max-w-xl md:flex md:justify-end">
            <div>
              <h3 className="text-slate-900 dark:text-white font-bold mb-4 uppercase tracking-wider text-sm">联系我们 Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin size={20} className="text-primary-600 dark:text-primary-500 mr-3 shrink-0 mt-0.5" />
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    福建省厦门市思明区厦门大学<br/>
                    曾厝垵西路9号 海韵园 物理楼 633室<br/>
                    Physics Building 633, Haiyun, Xiamen University, 9 West Zengcuoan Street, Siming District, Xiamen, Fujian 361005 <br/>
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail size={20} className="text-primary-600 dark:text-primary-500 mr-3 shrink-0" />
                  <a href="mailto:leshimin@xmu.edu.cn" className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm">
                    leshimin@xmu.edu.cn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-slate-600 dark:text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LSM Lab. All rights reserved.
          </p>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowQR(false)}>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl max-w-sm w-full shadow-2xl transform transition-all" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 text-center">关注实验室公众号</h3>
            <div className="aspect-square bg-slate-50 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 border border-slate-100 dark:border-slate-700">
              {/* Placeholder for actual QR code */}
              <QrCode size={120} className="text-slate-600" />
            </div>
            <p className="text-sm text-center text-slate-700 dark:text-slate-400 mb-6">
              扫描二维码获取最新科研动态与招生信息
            </p>
            <button 
              onClick={() => setShowQR(false)}
              className="w-full py-2 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-200 dark:hover:border-slate-500 text-slate-900 dark:text-white rounded-lg font-medium transition-all duration-300"
            >
              关闭 Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
