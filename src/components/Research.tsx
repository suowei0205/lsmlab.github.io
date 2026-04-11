import { useState, ReactNode } from 'react';
import { Activity, Dna, Microscope, ChevronDown, ChevronUp, Languages } from 'lucide-react';
import { motion } from 'motion/react';

interface ResearchCardProps {
  titleZh: string;
  titleEn: string;
  contentZh: ReactNode;
  contentEn: ReactNode;
  language: 'zh' | 'en';
  icon: any;
  delay: number;
  images?: { src: string; alt: string }[];
}

function ResearchCard({ titleZh, titleEn, contentZh, contentEn, language, icon: Icon, delay, images }: ResearchCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-2xl p-8 group flex flex-col"
    >
      <div className="w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center mb-6 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
        {language === 'zh' ? titleZh : titleEn}
      </h3>
      <h4 className="text-sm font-medium text-primary-600 dark:text-primary-400 mb-4 tracking-wider">
        {language === 'zh' ? titleEn : titleZh}
      </h4>
      
      {images && images.length > 0 && (
        <div className={`mb-6 grid gap-4 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {images.map((img, idx) => (
            <img 
              key={idx} 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-auto rounded-xl object-cover shadow-sm border border-slate-100 dark:border-slate-700" 
            />
          ))}
        </div>
      )}
      
      <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2500px]' : 'max-h-48'}`}>
        <div className="text-justify pb-4">
          {language === 'zh' ? contentZh : contentEn}
        </div>
        
        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-800/90 to-transparent pointer-events-none"></div>
        )}
      </div>
      
      <div className="mt-2 pt-4 border-t border-slate-100 dark:border-slate-700">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors text-sm"
        >
          {isExpanded ? (
            <>{language === 'zh' ? '收起内容' : 'Show Less'} <ChevronUp size={16} /></>
          ) : (
            <>{language === 'zh' ? '阅读全文' : 'Read More'} <ChevronDown size={16} /></>
          )}
        </button>
      </div>
    </motion.div>
  );
}

