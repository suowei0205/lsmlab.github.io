import { FileText, Github, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const publications = [
  {
    title: 'Mechanically weak and highly dynamic state of mechanosensitive titin Ig domains induced by proline isomerization',
    authors: ['Y Wang', 'J Ye', 'X Liu', 'Z Zhang', 'F Shang', 'X Qi', 'Y Zhang', 'J Du', 'H Sun', 'J Xu', 'H Chen*', 'M Yu*', 'S Le*'],
    venue: 'Nature Communications 16(1):2771',
    year: 2025,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/s41467-025-57989-y' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/s41467-025-57989-y.png?raw=true'
  },
  {
    title: 'Anomalous Force-Dependent Transition Rates Unveil Dual Pathways in Folding and Unfolding Dynamics of Acyl-coenzyme A Binding Protein',
    authors: ['Y Zhang', 'Z Zhang', 'H Sun', 'Z Xue', 'Y Wang', 'Z Guo', 'S Le*', 'H Chen*'],
    venue: 'The Journal of Physical Chemistry Letters 16, 2479-2486',
    year: 2025,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.4c02973' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acs.jpclett.4c02973.png?raw=true'
  },
  {
    title: 'Effect of ssDNA ligand in modulating the folding and unfolding dynamics of cold shock protein BcCsp',
    authors: ['Z Xue', 'P Yu', 'Y Zhang', 'Z Zhang', 'H Sun', 'Z Hou', 'H Hong', 'S Le*', 'H Chen*'],
    venue: 'Physical Review E 111 (1), 014413',
    year: 2025,
    type: 'Article',
    links: { pdf: '', details: 'https://journals.aps.org/pre/abstract/10.1103/PhysRevE.111.014413' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/PhysRevE.111.014413.png?raw=true'
  },
  {
    title: 'Multi-domain interaction mediated strength-building in human α-actinin dimers unveiled by direct single-molecule quantification',
    authors: ['Y. Zhang#', 'J. Du#', 'X. Liu', 'F. Shang', 'Y. Deng', 'J. Ye', 'Y. Wang', 'J.Yan', 'H. Chen*', 'M. Yu*', 'S. Le*'],
    venue: 'Nature Communications 15, 6151',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/s41467-024-50430-w' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/s41467-024-50430-w.png?raw=true'
  },
  {
    title: 'Folding and Misfolding Dynamics of Irisin Protein Revealed by Single-Molecule Magnetic Tweezers',
    authors: ['J. Xu', 'H. Sun', 'Z. Zhang', 'Z. Guo', 'S. Le*', 'H. Chen*'],
    venue: 'The Journal of Physical Chemistry Letters 15, 11954-11960',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.4c02718' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acs.jpclett.4c02718.png?raw=true'
  },
  {
    title: 'Single-molecule force spectroscopy reveals intra- and intermolecular interactions of Caenorhabditis elegans HMP-1 during mechanotransduction',
    authors: ['S. Le#', 'M. Yu#', 'C. Fu#', 'JA Heier', 'S Martin', 'J. Hardin*', 'J. Yan*'],
    venue: 'Proceedings of the National Academy of Sciences 121 (37), e2400654121',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://www.pnas.org/doi/abs/10.1073/pnas.2400654121' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/pnas.2400654121.png?raw=true'
  },
  {
    title: 'Structural domain in the Titin N2B-us region binds to FHL2 in a force-activation dependent manner',
    authors: ['Y Sun', 'X Liu', 'W Huang', 'S Le', 'J Yan*'],
    venue: 'Nature Communications 15 (1), 4496',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/s41467-024-48828-7' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/s41467-024-48828-7.png?raw=true'
  },
  {
    title: 'Comparative analysis of folding and unfolding dynamics and free-energy landscapes in homologous cold shock proteins with variable thermal stabilities',
    authors: ['Z Xue', 'H Sun', 'H Hong', 'Z Zhang', 'Y Zhang', 'Z Guo', 'S Le*', 'H Chen*'],
    venue: 'Physical Review Research 6 (2), 023170',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.023170' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/PhysRevResearch.6.023170.png?raw=true'
  },
  {
    title: 'In situ single-molecule investigations of the impacts of biochemical perturbations on conformational intermediates of monomeric α-synuclein',
    authors: ['W. Huang*', 'J. Liu', 'S. Le', 'M. Yao', 'Y. Shi', 'J. Yan*'],
    venue: 'APL bioengineering 8(1):016114',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://pubmed.ncbi.nlm.nih.gov/38435467' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/38435467.png?raw=true'
  },
  {
    title: 'Ligand-dependent folding and unfolding dynamics and free energy landscapes of acylphosphatase',
    authors: ['L. Yuan', 'H. Sun', 'X. Ma', 'Y. Wang', 'Z. Guo', 'X. Qi', 'S. Le*', 'H. Chen*'],
    venue: 'Soft Matter 20 (18), 3780-3786',
    year: 2024,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.rsc.org/en/content/articlelanding/2024/sm/d4sm00131a/unauth' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/unauth.png?raw=true'
  },
  {
    title: 'A Mechanical Assay for the Quantification of Anti-RBD IgG Levels in Finger-Prick Whole Blood',
    authors: ['Y. Zhou', 'X. Zhao', 'Y. Jiang', 'D. J. Lin', 'C. Lu', 'Y. Wang', 'S. Le', 'R. Li', 'J. Yan*'],
    venue: 'ACS Sens., online',
    year: 2023,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/acssensors.3c00393' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acssensors.3c00393.png?raw=true'
  },
  {
    title: 'Tension Gauge Tethers as Tension Threshold and Duration Sensors',
    authors: ['J. Liu', 'S. Le', 'M. Yao', 'W. Huang', 'Z. Tio', 'Y. Zhou', 'J. Yan*'],
    venue: 'ACS Sens., 8(2): 704–711',
    year: 2023,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/acssensors.2c02218' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acssensors.2c02218.png?raw=true'
  },
  {
    title: 'Mechanical Stabilization of a Bacterial Adhesion Complex',
    authors: ['W. Huang', 'S. Le', 'Y. Sun', 'DJ Lin', 'M, Yao', 'Y. Shi', 'J. Yan*'],
    venue: 'J. Am. Chem. Soc., 144(37):16808-16818',
    year: 2022,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/jacs.2c03961' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/jacs.2c03961.png?raw=true'
  },
  {
    title: 'Unexpected Low Mechanical Stability of Titin I27 Domain at Physiologically Relevant Temperature',
    authors: ['M. Yu', 'J. Lu', 'S. Le*', 'J. Yan*'],
    venue: 'J. Phys. Chem. Lett., 12(33), 7914-7920',
    year: 2021,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/acs.jpclett.1c01309' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acs.jpclett.1c01309.gif?raw=true'
  },
  {
    title: 'Mechanical Regulation of Tension-transmission Supramolecular Linkages',
    authors: ['S. Le', 'M. Yu', 'J. Yan*'],
    venue: 'Curr. Opin. Solid State Mater. Sci., 25:100895',
    year: 2021,
    type: 'Article',
    links: { pdf: '', details: 'https://www.sciencedirect.com/science/article/pii/S135902862100001X' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/S1359028620300930.png?raw=true'
  },
  {
    title: 'Fungal Wound Healing through Instantaneous Protoplasmic Gelation',
    authors: ['T. Nguyen', 'S. Le', 'M. Lee', 'J.S. Fan', 'D. Yang', 'J. Yan', 'G .Jedd*'],
    venue: 'Curr Biol., 31(2):271-282.e5',
    year: 2021,
    type: 'Article',
    links: { pdf: '', details: 'https://www.sciencedirect.com/science/article/pii/S0960982220315207' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/S0960982220315207.png?raw=true'
  },
  {
    title: 'Force-Dependent Interactions between Talin and Full-Length Vinculin',
    authors: ['Y. Wang', 'M. Yao', 'K. Baker', 'R. Gough', 'S Le', 'B. Goult*', 'J. Yan*'],
    venue: 'J. Am. Chem. Soc., 143(36):14726-14737',
    year: 2021,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/jacs.1c06223' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/jacs.1c06223.png?raw=true'
  },
  {
    title: 'Modulating Mechanical Stability of Heterodimerization Between Engineered Orthogonal Helical Domains',
    authors: ['M. Yu', 'Z. Zhao', 'Z. Chen', 'S. Le*', 'J. Yan*'],
    venue: 'Nat. Commun., 11: 4476',
    year: 2020,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/s41467-020-18323-w' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/s41467-020-18323-w.png?raw=true'
  },
  {
    title: 'Implementing Optogenetic Modulation in Mechanotransduction',
    authors: ['M. Yu#', 'S. Le#', 'S. Barnett#', 'Z. Guo', 'X. Zhong', 'P. Kanchanawong*', 'J. Yan*'],
    venue: 'Phys. Rev. X, 10, 021001',
    year: 2020,
    type: 'Article',
    links: { pdf: '', details: 'https://journals.aps.org/prx/abstract/10.1103/PhysRevX.10.021001' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/PhysRevX.10.021001.png?raw=true'
  },
  {
    title: 'Mechanical regulation of formin-dependent actin polymerization',
    authors: ['S. Le', 'M. Yu', 'A. Bershadsky*', 'J.Yan*'],
    venue: 'Semin. Cell Dev. Biol., 102: 73-80',
    year: 2020,
    type: 'Article',
    links: { pdf: '', details: 'https://www.sciencedirect.com/science/article/abs/pii/S1084952118303203' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/S1084952118303203.png?raw=true'
  },
  {
    title: 'Direct Single-molecule Quantification Reveals Surprisingly High Mechanical Stability of Vinculin--Talin/alpha-Catenin Linkages',
    authors: ['S. Le#', 'M. Yu#', 'J. Yan*'],
    venue: 'Sci. Adv., 5 (12), eaav2720',
    year: 2019,
    type: 'Article',
    links: { pdf: '', details: 'https://www.science.org/doi/10.1126/sciadv.aav2720' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/sciadv.aav2720.png?raw=true'
  },
  {
    title: 'Phosphorylation Reduces the Mechanical Stability of alpha-catenin/beta-catenin Complex',
    authors: ['S. Le#', 'M. Yu#', 'J. Yan*'],
    venue: 'Angew. Chem. Int. Ed, 58(51) 18663-18669',
    year: 2019,
    type: 'Article',
    links: { pdf: '', details: 'https://onlinelibrary.wiley.com/doi/full/10.1002/anie.201911383' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/anie.201911383.jpg?raw=true'
  },
  {
    title: 'Force-dependent Regulation of KANK1-talin Complex at Focal Adhesions',
    authors: ['M. Yu#', 'S. Le#', 'Y. Ammon#', 'B. Goult', 'A. Akhmanova*', 'J. Yan*'],
    venue: 'Nano Lett., 19 (9), 5982-5990',
    year: 2019,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/acs.nanolett.9b01732' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acs.nanolett.9b01732.gif?raw=true'
  },
  {
    title: 'Mechanical Stability of alphaT-catenin and its Activation by Force for Vinculin Binding',
    authors: ['S. Pang#', 'S. Le#', 'A. Kwiatkowski', 'J. Yan*'],
    venue: 'Mol. Biol. Cell, 30(16):1930-1937',
    year: 2019,
    type: 'Article',
    links: { pdf: '', details: 'https://www.molbiolcell.org/doi/10.1091/mbc.E19-02-0102' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/mbc.E19-02-0102.png?raw=true'
  },
  {
    title: 'Direct quantification of the translocation activities of Saccharomyces cerevisiae Pif1 helicase',
    authors: ['C. Lu', 'S. Le', 'J. Chen', 'A. Byrd', 'D. Rhodes', 'K. Raney', 'J. Yan*'],
    venue: 'Nucleic Acids Res., 47(14):7494-7501',
    year: 2019,
    type: 'Article',
    links: { pdf: '', details: 'https://academic.oup.com/nar/article/47/14/7494/5528489' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/5528489.png?raw=true'
  },
  {
    title: 'Single-molecule manipulation quantification of site-specific DNA binding',
    authors: ['X. Zhao', 'S. Guo', 'J. Chen', 'C. Lu', 'S. Le', 'H. Fu', 'J. Yan*'],
    venue: 'Curr. Opin. Chem. Biol. 53, 106-117',
    year: 2019,
    type: 'Article',
    links: { pdf: '', details: 'https://www.sciencedirect.com/science/article/abs/pii/S136759311930047X' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/S136759311930047X.png?raw=true'
  },
  {
    title: 'Dystrophin as a Molecular Shock Absorber',
    authors: ['S. Le', 'M. Yu', 'L. Hovan', 'Z. Zhao', 'J. Ervasti', 'J. Yan*'],
    venue: 'ACS Nano, 12(12):12140-12148',
    year: 2018,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/full/10.1021/acsnano.8b05721' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acsnano.8b05721.gif?raw=true'
  },
  {
    title: 'Effects of Mechanical Stimuli on Profilin- and Formin-mediated Actin Polymerization',
    authors: ['M. Yu#', 'S. Le#', 'A. Efremov', 'X. Zeng', 'A. Bershadsky', 'J. Yan*'],
    venue: 'Nano Lett.,18 (8), 5239-5247',
    year: 2018,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/10.1021/acs.nanolett.8b02211' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acs.nanolett.8b02211.gif?raw=true'
  },
  {
    title: 'Mechanical responses of the mechanosensitive unstructured domains in cardiac titin',
    authors: ['S. Pang#', 'S. Le#', 'J. Yan*'],
    venue: 'Biol. Cell, 110(3):65-76',
    year: 2018,
    type: 'Article',
    links: { pdf: '', details: 'https://onlinelibrary.wiley.com/doi/10.1111/boc.201700061' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/boc.201700061.png?raw=true'
  },
  {
    title: 'Structural-elastic determination of the force-dependent transition rate of biomolecules',
    authors: ['S. Guo#', 'Q. Tang#', 'M. Yao', 'H. You', 'S. Le', 'H. Chen', 'J. Yan*'],
    venue: 'Chem. Sci., 9(27):5871-5882',
    year: 2018,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.rsc.org/en/content/articlelanding/2018/sc/c8sc01319e' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/c8sc01319e.png?raw=true'
  },
  {
    title: 'Two-State folding energy determinationbased on transition points in nonequilibriumsingle-molecule experiments',
    authors: ['H. You#', 'S. Guo#', 'S. Le', 'M. Yao', 'H. Chen', 'J. Yan*'],
    venue: 'J. Phys. Chem. Lett., 9(4) 811-816',
    year: 2018,
    type: 'Article',
    links: { pdf: '', details: 'https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.7b03123' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/acs.jpclett.7b03123.png?raw=true'
  },
  {
    title: 'Mechanotransmission and Mechanosensing of Human alpha-actinin 1',
    authors: ['S. Le', 'X. Hu', 'M. Yao', 'H. Chen', 'M. Yu', 'X. Xu', 'F. Margadant', 'M. Sheetz*', 'J. Yan*'],
    venue: 'Cell Reports., 21, 1-10',
    year: 2017,
    type: 'Article',
    links: { pdf: '', details: 'https://www.cell.com/cell-reports/fulltext/S2211-1247%2817%2931677-7' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/S2211-1247.jpg?raw=true'
  },
  {
    title: 'Tension-dependent stretching activates ZO-1 to control the junctional localization of its interactors',
    authors: ['D. Spadaro', 'S. Le', 'T. Laroche', 'I. Mean', 'L. Jond', 'J. Yan', 'S. Citi*'],
    venue: 'Curr Biol., 27, 1-13',
    year: 2017,
    type: 'Article',
    links: { pdf: '', details: 'https://www.cell.com/current-biology/fulltext/S0960-9822%2817%2931459-8' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/1111.png?raw=true'
  },
  {
    title: 'Elasticity of transition state leads to an unexpected mechanical stabilization of titin immunoglobulin domains',
    authors: ['G. Yuan', 'S. Le', 'M. Yao', 'H. Qian', 'X. Zhou', 'J. Yan*', 'H. Chen*'],
    venue: 'Angew. Chem. Int. Ed. Engl., 56(20):5490-5493',
    year: 2017,
    type: 'Article',
    links: { pdf: '', details: 'https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201700411' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/anie.201700411.jpg?raw=true'
  },
  {
    title: 'Bacillus Subtilis DprA and SsbA Promote the Assembly of a RecA Nucleoprotein Filament that Can Overcome RecX Inhibition during Natural Chromosomal Transformation',
    authors: ['S. Le#', 'E. Serrano#', 'R. Kawamura', 'B. Carrasco', 'J. Yan*', 'J.Alonso*'],
    venue: 'Nucleic Acids Res., 45(15): 8873-8885',
    year: 2017,
    type: 'Article',
    links: { pdf: '', details: 'https://academic.oup.com/nar/article/45/15/8873/3933579?login=false' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/036359.jpg?raw=true'
  },
  {
    title: 'Parallel triplex structure formed between stretched single-stranded DNA and homologous duplex DNA',
    authors: ['J. Chen', 'Q. Tang', 'S. Guo', 'C. Lu', 'S. Le', 'J. Yan*'],
    venue: 'Nucleic Acids Res., 45(17): 10032-10041',
    year: 2017,
    type: 'Article',
    links: { pdf: '', details: 'https://academic.oup.com/nar/article/45/17/10032/3979709?login=false' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/1234567.jpg?raw=true'
  },
  {
    title: 'mDia1 senses both force and torque during F-actin filament polymerization',
    authors: ['M. Yu#', 'X.Yuan#', 'C. Lu', 'S. Le', 'R. Kawamura', 'A. Efremov', 'Z. Zhao', 'M. Kozlov', 'M. Sheetz', 'A. Bershadsky*', 'J.Yan*'],
    venue: 'Nat. Commun., 8: 1650',
    year: 2017,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/s41467-017-01745-4' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/s41467-017-01745-4.jpg?raw=true'
  },
  {
    title: 'Uncovering Mechanosensing Mechanisms at the Single Protein Level using Magnetic Tweezers',
    authors: ['S. Le', 'R. Liu', 'C. T. Lim*', 'J. Yan*'],
    venue: 'Methods, 94:13-8',
    year: 2016,
    type: 'Article',
    links: { pdf: '', details: 'https://www.sciencedirect.com/science/article/abs/pii/S1046202315300645' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/S1046202315300645.jpg?raw=true'
  },
  {
    title: 'Disturbance-free Rapid Solution Exchange for Magnetic Tweezers Single-molecule Studies',
    authors: ['S. Le#', 'M. Yao#', 'J. Chen', 'A. K. Efremov', 'S. Azimi', 'J. Yan*'],
    venue: 'Nucleic Acids Res., 43(17): e113',
    year: 2015,
    type: 'Article',
    links: { pdf: '', details: 'https://academic.oup.com/nar/article/43/17/e113/2414325?login=false' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/123456.jpg?raw=true'
  },
  {
    title: 'Mechanochemical regulations of RPA\'s binding to ssDNA',
    authors: ['J. Chen#', 'S. Le#', 'A. Basu', 'W. J. Chazin*', 'J. Yan*'],
    venue: 'Sci. Rep.,19,5:9296',
    year: 2015,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/srep09296https://www.nature.com/articles/srep09296' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/srep09296.png?raw=true'
  },
  {
    title: 'Mechanical Force Antagonizes the Inhibitory Effects of RecX on RecA Filaments Formation in M. tuberculosis',
    authors: ['S. Le', 'H. Chen', 'X. Zhang', 'J. Chen', 'K. Patil', 'K. Muniyappa*', 'J. Yan*'],
    venue: 'Nucleic Acids Res. 42 (19): 11992-11999',
    year: 2014,
    type: 'Article',
    links: { pdf: '', details: 'https://academic.oup.com/nar/article/42/19/11992/1531393' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/1531393.png?raw=true'
  },
  {
    title: 'Force and ATP Hydrolysis Dependent Regulation of RecA Nucleoprotein Filament by Single-stranded DNA Binding Protein',
    authors: ['H. Fu#', 'S. Le#', 'H. Chen', 'K. Muniyappa*', 'J. Yan*'],
    venue: 'Nucleic Acids Res., 41, 924',
    year: 2013,
    type: 'Article',
    links: { pdf: '', details: 'https://academic.oup.com/nar/article/41/2/924/1075654' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/1075654.png?raw=true'
  },
  {
    title: 'Mechanosensing of DNA bending in a single specific protein-DNA complex',
    authors: ['S. Le', 'H. Chen', 'P. Cong', 'J. Lin', 'P. Droge', 'J. Yan*'],
    venue: 'Sci. Rep., 3-3508',
    year: 2013,
    type: 'Article',
    links: { pdf: '', details: 'https://www.nature.com/articles/srep03508' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/srep03508.jpg?raw=true'
  },
  {
    title: 'Dynamics and Regulation of RecA polymerization and de-polymerization on double-stranded DNA',
    authors: ['H. Fu#', 'S. Le#', 'K. Muniyappa*', 'J. Yan*'],
    venue: 'PLoS ONE, 8(6): e66712',
    year: 2013,
    type: 'Article',
    links: { pdf: '', details: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0066712' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/journal.pone.0066712.png?raw=true'
  },
  {
    title: 'Revealing the competition between peeled ssDNA, melting bubbles, and S-DNA during DNA overstretching by single-molecule calorimetry',
    authors: ['X. Zhang', 'H. Chen', 'S. Le', 'I. Rouzina', 'P. Doyle*', 'J. Yan*'],
    venue: 'Proc. Natl. Acad. Sci. U.S.A.,10.1073',
    year: 2013,
    type: 'Article',
    links: { pdf: '', details: 'https://www.pnas.org/doi/abs/10.1073/pnas.1219602110' },
    image: 'https://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/pnas.1213740110.jpg?raw=truehttps://github.com/suowei0205/lsmlab.github.io/blob/main/images/publications/pnas.1213740110.jpg?raw=true'
  }
];

interface PublicationsProps {
  limit?: number;
  showAll?: boolean;
}

export default function Publications({ limit, showAll = false }: PublicationsProps) {
  const displayedPublications = showAll ? publications : (limit ? publications.slice(0, limit) : publications);

  return (
    <section id="publications" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            科研成果 <span className="text-primary-600 dark:text-primary-400 font-light">Publications</span>
          </h2>
        </div>

        <div className="space-y-6">
          {displayedPublications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start bg-slate-200 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-100"
            >
              <div className="flex flex-col items-center justify-center w-48 h-48 rounded-xl bg-white dark:bg-slate-100 overflow-hidden shrink-0 border border-slate-100 dark:border-slate-800 shadow-sm">
                {pub.image ? (
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className="w-full h-full object-contain p-0" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://picsum.photos/seed/pub${index}/200/200`;
                    }}
                  />
                ) : (
                  <div className="flex items-center justify-center w-full h-full text-slate-600">
                    <FileText size={32} />
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
                    {pub.year}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-400 border border-slate-100 dark:border-slate-700 shadow-sm">
                    {pub.type}
                  </span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    {pub.venue}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 leading-tight">
                    {pub.title}
                </h3>
                
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  {pub.authors.map((author, i) => {
                    // Highlight PI or specific members
                    const isHighlighted = author.includes('S Le') || author.includes('S. Le');
                    return (
                      <span key={i}>
                        <span className={isHighlighted ? 'font-bold text-slate-900 dark:text-white' : ''}>
                          {author}
                        </span>
                        {i < pub.authors.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {pub.links.pdf && (
                    <a href={pub.links.pdf} className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      <FileText size={16} className="mr-1.5" /> PDF
                    </a>
                  )}
                  <a href={pub.links.details} className="inline-flex items-center text-sm font-medium text-slate-700 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                    <ExternalLink size={16} className="mr-1.5" /> Details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!showAll && limit && limit < publications.length && (
          <div className="mt-12 text-center">
            <Link to="/publications" className="inline-flex items-center justify-center px-6 py-3 border border-slate-100 dark:border-slate-600 hover:border-slate-200 dark:hover:border-slate-500 text-base font-medium rounded-full text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md">
              查看所有论文 View All Publications
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