export default function Research() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [language, setLanguage] = useState<'zh' | 'en'>('zh');

  const card1ContentZh = (
    <>
      <p className="mb-4 text-[15px] leading-relaxed font-medium text-slate-800 dark:text-slate-200">本课题组致力于系统探究在细胞关键连接处动态组装的力敏感蛋白及其超分子复合物的力学-化学耦合调控机制。具体而言，我们综合利用动态单分子、单细胞力学操控与成像技术体系，结合受控全原子分子动力学模拟、生物物理理论建模等，系统解析：</p>
      <ul className="space-y-3 pl-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <li>（1）力敏感蛋白关键承力结构域在构象变化过程中的力学-化学耦合动力学；</li>
        <li>（2）力敏感蛋白超分子复合物中关键承力相互作用的力学-化学耦合动力学；</li>
        <li>（3）翻译后修饰（如磷酸化、氧化等）对力敏感蛋白构象及其相互作用的调控机制。</li>
      </ul>
    </>
  );

  const card1ContentEn = (
    <>
      <p className="mb-4 text-[15px] leading-relaxed font-medium text-slate-800 dark:text-slate-200">A central research interest of our group is to systematically investigate the mechanochemical coupling mechanisms of mechanosensitive proteins and their supramolecular complexes that dynamically assemble at key cellular adhesion sites. Specifically, we aim to employ integrated approaches combining dynamic single-molecule and single-cell manipulation with advanced imaging techniques, together with all-atom molecular dynamics simulations and biophysical theoretical modeling, to systematically elucidate:</p>
      <ul className="space-y-3 pl-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <li>(1) the mechanochemical coupling dynamics of conformational changes in key force-bearing domains of mechanosensitive proteins;</li>
        <li>(2) the mechanochemical coupling dynamics of critical force-bearing interactions within mechanosensitive protein supramolecular complexes; and</li>
        <li>(3) the regulatory mechanisms of post-translational modifications (such as phosphorylation and oxidation) on the conformation and interactions of mechanosensitive proteins.</li>
      </ul>
    </>
  );

  const card2ContentZh = (
    <>
      <p className="mb-4 text-[15px] leading-relaxed font-medium text-slate-800 dark:text-slate-200">本课题组致力于发展从单分子到多细胞的多尺度、高时空精度、动态原位力学操控、成像与分析技术方法，为分子、细胞、多细胞及组织尺度下的力学生物学、力医学与力生物材料等领域提供关键技术支撑，推动前沿探索与突破。</p>
      <ul className="space-y-3 pl-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <li>（1）发展动态单分子力学操控技术，特别是自研磁镊操控系统，对单个目标蛋白/复合物施加精确控制的、生理相关范围的机械力（0-200 pN），并对目标蛋白/复合物的构象变化与互作动态进行长时间（数分钟、数小时到数天）、高时空精度（~1 nm的空间精度，200 Hz-10000 Hz的时间精度）的、温度可控的（21 <sup>o</sup>C—37 <sup>o</sup>C）稳定实时测量。</li>
        <li>（2）发展动态单细胞力学操控技术，特别是自研微玻璃管操控系统，对单个细胞施加精确控制的、生理相关范围的机械力（pN量级至nN量级），结合超分辨活细胞成像显微系统（TIRF，SIM等），实施观测在生理机械力下细胞的行为动态、关键蛋白动态等。或应用于直接定量细胞表面受体/配体结合强度。</li>
        <li>（3）发展光/化学遗传学调控方法，特别是应用于细胞力学生物学研究，在活细胞中对目标蛋白介导之信号通路的激活与抑制进行时空精准调控，与动态单细胞力学操控技术、超分辨活细胞成像显微系统结合，实现精准细胞力学调控。</li>
        <li>（4）发展活细胞内分子力测量技术方法，实现活细胞内目标蛋白/通路分子力的实施测量。与上述动态单分子、单细胞技术结合，推进分子、细胞水平的力学-构象-功能的跨尺度探索。</li>
        <li>（5）发展基于AI的蛋白质力学设计，在蛋白质力调动力学性质深度理解的基础上，推进特殊力学性质蛋白质/蛋白质互作体系的设计与应用。</li>
      </ul>
    </>
  );

  const card2ContentEn = (
    <>
      <p className="mb-4 text-[15px] leading-relaxed font-medium text-slate-800 dark:text-slate-200">Our group is dedicated to developing multi-scale, high spatiotemporal resolution, and dynamic in-situ techniques and methodologies for mechanical manipulation, imaging, and analysis, spanning from single molecules to multicellular systems. We aim to provide key technological support for exploration and breakthroughs in mechanobiology, mechanomedicine, and mechanobiomaterials across molecular, cellular, multicellular, and tissue scales.</p>
      <ul className="space-y-3 pl-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        <li>(1) Developing dynamic single-molecule mechanical manipulation techniques, with a focus on custom-built magnetic tweezers systems. These enable precise application of physiologically relevant mechanical forces (0–200 pN) to individual target proteins or complexes, and allow for long-term (minutes to hours to days), high spatiotemporal resolution (spatial precision ~1 nm; temporal resolution 200 Hz–10 kHz), and temperature-controlled (21 °C–37 °C) stable real-time measurements of conformational dynamics and interaction dynamics.</li>
        <li>(2) Developing dynamic single-cell mechanical manipulation techniques, with a focus on custom-built microglass pipette manipulation systems. These enable precise application of physiologically relevant mechanical forces (pN to nN range) to individual cells. Combined with super-resolution live-cell imaging systems (TIRF, SIM, etc.), they allow real-time observation of cellular behaviors and key protein dynamics under physiological mechanical forces, as well as direct quantification of receptor–ligand binding strengths on cell surfaces.</li>
        <li>(3) Developing optogenetic and chemogenetic regulation methods, with a focus on applications in cellular mechanobiology. These methods enable spatiotemporally precise activation and inhibition of signaling pathways mediated by target proteins in living cells. When integrated with dynamic single-cell mechanical manipulation techniques and super-resolution live-cell imaging systems, they achieve precise cellular mechanical regulation.</li>
        <li>(4) Developing methods for intracellular molecular force measurement, enabling real-time measurement of mechanical forces experienced by target proteins or pathway components within living cells. When integrated with the dynamic single-molecule and single-cell techniques described above, these approaches facilitate cross-scale exploration of mechanics–conformation–function relationships at the molecular and cellular levels.</li>
        <li>(5) Developing AI-based mechanical design of proteins. Building on a deep understanding of the mechanodynamic properties of proteins, this direction aims to advance the design and application of proteins and protein–protein interaction systems with tailored mechanical properties.</li>
      </ul>
    </>
  );

  return (
    <section id="research" className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            研究方向 <span className="text-primary-600 dark:text-primary-400 font-light">Research Areas</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
          
          <div className="mt-8 text-left text-slate-700 dark:text-slate-300 max-w-5xl mx-auto leading-relaxed text-sm md:text-base">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                <Languages size={16} />
                {language === 'zh' ? 'English' : '中文'}
              </button>
            </div>
            <div className={`relative overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2500px]' : 'max-h-32 md:max-h-24'}`}>
              {language === 'zh' ? (
                <>
                  <p className="mb-4">
                    <strong className="font-medium text-slate-800 dark:text-slate-200">力学生物学（Mechanobiology）</strong>是一门融合生物学、物理学、医学、工程学与材料科学的新兴前沿交叉学科。近年来的研究表明，细胞黏附、迁移与分化，组织生长、修复与维持，胚胎发育，肿瘤生长与转移，免疫激活等一系列关键生理病理过程，均受到力学信号的调控。力学生物学旨在阐明力学信号在分子、亚细胞、细胞、组织、器官等不同层次对生命体行为进行调控的机制，并基于这些机制理解推动相关生物医学应用。
                  </p>
                  <p className="mb-4">
                    力学生物学的<strong className="font-medium text-slate-800 dark:text-slate-200">物质基础</strong>是一系列<strong className="font-medium text-slate-800 dark:text-slate-200">力敏感生物大分子及其通过动态相互作用形成的超分子复合物</strong>。这些力敏感分子与复合物通常动态富集于细胞的关键连接部位，如细胞间连接（包括胞间连接与紧密连接等）、细胞与胞外基质间的连接（如黏附连接等）、细胞骨架内部及骨架之间的连接，以及细胞骨架与细胞核等细胞器之间的连接。<strong className="font-medium text-slate-800 dark:text-slate-200">这些力敏感大分子及其复合物在特定时空的构象变化与相互作用的力学—化学耦合动态，构成了生命体在亚细胞、细胞、组织与器官等层次的力学功能涌现的分子基础。</strong>
                  </p>
                  <p className="mb-4">
                    本课题组聚焦生命医学问题，以“<strong className="font-medium text-slate-800 dark:text-slate-200">生物大分子构象与相互作用的力学—化学耦合动态调控机制</strong>”为核心研究方向，积极探索其在生物医学中的潜在应用。研究注重物理与生物、医学的交叉融合，综合运用<strong className="font-medium text-slate-800 dark:text-slate-200">动态单分子与单细胞力学操控及成像技术</strong>，并结合分子动力学模拟、高分子物理建模等手段，从而<strong className="font-medium text-slate-800 dark:text-slate-200">在实验与理论上协同理解生物大分子构象与相互作用的力学—化学耦合动态调控</strong>，进而<strong className="font-medium text-slate-800 dark:text-slate-200">逐步揭示在生理与病理过程中发挥关键作用的蛋白质、核酸等生物大分子功能实现的物理机制</strong>。
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4">
                    <strong className="font-medium text-slate-800 dark:text-slate-200">Mechanobiology</strong> is an emerging frontier interdisciplinary field that integrates biology, physics, medicine, and engineering. Recent studies have revealed that a range of key physiological and pathological processes—including cell adhesion, migration, and differentiation; tissue growth, repair, and homeostasis; embryonic development; tumor growth and metastasis; and immune activation—are all regulated by mechanical signals. Mechanobiology aims to elucidate the mechanisms by which mechanical signals regulate biological behaviors across molecular, subcellular, cellular, tissue, and organ levels, and to leverage this mechanistic understanding to advance biomedical applications.
                  </p>
                  <p className="mb-4">
                    The material basis of mechanobiology lies in a class of mechanosensitive biomacromolecules and the supramolecular complexes formed through their dynamic interactions. These mechanosensitive molecules and complexes are often dynamically enriched at key cellular junction sites, such as cell–cell junctions (including intercellular junctions and tight junctions), cell–extracellular matrix adhesions (e.g., focal adhesions), intra- and inter-cytoskeletal connections, and the interfaces between the cytoskeleton and organelles such as the nucleus. The mechano-chemical coupling that governs the conformational changes and interaction dynamics of these mechanosensitive molecules and complexes in specific spatiotemporal contexts constitutes the molecular foundation for the emergence of mechanical functions across subcellular, cellular, tissue, and organ levels in living systems.
                  </p>
                  <p>
                    Our research group focuses on addressing fundamental questions in biomedical science, with a central emphasis on the mechano-chemical coupling mechanisms underlying the conformational dynamics and interactions of biomacromolecules. We aim to explore the potential biomedical applications arising from this mechanistic understanding. Our work is inherently interdisciplinary, integrating physics, biology, and medicine. To this end, we employ a combination of techniques including single-molecule and single-cell mechanical manipulation and imaging, alongside molecular dynamics simulations and polymer physics-based theoretical modeling. Through this integrated experimental and theoretical approach, we seek to elucidate the physical principles governing the functional realization of key proteins, nucleic acids, and other biomacromolecules that play critical roles in physiological and pathological processes.
                  </p>
                </>
              )}

              {/* Gradient overlay when collapsed */}
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 dark:from-slate-900 to-transparent pointer-events-none"></div>
              )}
            </div>
            
            <div className="flex justify-center mt-4 mb-12">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-1 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-primary-600 dark:text-primary-400 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium transition-colors text-sm"
              >
                {isExpanded ? (
                  <>收起内容 Show Less <ChevronUp size={16} /></>
                ) : (
                  <>阅读全文 Read More <ChevronDown size={16} /></>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ResearchCard
            titleZh="探究细胞的力学—化学耦合调控分子机制"
            titleEn="Investigating the Mechanochemical Coupling Mechanisms of Cells"
            contentZh={card1ContentZh}
            contentEn={card1ContentEn}
            language={language}
            icon={Dna}
            delay={0}
            images={[
              { src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/research/11.jpg?raw=true', alt: 'Research Image 1' }
            ]}
          />
          <ResearchCard
            titleZh="发展单分子、单细胞力学操控、成像、分析技术"
            titleEn="Developing Single-Molecule and Single-Cell Mechanical Manipulation, Imaging, and Analysis Technologies"
            contentZh={card2ContentZh}
            contentEn={card2ContentEn}
            language={language}
            icon={Microscope}
            delay={0.1}
            images={[
              { src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/research/21.png?raw=true', alt: 'Research Image 2' },
              { src: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/research/22.png?raw=true', alt: 'Research Image 3' }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
