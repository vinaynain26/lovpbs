import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vipChallengeImg from "@/assets/curriculum/vip-challenge.webp";
import vipImg1 from "@/assets/vip/vip1.webp";
import vipImg2 from "@/assets/vip/vip2.webp";
import vipImg3 from "@/assets/vip/vip3.webp";
import vipImg4 from "@/assets/vip/vip4.webp";
import creatorImg1 from "@/assets/curriculum/creator/P1025040.webp";
import creatorImg3 from "@/assets/curriculum/creator/P1025082.webp";
import creatorImg4 from "@/assets/curriculum/creator/P1140873.webp";
import creatorImg5 from "@/assets/creator/creator1.webp";
import creatorImg6 from "@/assets/creator/creator2.webp";
import dropImg1 from "@/assets/curriculum/dropshipping/P1104495.webp";
import dropImg2 from "@/assets/curriculum/dropshipping/P1104500.webp";
import dropImg3 from "@/assets/curriculum/dropshipping/P1104811.webp";
import dropImg4 from "@/assets/curriculum/dropshipping/P1104820.webp";
import dropImg5 from "@/assets/curriculum/dropshipping/P1104823.webp";
import dropImg6 from "@/assets/curriculum/dropshipping/P1104863.webp";
import dropImg7 from "@/assets/curriculum/dropshipping/P1139614.webp";
import caseImg1 from "@/assets/cases/case1.webp";
import caseImg2 from "@/assets/cases/case2.webp";
import caseImg3 from "@/assets/cases/case3.webp";
import caseImg4 from "@/assets/cases/case4.webp";
import caseImg5 from "@/assets/cases/case5.webp";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronRight, ArrowUpRight, ShoppingCart, Rocket, Video, Trophy, MoveRight, Plus, Minus, Download, Play } from "lucide-react";

const dropGalleryImages = [dropImg6, dropImg7, dropImg1, dropImg2, dropImg3, dropImg4, dropImg5];
const creatorGalleryImages = [creatorImg1, creatorImg3, creatorImg4, creatorImg5, creatorImg6];
const vipGalleryImages = [vipChallengeImg, vipImg1, vipImg2, vipImg3, vipImg4];
const caseGalleryImages = [caseImg1, caseImg2, caseImg3, caseImg4, caseImg5];


type FacultyMember = {
  name: string;
  designation: string;
  type: 'Visiting Faculty' | 'Practitioner' | 'Resident';
  qualification?: string;
  imageUrl?: string;
};

const inClassCategories = [
  {
    title: "Communication & Self Development",
    description: "Master the art of influence — from boardroom presentations and high-stakes negotiations to crisp business writing. This module builds your executive presence, emotional intelligence, and the storytelling skills that separate good managers from great leaders.",
    summary: [
      "Inspiring speeches, persuasive writing, and emails that get responses.",
      "Productivity systems, personal finance, storytelling, and portfolio building.",
      "Leadership, mental models, team motivation, and running effective meetings.",
    ],
    faculty: [
      { name: "Dr. Bhasker Malu", designation: "Assistant Professor, Psychology", type: "Resident" as const, qualification: "PhD, Christ University", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.BhaskerMalu.webp" },
      { name: "Nidhi Dinesh", designation: "Ex-Research Assistant, University of Singapore", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/nidhi.webp" },
      { name: "Dr Francis Rebello", designation: "Former Head - HR, Plan International", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Dr.FrancisRebello_0.webp" },
      { name: "Dr Rajagopal Raghunathan", designation: "Professor of Business, University of Austin, Texas", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.RajagopalRaghunathan.webp" },
      { name: "Mr Manish Vashist", designation: "Executive Director, EY", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ManishVashist.webp" },
      { name: "Mr Abhishek Srivastava", designation: "Former Head, Ent. Strategy & Business Planning", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AbhishekSrivastava.webp" },
      { name: "Mr Aswini Bajaj", designation: "Visiting Faculty, Accounting and Finance", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AswiniBajaj.webp" },
      { name: "Mr Sorabh Bajaj", designation: "Fr. Skills Cons, APAC Coursera", type: "Visiting Faculty" as const, imageUrl: "https://cdn.mastersunion.link/assets/img/newmu/MrSorabhBajaj-M.webp" },
      { name: "Mr Sandeep Kochhar", designation: "Former CTO, HT Media", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SandeepKochhar.webp" },
      { name: "Mr Mihir Mankad", designation: "Former Professor of Practice, Tufts & Harvard", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.MihirMankad.webp" },
    ] as FacultyMember[],
  },
  {
    title: "Finance & Fintech",
    description: "Go from reading a balance sheet to building full financial models. Learn how India's top CFOs think about capital allocation, valuation, and risk — then apply those frameworks to fintech disruption, crypto markets, and real-world fundraising.",
    summary: [
      "Financial terminology, reading statements, budgeting, and cost control.",
      "Business valuation, financial modelling, MIS creation, and advanced Excel.",
      "Raising debt & equity capital, real estate decisions, and understanding global financial crises.",
    ],
    faculty: [
      { name: "Dr. Nimisha Bora", designation: "Assistant Professor, Accounting and Finance", type: "Resident" as const, qualification: "PhD, Xavier Institute of Management", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.NimishaBora.webp" },
      { name: "Dr. Garima Chaklader", designation: "Assistant Professor, Economics", type: "Resident" as const, qualification: "PhD, IIM Bangalore", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.GarimaChaklader.webp" },
      { name: "Dr. Muneer Kalliyil", designation: "Assistant Professor, Economics", type: "Resident" as const, qualification: "PhD, IIM Bangalore", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.MuneerKalliyil.webp" },
      { name: "Dr. Aarti Sharma", designation: "Associate Professor, Management Finance", type: "Resident" as const, qualification: "PhD, Shiv Nadar University Delhi", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.AartiSharma.webp" },
      { name: "Dr. Garrick Hileman", designation: "Senior Research Fellow, University of Nicosia", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.Garicck.webp" },
      { name: "Souvik Dutta", designation: "Assistant Professor, IIM Bangalore", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/souvik.webp" },
      { name: "Mr. Rajat Baijal", designation: "Adjunct Professor, Enterprise Risk Management", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24062025/v1/rajatBaijal.webp" },
      { name: "Payal Jain", designation: "Partner, LoEstro Advisors", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/payaljain.webp" },
      { name: "Ankur Kulshrestha", designation: "Empanelled Educator, EY", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/ankur.webp" },
      { name: "Vaibhav Jain", designation: "Former Partner-Investments, Edelweiss", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/vaibhav.webp" },
      { name: "Sundar Venkatesh", designation: "Ex-Dean, Shiv Nadar University", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/sundar.webp" },
      { name: "Anurag Singhal", designation: "Ex-AGM Strategy & Business Dev., Aditya Birla Group", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/16092025/v1/anurag.webp" },
      { name: "Mr. Satish Krishnan", designation: "Former MD, Standard Chartered Bank", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/satish.webp" },
      { name: "Dr Arvind Mayaram", designation: "Former Finance Secretary of India, Government of India", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.ArvindMayaram.webp" },
      { name: "Dr Meenakshi Rishi", designation: "Professor of Economics, Seattle University", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Dr.MeenakshiRishi_0.webp" },
      { name: "Mr Ajay Jamuar", designation: "COO, Wells Fargo India & Philippines", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AjayJamuar.webp" },
      { name: "Dr Narendra Jadhav", designation: "Former MP, Planning Commission, GoI", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.NarendraJadhav.webp" },
      { name: "Dr Soumik Bhushan", designation: "Ex-Head Custm. Strategy, Amazon", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/masters/tbmFbm/SaumikBhushan_dark.png" },
      { name: "Mr Siddhartha Rastogi", designation: "MD, Ambit Investment Advisors", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SiddharthaRastogi.webp" },
      { name: "Mr Shiv Mehta", designation: "Former Blockchain Analyst, National Australia Bank", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ShivMehta.webp" },
      { name: "Mr Biju Dominic", designation: "Chief Evangelist, Fractal Analytics", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.BijuDominic.webp" },
      { name: "Dr Atul Mehta", designation: "Former Sr. VP of Sales, Razorpay", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.AtulMehta.webp" },
      { name: "Mr Asim Mehta", designation: "VP - North America Head, JPMorgan Chase & Co.", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AsimMehta.webp" },
      { name: "Mr Parijat Garg", designation: "Former Senior VP, CRIF India", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ParijatGarg.webp" },
      { name: "Dr Nishant Chadha", designation: "Head Of Research, India Development Foundation", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.NishantChadha.webp" },
      { name: "Dr Akash Krishnan", designation: "Sr. Prin., Data & Analytics Research, Gartner", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.AkashKrishnan.webp" },
      { name: "Mr Shrikant Patil", designation: "Former Associate Partner, Oliver Wyman", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ShrikantPatil.webp" },
      { name: "Mr Manoj Goel", designation: "Co-founder and Director, The WallStreet School", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ManojGoel.webp" },
      { name: "Mr Utkarsh Majmudar", designation: "Former VP, HSBC", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.UtkarshMajmudar.webp" },
      { name: "Mr Vikram Pandya", designation: "Former Strategic Advisor, YES Bank", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.VikramPandya.webp" },
      { name: "Mr Kiran Kumar KV", designation: "Former Associate VP, HSBC", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.KiranKumarKV.webp" },
      { name: "Mr Saurabh Kumar", designation: "Former Lead BA, Data Science, VMWare", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SaurabhKumar.webp" },
      { name: "Mr Aman Singhania", designation: "Former Associate Director, CRISIL", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AmanSinghania.webp" },
      { name: "Mr Anuj Garg", designation: "VP - Blockchain, ZebPay", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/masters/M_AnujGarg.png" },
      { name: "Mr Himanshu Jain", designation: "Former Research Analyst, McKinsey & Company", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.HimanshuJain.webp" },
      { name: "Dr Vivek Bhatia", designation: "Founder, Value Solutionz", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.VivekBhatia.webp" },
      { name: "Ms Shalini Chabbra", designation: "Managing Partner, 3i Partners", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Ms.ShaliniChabbra.webp" },
      { name: "Mr Amardeep Singh", designation: "Advisor, DXC Technology", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AmardeepSingh.webp" },
      { name: "Dr Amit Shrivastava", designation: "Visiting Faculty, Finance and Accounting", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.AmitShrivastava.webp" },
      { name: "Mr Devi Prasad Choudhury", designation: "Former Financial Controller, Carelon Global Solutions", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.DeviPrasadChoudhury.webp" },
      { name: "Dr Srijith Mohanan", designation: "Former COO, Deutsche Bank", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.SrijithMohanan.webp" },
      { name: "Ms Barkha Chhabra", designation: "Former Deputy GM, M&A, IFCI", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Ms.BarkhaChhabra.webp" },
      { name: "Mr Vishal Thakkar", designation: "Master Trainer; Aditya Birla Group, M&M", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.VishalThakkar.webp" },
      { name: "Dr Harshali Damle", designation: "Visiting Faculty, Accounting and Finance", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.HarshaliDamle.webp" },
      { name: "Mr Puneet Gupta", designation: "Managing Partner, Kentrus Capital", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.PuneetGupta.webp" },
      { name: "Mr Pratap Giri", designation: "Visiting Faculty, IIM Bangalore", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.PratapGiri.webp" },
    ] as FacultyMember[],
  },
  {
    title: "Sales & Marketing",
    description: "Learn the growth playbooks behind brands like Nike, Zerodha, and boAt. From performance marketing and funnel optimisation to community-led growth and brand storytelling — this module turns you into a full-stack marketer who can drive real revenue.",
    summary: [
      "Organic growth, Meta & Google ads, Amazon selling, and GTM funnels.",
      "Brand building like Nike, consumer psychology, CRM tools, and content marketing.",
      "Community building, personal branding, and closing deals through storytelling.",
    ],
    faculty: [
      { name: "Dr. Bhupesh Manoharan", designation: "Director Faculty, Marketing Management", type: "Resident" as const, qualification: "PhD, IIM Calcutta", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/BhupeshManoharan.webp" },
      { name: "Dr. Anushree Poddar", designation: "Assistant Professor, Business Sustainability & Marketing", type: "Resident" as const, qualification: "PhD, TERI School of Advanced Studies", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.AnushreePoddar.webp" },
      { name: "Mr. Elkana Ezekiel", designation: "Former CMO, Samsung Electronics", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Dr.ElkanaEzekiel_0.webp" },
      { name: "Vineeta Tikekar", designation: "Former Head of Marketing, Standard Chartered Bank", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/vineeta.webp" },
      { name: "Mr Raghavshyam Ramamurthy", designation: "Visiting Faculty, Syracuse University", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.RaghavshyamRamamurthy.webp" },
      { name: "Ms Malavika Harita", designation: "Former CEO, Saatchi & Saatchi", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Ms.MalavikaHarita.webp" },
      { name: "Mr Arjun Vaidya", designation: "Former CEO, Dr Vaidya's", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ArjunVaidya.webp" },
      { name: "Mr Jamshed K Daboo", designation: "Former MD, Star Bazaar", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.JamshedKDaboo.webp" },
      { name: "Ms Trisha Rajani Vaidya", designation: "Former COO, Dr. Vaidya's", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Ms.TrishaRajaniVaidya.webp" },
      { name: "Mr Harish Bijoor", designation: "Former VP, Tata Coffee", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.HarishBijoor.webp" },
      { name: "Mr Siddarth Padmanabhan", designation: "Former Partner Manager, Facebook", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SiddarthPadmanabhan.webp" },
      { name: "Mr Siddarth Menon", designation: "Former Chief Marketing Officer, Drums Food International", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SiddarthMenon.webp" },
      { name: "Mr Jishnu Changkakoti", designation: "Former Dir. Corp. Marketing, Samsung India Electronics", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.JishnuChangkakoti.webp" },
      { name: "Mr Chandradeep Mitra", designation: "Former President, Mudra Communications Group", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.ChandradeepMitra.webp" },
      { name: "Dr Krishanu Rakshit", designation: "Former Assoc. Prof, IIM Calcutta", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.KrishanuRakshit.webp" },
      { name: "Mr Gurneesh Khurana", designation: "Former Director – Sales, General Motors", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.GurneeshKhurana.webp" },
      { name: "Mr Hitesh Motwani", designation: "Visiting Faculty of AI ML, Digital Marketing & Data Analytics", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.HiteshMotwani.webp" },
      { name: "Mr Kabir Khanna", designation: "Former EIR, Kentrus Capital", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.KabirKhanna.webp" },
      { name: "Mr Vipin Grover", designation: "Former Digital Marketing, Publicis Groupe", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.VipinGrover.webp" },
      { name: "Mr Rahul Malik", designation: "Former Digital Strategist, MoHFW, GoI", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.RahulMalik.webp" },
      { name: "Ms Vani Gupta Dandia", designation: "Former Category Director, PepsiCo", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Ms.VaniGuptaDandia.webp" },
      { name: "Mr Saurabh Sengupta", designation: "Former Senior VP Of Sales, Zomato", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SaurabhSengupta.webp" },
      { name: "Akshay Gurnani", designation: "Co-founder and CEO, Schbang", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Akshay_Gurani_0.webp" },
      { name: "Alok Saraogi", designation: "Former Director & Country Manager, Amazon", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Alok_Saraongi_00.webp" },
    ] as FacultyMember[],
  },
  {
    title: "Management & Strategy",
    description: "Think like a CEO. From competitive analysis and crisis management to organisational design and global supply chains — this module equips you with the strategic frameworks used by leaders at McKinsey, Swiggy, and Softbank to make high-stakes decisions.",
    summary: [
      "Team dynamics, global procurement, market analysis, and KPI tracking.",
      "Strategic thinking, business plans, crisis management, and organisational alignment.",
      "Networking, pitching ideas in 7 slides, and giving effective feedback.",
    ],
    faculty: [
      { name: "Dr. Vipin Sreekumar", designation: "Assistant Professor, Strategic Management", type: "Resident" as const, qualification: "PhD, IIM Calcutta", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.VipinSreekumar.webp" },
      { name: "Dr. Manu Prasad", designation: "Assistant Professor, OB & HRM", type: "Resident" as const, qualification: "PhD, IIM Tiruchirappalli", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.ManuPrasad.webp" },
      { name: "Dr. Kashika Sud", designation: "Assistant Professor, Organizational Behavior", type: "Resident" as const, qualification: "PhD, IIM Ahmedabad", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.KashikaSud.webp" },
      { name: "Dr. Ajith Babu", designation: "Assistant Professor, Operations Management", type: "Resident" as const, qualification: "PhD, IIM Calcutta", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.AjithBabu.webp" },
      { name: "Dr. Ashish Bhandari", designation: "Assistant Professor, Operations Management", type: "Resident" as const, qualification: "PhD, IIM Bangalore", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.AshishBhandari.webp" },
      { name: "Prof. Shivangi Rajora", designation: "Assistant Professor, Public Policy", type: "Resident" as const, qualification: "PhD, IIM Bangalore", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Prof.ShivangiRajora.webp" },
      { name: "Dr. Rinku Mahindru", designation: "Associate Professor, Organisational Behaviour", type: "Resident" as const, qualification: "PhD, Delhi University", imageUrl: "https://images.mastersunion.link/uploads/06022026/v1/RinkuMahindru.webp" },
      { name: "Dr. Aditya Kulashri", designation: "Associate Professor, Organisational Behaviour", type: "Resident" as const, qualification: "PhD, IIM Calcutta", imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/Dr.RinkuMahindru.webp" },
      { name: "Dr. Vishnuprasad Nagadevara", designation: "Former Dean, IIM Bangalore", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Dr.VishnuprasadNagadevara_0.webp" },
      { name: "Dr. Edward W Rogers", designation: "Former Chief Knowledge Officer, NASA", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.EdwardRoger.webp" },
      { name: "Dr. Lan Ma", designation: "Adjunct Professor of Business, NYU Shanghai", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24062025/v1/LanMa.webp" },
      { name: "Dr. Shad Morris", designation: "Professor, MIT Sloan and Ohio State University", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24062025/v1/shadMorris.webp" },
      { name: "Dr. Daniel Van Der Vliet", designation: "Executive Director, Family Business, Cornell", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24062025/v1/danielGarett.webp" },
      { name: "Dr. Rajesh Bhargave", designation: "Associate Professor of Marketing, Imperial College", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24062025/v1/rajeshBhargave.webp" },
      { name: "Dr. Zal Phiroz", designation: "Adjunct Professor, Supply Chain & Operations", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24062025/v1/zalPhiroz.webp" },
      { name: "Thomas Kuruvilla", designation: "Managing Partner, Middle East, Arthur D. Little", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Thomas.webp" },
      { name: "Dr. Manoj Kohli", designation: "Former Country Head, Softbank India", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Mr_Manoj.webp" },
      { name: "Mr. Rohit Kapoor", designation: "CEO, Food Marketplace Swiggy", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Mr.RohitKapoor_0.webp" },
      { name: "Rajat Mathur", designation: "Former MD, Morgan Stanley", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/rajatMathur.webp" },
      { name: "Avantika Tomar", designation: "Partner, EY-Parthenon", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/avantika.webp" },
      { name: "Subhonil Ghoshal", designation: "Former MD, Accenture", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/shubonil.webp" },
      { name: "Debesh Sharma", designation: "Founder & CEO, MetaFora", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/kenwyn.webp" },
      { name: "Dr Rakshita Shharma", designation: "Former CHRO, Bobble Ai", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.RakshitaShharma.webp" },
      { name: "Mr Naveen Munjal", designation: "MD, Hero Electric Vehicles Pvt Ltd", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.NaveenMunjal.webp" },
      { name: "Mr Sarthak Ahuja", designation: "Director, Niamh Ventures", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.SarthakAhuja.webp" },
      { name: "Mr Rajnish Virmani", designation: "Former India Head, American Express", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.RajnishVirmani.webp" },
      { name: "Mr Rajiv Gulati", designation: "Former President, Ranbaxy Laboratories", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.RajivGulati.webp" },
      { name: "Ms Kevyn Eva Norton", designation: "Former Technology Strategist, ATOS Consulting", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Ms.KevynEvaNorton.webp" },
      { name: "Mr Ritesh Bhatia", designation: "Founding Director, V4WEB Cybersecurity", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.RiteshBhatia.webp" },
      { name: "Dr Pradeep Hota", designation: "Professor, Business Policy & Strategy, IIM Udaipur", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Dr.PradeepHota.webp" },
      { name: "Mr Vivek Singh", designation: "Former OSD to Finance Minister, Government of India", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.VivekSingh.webp" },
      { name: "Mr Pankaj Dubey", designation: "Former Head & MD, Polaris India", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.PankajDubey.webp" },
      { name: "Mr Annaswamy Vaideesh", designation: "Former VP, Johnson & Johnson", type: "Visiting Faculty" as const, imageUrl: "https://new.mastersunion.link/profilepictures/Masters/Mr.AnnaswamyVaideesh.webp" },
      { name: "Sonali Mishra", designation: "VP - Talent and Head HR, Bain and Co.", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Sonai_Mishra_0.webp" },
    ] as FacultyMember[],
  },
  {
    title: "Product, Tech & AI",
    description: "Build like a founder, think like a PM, and harness AI as your force multiplier. From setting up live e-commerce stores and designing in Figma to writing code, shipping no-code MVPs, and building AI-powered products — this module makes you technically dangerous enough to lead any product team in the age of AI.",
    summary: [
      "E-commerce setup, design thinking, reading & writing code, and dashboards.",
      "UI/UX design with Figma, no-code app building, and product mindset.",
      "Prompt engineering, generative AI, and understanding how LLMs actually work.",
      "Building AI-powered products and automating workflows at scale.",
    ],
    faculty: [
      { name: "Dr. Nandini Seth", designation: "Assistant Professor, Quantitative Methods & Decision Sciences", type: "Resident" as const, qualification: "PhD, IIM Bangalore", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.NandiniSeth.webp" },
      { name: "Dr. Antra", designation: "Assistant Professor, Decision Sciences", type: "Resident" as const, qualification: "PhD, IIM Bangalore", imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/Dr.Antra.webp" },
      { name: "Ms. Monica Jasuja", designation: "Head of Digital & Emerging Partnerships, Mastercard", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/monicaJasuja.webp" },
      { name: "Malthi Satish", designation: "Former Director of PM, PayPal", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/MalthiSatish.webp" },
      { name: "Gaurav Mittal", designation: "Product & Technology Leader, Stripe", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/gaurav.webp" },
      { name: "Dr. Tathagata Dasgupta", designation: "Chief Data & Analytics Officer, Saatchi & Saatchi", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/profilepictures/Masters/Dr.TathagataDasgupta_0.webp" },
      { name: "Ravish Bhatia", designation: "Ex-Head of Product, Indiagold", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/ravish.webp" },
      { name: "Divij Bajaj", designation: "Senior Data & Applied Scientist, Microsoft", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/06012026/v1/divijbajaj.webp" },
      { name: "Bhanu Potta", designation: "Ex-Senior Advisor, Aditya Birla Group", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/bhanuPotta.webp" },
      { name: "Subodh Kar", designation: "Former Biz. Analyst, Team Leader, Bank of America", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/subodh.webp" },
      { name: "Ashay Saxena", designation: "Senior Product Manager, IBM", type: "Practitioner" as const, imageUrl: "https://images.mastersunion.link/uploads/16092025/v1/ashay.webp" },
      { name: "Tushar Sharma", designation: "Ex-AVP, Standard Chartered Bank", type: "Visiting Faculty" as const, imageUrl: "https://images.mastersunion.link/uploads/24122025/v1/tusharSharma.webp" },
    ] as FacultyMember[],
  },
];
const outClassModules = [
  {
    num: "01",
    title: "Dropshipping Challenge",
    desc: "A 75-day sprint from product discovery to running live D2C stores on Shopify, Amazon & Flipkart.",
    label: "E-COMMERCE",
    icon: ShoppingCart,
    accent: "",
    accentText: "text-primary-foreground",
    gradient: "linear-gradient(135deg, hsl(0,0%,10%), hsl(0,0%,6%))",
    span: "",
    titleSize: "text-lg sm:text-xl lg:text-2xl",
    downloadUrl: "/reports/Dropshipping-Report.pdf",
  },
  {
    num: "02",
    title: "VIP Challenge",
    desc: "Build a business from 0 to 1 — understanding every moving part of a P&L and creating real ventures.",
    label: "ENTREPRENEURSHIP",
    icon: Rocket,
    accent: "",
    accentText: "text-primary-foreground",
    gradient: "transparent",
    span: "",
    titleSize: "text-lg sm:text-xl lg:text-2xl",
    downloadUrl: "/reports/VIP-Booklet-2025.pdf",
  },
  {
    num: "03",
    title: "Creator Challenge",
    desc: "Build your personal brand across Instagram and YouTube — becoming creator-preneurs with real followings.",
    label: "PERSONAL BRAND",
    icon: Video,
    accent: "",
    accentText: "text-primary-foreground",
    gradient: "transparent",
    span: "",
    titleSize: "text-lg sm:text-xl lg:text-2xl",
  },
  {
    num: "04",
    title: "Case Competitions",
    desc: "MU students compete at India's most prestigious B-school case competitions — going head-to-head with IIM Ahmedabad, IIM Bangalore, IIT Bombay, and XLRI — and consistently bring home wins. These high-pressure events sharpen strategic thinking, boardroom presentation skills, and the ability to crack real-world business problems under tight deadlines.",
    label: "COMPETE GLOBALLY",
    icon: Trophy,
    accent: "",
    accentText: "text-primary-foreground",
    gradient: "linear-gradient(135deg, hsl(350,50%,28%), hsl(10,40%,18%))",
    span: "",
    titleSize: "text-lg sm:text-xl lg:text-2xl",
  },
];

const CurriculumOverview = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedModule, setSelectedModule] = useState<number | null>(0);
  
  const [currentGalleryIdx, setCurrentGalleryIdx] = useState(0);
  const [currentCreatorIdx, setCurrentCreatorIdx] = useState(0);
  const [currentVipIdx, setCurrentVipIdx] = useState(0);
  const [currentCaseIdx, setCurrentCaseIdx] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const isMobile = useIsMobile();

  const galleryConfigs = [
    { images: dropGalleryImages, currentIdx: currentGalleryIdx, setIdx: setCurrentGalleryIdx, altPrefix: "Dropshipping Challenge" },
    { images: vipGalleryImages, currentIdx: currentVipIdx, setIdx: setCurrentVipIdx, altPrefix: "VIP Challenge" },
    { images: creatorGalleryImages, currentIdx: currentCreatorIdx, setIdx: setCurrentCreatorIdx, altPrefix: "Creator Challenge" },
    { images: caseGalleryImages, currentIdx: currentCaseIdx, setIdx: setCurrentCaseIdx, altPrefix: "Case Competition" },
  ] as const;

  const activeGallery = galleryConfigs[activeTab] ?? null;

  useEffect(() => {
    if (activeTab !== 0) return;
    const interval = setInterval(() => {
      setCurrentGalleryIdx((prev) => (prev + 1) % dropGalleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== 2) return;
    const interval = setInterval(() => {
      setCurrentCreatorIdx((prev) => (prev + 1) % creatorGalleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== 1) return;
    const interval = setInterval(() => {
      setCurrentVipIdx((prev) => (prev + 1) % vipGalleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab]);

  useEffect(() => {
    if (activeTab !== 3) return;
    const interval = setInterval(() => {
      setCurrentCaseIdx((prev) => (prev + 1) % caseGalleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section className="mu-section-dark-warm mu-section-padding" id="curriculum">
      <div className="mu-container">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-4">
            <img src="https://files.mastersunion.link/resources/svg/star.svg" alt="" className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] mu-gradient-text-vivid">
              Curriculum
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground leading-[0.95] max-w-3xl">
            Learn It in Class.{" "}
            <em className="font-display italic">Prove It</em>{" "}
            Outside.
          </h2>
          <p className="text-sm sm:text-base text-mu-gray-400 max-w-lg mt-5 leading-relaxed">
            Master finance, marketing, AI, and strategy in the classroom — then stress-test it all by launching D2C brands, building startups, growing audiences, and winning global case competitions.
          </p>
        </div>

        {/* ─── IN CLASS ─── */}
        <div className="mb-20 sm:mb-28">
          <span
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-clip-text text-transparent mb-2 inline-flex items-center gap-1.5"
            style={{
              backgroundImage:
                "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)",
            }}
          >
            <MoveRight size={14} className="text-mu-gray-300" strokeWidth={1.5} />
            In Class
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground leading-[0.95] max-w-3xl mb-4" style={{ fontWeight: 300 }}>
            The Core Toolkit
          </h2>
          <p className="text-sm sm:text-base text-mu-gray-400 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Five rigorous pillars — from finance and marketing to AI and product — designed to give you the hard skills and business fluency that employers and investors actually look for.
          </p>

          <div className="flex flex-col gap-0 lg:flex-row lg:items-start">
            {/* Left: Module menu cards */}
            <div className="grid h-fit shrink-0 content-start auto-rows-max self-start grid-cols-2 gap-0 sm:grid-cols-3 lg:w-[340px] lg:grid-cols-2 xl:w-[280px] xl:grid-cols-1">
              {inClassCategories.map((cat, idx) => {
                const num = String(idx + 1).padStart(2, '0');
                const accentColors = ['#39B5D7', '#F7D544', '#E38330', '#39B5D7', '#F7D544'];
                const accent = accentColors[idx];
                const isActive = selectedModule === idx;

                return (
                  <button
                    key={cat.title}
                    onClick={() => setSelectedModule(isActive ? null : idx)}
                    className="group relative text-left transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className="h-0.5 w-full transition-all duration-300"
                      style={{ backgroundColor: isActive ? accent : 'hsl(0,0%,14%)' }}
                    />
                    <div
                      className={`px-3 sm:px-4 py-2 sm:py-3 border transition-all duration-300 ${
                        isActive
                          ? 'bg-mu-dark-surface border-[hsl(0,0%,20%)]'
                          : 'bg-[hsl(0,0%,9%)] border-[hsl(0,0%,14%)] hover:bg-mu-dark-surface/60'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1 sm:mb-1.5">
                        <span
                          className={`text-lg sm:text-xl font-bold leading-none tracking-tighter font-sans transition-colors duration-300`}
                          style={{ color: isActive ? accent : 'hsl(0,0%,18%)' }}
                        >
                          {num}
                        </span>
                      </div>

                      <h3 className="text-[11px] sm:text-xs font-sans font-bold text-primary-foreground tracking-tight leading-snug mb-1">
                        {cat.title}
                      </h3>

                      <div className={`flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold uppercase tracking-wider transition-all ${
                        isActive ? '' : 'text-mu-gray-600 group-hover:text-mu-gray-400'
                      }`} style={isActive ? { color: accent } : undefined}>
                        {isActive ? 'Viewing' : 'View'}
                        <ChevronRight size={12} className={`transition-transform ${isActive ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Content panel */}
            {selectedModule !== null && (
              <div className="flex-1 min-w-0 border border-[hsl(0,0%,20%)] lg:border-l-0 border-t-0 lg:border-t bg-mu-dark-surface animate-in fade-in duration-300">
                {(() => {
                  const cat = inClassCategories[selectedModule];
                  if (!cat) return null;
                  const accentColors = ['#39B5D7', '#F7D544', '#E38330', '#39B5D7', '#F7D544'];
                  const accent = accentColors[selectedModule];
                  const num = String(selectedModule + 1).padStart(2, '0');
                  return (
                    <>
                      <div className="h-0.5 w-full" style={{ backgroundColor: accent }} />
                      <div className="p-4 sm:p-5 md:p-6">
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 inline-block"
                          style={{ color: accent }}
                        >
                          Module {num}
                        </span>

                        <h3 className="text-lg sm:text-xl md:text-2xl font-sans font-bold text-primary-foreground mb-2 tracking-tight">
                          {cat.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-mu-gray-300 leading-relaxed mb-5 sm:mb-6 max-w-xl">
                          {cat.description}
                        </p>

                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-mu-gray-400 mb-2 sm:mb-3">What You'll Learn</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 mb-4">
                          {cat.summary.map((line, lineIdx) => (
                            <div key={lineIdx} className="p-2.5 sm:p-3 border border-[hsl(0,0%,16%)] bg-[hsl(0,0%,8%)]">
                              <span
                                className="block text-xl sm:text-2xl font-display font-extrabold mb-0.5"
                                style={{ color: accent, opacity: 0.7 }}
                              >
                                {String(lineIdx + 1).padStart(2, '0')}
                              </span>
                              <span className="text-[11px] sm:text-xs text-mu-gray-300 leading-relaxed">{line}</span>
                            </div>
                          ))}
                        </div>

                        {/* Faculty */}
                        {cat.faculty && cat.faculty.length > 0 && (
                          <div className="mt-5 pt-4 border-t border-[hsl(0,0%,14%)]">
                            
                            {(['Resident', 'Visiting Faculty', 'Practitioner'] as const).map((fType) => {
                              const group = cat.faculty.filter((f) => f.type === fType).slice(0, fType === 'Visiting Faculty' ? 8 : undefined);
                              if (group.length === 0) return null;
                              const typeLabel = fType === 'Resident' ? 'Resident Faculty' : fType === 'Visiting Faculty' ? 'Visiting Faculty' : 'Practitioners';
                              const typeColor = fType === 'Resident' ? '#39B5D7' : fType === 'Visiting Faculty' ? '#F7D544' : '#E38330';
                              return (
                                <div key={fType} className="mb-5">
                                  <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: typeColor }} />
                                    <p className="text-[9px] font-bold uppercase tracking-[0.15em]" style={{ color: typeColor }}>{typeLabel}</p>
                                  </div>
                                  <div className="grid grid-cols-4 gap-x-4 gap-y-5 pb-2 max-h-[280px] overflow-hidden">
                                    {group.map((f, fIdx) => (
                                      <div key={fIdx} className="flex flex-col items-center w-full group cursor-pointer">
                                        {/* Circular photo with colored ring */}
                                        <div className="relative mb-2.5">
                                          <div className="w-[72px] h-[72px] rounded-full p-[2px] transition-all duration-300 group-hover:shadow-lg" style={{ background: `linear-gradient(135deg, ${typeColor}, ${typeColor}80)`, boxShadow: `0 0 0 0 ${typeColor}00` }}>
                                            {f.imageUrl ? (
                                              <img src={f.imageUrl} alt={f.name} className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 bg-black" />
                                            ) : (
                                              <div className="w-full h-full rounded-full flex items-center justify-center text-base font-bold bg-black" style={{ color: typeColor }}>
                                                {f.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                                              </div>
                                            )}
                                          </div>
                                          {/* Subtle glow on hover */}
                                          <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 blur-md" style={{ background: typeColor }} />
                                        </div>
                                        {/* Name & title */}
                                        <p className="text-[11px] font-semibold text-white leading-tight text-center truncate w-full">{f.name}</p>
                                        <p className="text-[9px] text-mu-gray-400 leading-snug text-center mt-0.5 line-clamp-2 w-full" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{f.designation}</p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>

        {/* ─── OUTCLASS ─── */}
        <div className="mb-12 sm:mb-16">
          <span
            className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] bg-clip-text text-transparent mb-2 inline-flex items-center gap-1.5"
            style={{
              backgroundImage:
                "linear-gradient(91deg, #39B5D7 -6.14%, #F7D544 47.02%, #E38330 99.71%)",
            }}
          >
            <MoveRight size={14} className="text-mu-gray-300" strokeWidth={1.5} />
            Outclass
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-primary-foreground leading-[0.95] max-w-3xl mb-4" style={{ fontWeight: 300 }}>
            Beyond the Classroom
          </h2>
          <p className="text-sm sm:text-base text-mu-gray-400 max-w-2xl leading-relaxed mb-8 sm:mb-10">
            Real-world challenges that push students to build, sell, create, and compete — turning theory into tangible outcomes before they graduate.
          </p>

          {/* Tabbed split-screen */}
          <div>
            {/* Tab bar */}
            <div className="flex gap-0 border border-[hsl(0,0%,15%)] mb-0 overflow-x-auto scrollbar-hide mu-scroll-hidden">
              {outClassModules.map((mod, idx) => (
                <button
                  key={mod.title}
                  onClick={() => setActiveTab(idx)}
                  className="flex-1 min-w-[70px] py-2.5 sm:py-4 px-1 sm:px-4 text-center transition-all duration-300 border-b-2 relative group"
                  style={{
                    borderBottomColor: activeTab === idx ? "hsl(47,90%,60%)" : "transparent",
                    background: activeTab === idx ? "hsl(0,0%,8%)" : "hsl(0,0%,5%)",
                  }}
                >
                  <span className="block text-[9px] sm:text-[10px] font-mono font-bold mb-0.5 transition-colors duration-300"
                    style={{ color: activeTab === idx ? "hsl(47,90%,60%)" : "hsl(0,0%,30%)" }}
                  >
                    {mod.num}
                  </span>
                  <span className="block text-[7px] xs:text-[8px] sm:text-xs font-sans font-semibold tracking-tight transition-colors duration-300 leading-tight"
                    style={{ color: activeTab === idx ? "hsl(0,0%,95%)" : "hsl(0,0%,35%)" }}
                  >
                    {mod.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Content panel */}
            <div className="rounded-lg overflow-hidden bg-[hsl(0,0%,7%)] border border-[hsl(0,0%,15%)] shadow-[0_6px_24px_rgba(0,0,0,0.5),0_2px_6px_rgba(168,85,247,0.1)]">
              <div className="flex flex-col md:flex-row md:h-[480px]">

                {/* Left: Photo / Reels */}
                <div className="relative md:w-[50%] aspect-[4/3] md:aspect-auto md:h-full overflow-hidden"
                  style={{
                    background: outClassModules[activeTab].gradient,
                    transition: "background 0.5s ease",
                  }}
                >
                  {activeGallery && (
                    <div className="absolute inset-0 z-[3]">
                      {(() => {
                        const cur = activeGallery.currentIdx;
                        const next = (cur + 1) % activeGallery.images.length;
                        const prev = (cur - 1 + activeGallery.images.length) % activeGallery.images.length;
                        const visibleSet = new Set([cur, next, prev]);
                        return activeGallery.images
                          .map((src, idx) => {
                            if (!visibleSet.has(idx)) return null;
                            return (
                              <img
                                key={`${activeTab}-${idx}`}
                                src={src}
                                alt={`${activeGallery.altPrefix} ${idx + 1}`}
                                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out will-change-[opacity]"
                                loading={idx === cur ? "eager" : "lazy"}
                                decoding="async"
                                style={{ opacity: cur === idx ? 1 : 0 }}
                              />
                            );
                          })
                          .filter(Boolean);
                      })()}
                      <div className="hidden md:flex absolute bottom-4 left-1/2 z-20 -translate-x-1/2 gap-1.5">
                        {activeGallery.images.map((_, idx) => (
                          <button
                            key={idx}
                            type="button"
                            aria-label={`Show ${activeGallery.altPrefix} image ${idx + 1}`}
                            onClick={() => activeGallery.setIdx(idx)}
                            className="rounded-full transition-all duration-300"
                            style={{
                              background: activeGallery.currentIdx === idx ? "#F7D544" : "rgba(255,255,255,0.3)",
                              width: activeGallery.currentIdx === idx ? "16px" : "6px",
                              height: "6px",
                            }}
                          />
                        ))}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none" />
                    </div>
                  )}
                  {/* Label badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white/60 bg-black/50 px-3 py-1.5 backdrop-blur-sm font-sans">
                      {outClassModules[activeTab].label}
                    </span>
                  </div>
                  {/* Right-edge shadow on gallery */}
                  <div className="hidden md:block absolute top-0 right-0 bottom-0 w-12 z-30 pointer-events-none" style={{ background: 'linear-gradient(to left, hsl(0,0%,7%), rgba(0,0,0,0.6), transparent)' }} />
                </div>

                {/* Right: Data */}
                <div className="relative md:w-[50%] p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-[hsl(0,0%,7%)] md:overflow-y-auto">
                  {/* Left-edge shadow on text panel */}
                  <div className="hidden md:block absolute top-0 left-0 bottom-0 w-12 z-30 pointer-events-none" style={{ background: 'linear-gradient(to right, hsl(0,0%,5%), rgba(0,0,0,0.6), transparent)' }} />
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-mono font-bold text-mu-gold">{outClassModules[activeTab].num}</span>
                    <div className="h-px flex-1 bg-[hsl(0,0%,15%)]" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display italic text-primary-foreground leading-[0.9] mb-3">
                    {outClassModules[activeTab].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary-foreground/45 leading-relaxed mb-6 max-w-md">
                    {outClassModules[activeTab].desc}
                  </p>

                  {/* Dropshipping stats */}
                  {activeTab === 0 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-3 gap-4 border-t border-[hsl(0,0%,15%)] pt-4">
                        {[
                          { value: "₹2.1Cr", label: "Revenue" },
                          { value: "55", label: "Teams" },
                          { value: "79", label: "Stores" },
                        ].map((stat) => (
                          <div key={stat.label}>
                            <span className="block text-base sm:text-lg md:text-xl font-sans font-bold text-primary-foreground tabular-nums leading-none">{stat.value}</span>
                            <span className="block text-[9px] sm:text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-1.5 font-sans font-medium">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 mt-2 border-t border-[hsl(0,0%,15%)]">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-mu-gold font-semibold font-sans mb-2 block">Student-built brands</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {[
                            { name: "Ship Happens", rev: "₹37.8L" },
                            { name: "OKAMI", rev: "₹33.8L" },
                            { name: "TheReelStore", rev: "₹19.3L" },
                            { name: "Jugnu", rev: "₹16.5L" },
                          ].map((s) => (
                            <span key={s.name} className="text-[11px] sm:text-xs text-primary-foreground/70 font-sans font-medium">
                              {s.name} <span className="text-[10px] font-mono text-mu-gold/80">{s.rev}</span>
                            </span>
                          ))}
                          <span className="text-[11px] text-primary-foreground/35 italic">+11 more</span>
                        </div>
                      </div>
                      <div className="pt-3">
                        <a href="/reports/Dropshipping-Report.pdf" target="_blank" rel="noopener noreferrer" download
                          className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F7D544] border border-[#F7D544]/30 hover:border-[#F7D544] hover:bg-[#F7D544]/10 transition-all duration-300"
                          style={{ background: "rgba(247,213,68,0.05)" }}
                        >
                          <Download size={12} /> Download Report
                        </a>
                      </div>
                    </div>
                  )}

                  {/* VIP stats */}
                  {activeTab === 1 && (
                    <div className="space-y-5">
                      <div className="grid grid-cols-3 gap-4 border-t border-[hsl(0,0%,15%)] pt-4">
                        {[
                          { value: "14+", label: "Ventures" },
                          { value: "₹75.3L", label: "Top Revenue" },
                          { value: "0→1", label: "Built From" },
                        ].map((stat) => (
                          <div key={stat.label}>
                            <span className="block text-base sm:text-lg md:text-xl font-sans font-bold text-primary-foreground tabular-nums leading-none">{stat.value}</span>
                            <span className="block text-[9px] sm:text-[10px] uppercase tracking-widest text-primary-foreground/50 mt-1.5 font-sans font-medium">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-6 mt-2 border-t border-[hsl(0,0%,15%)]">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-mu-gold font-semibold font-sans mb-2 block">Student ventures</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {["Saaha", "Monarque", "KAZE", "Mom's Mixes", "Bambaii"].map((s) => (
                            <span key={s} className="text-[11px] sm:text-xs text-primary-foreground/70 font-sans font-medium">{s}</span>
                          ))}
                          <span className="text-[11px] text-primary-foreground/35 italic">+9 more</span>
                        </div>
                      </div>
                      <div className="pt-3">
                        <a href="/reports/VIP-Booklet-2025.pdf" target="_blank" rel="noopener noreferrer" download
                          className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F7D544] border border-[#F7D544]/30 hover:border-[#F7D544] hover:bg-[#F7D544]/10 transition-all duration-300"
                          style={{ background: "rgba(247,213,68,0.05)" }}
                        >
                          <Download size={12} /> Download Booklet
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Creator Challenge stats + Watch Video */}
                  {activeTab === 2 && (
                    <div className="space-y-5">
                      <div className="border-t border-[hsl(0,0%,15%)] pt-4">
                        <p className="text-base sm:text-lg md:text-xl font-sans font-bold text-primary-foreground leading-snug max-w-sm">
                          From zero followers to <span className="text-mu-gold">creator-preneurs</span> with real influence.
                        </p>
                      </div>
                      <div className="pt-3">
                        <button
                          onClick={() => setVideoOpen(true)}
                          className="inline-flex items-center gap-2 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#F7D544] border border-[#F7D544]/30 hover:border-[#F7D544] hover:bg-[#F7D544]/10 transition-all duration-300"
                          style={{ background: "rgba(247,213,68,0.05)" }}
                        >
                          <Play size={12} /> Watch the Video
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Case Competitions */}
                  {activeTab === 3 && (
                    <div className="space-y-5">
                      <div className="border-t border-[hsl(0,0%,15%)] pt-4">
                        <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-mu-gold font-semibold font-sans mb-2 block">Competed & won at</span>
                        <div className="flex flex-wrap gap-x-4 gap-y-1">
                          {["IIM Ahmedabad", "IIM Bangalore", "IIT Bombay", "XLRI", "GIM", "NMIMS"].map((s) => (
                            <span key={s} className="text-[11px] sm:text-xs text-primary-foreground/70 font-sans font-medium">{s}</span>
                          ))}
                          <span className="text-[11px] text-primary-foreground/35 italic">+more</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CTA bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-[hsl(0,0%,15%)] pt-8">
          <div>
            <p className="text-base sm:text-lg font-sans font-semibold text-primary-foreground mb-1">
              Ready to learn by doing?
            </p>
            <p className="text-xs sm:text-sm text-mu-gray-400">
              Apply now and start building from day one.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-3">
            <Button variant="brand-dark" size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="https://mastersunion.org/pgp-tbm-curriculum#curriculum-menu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Course Roster <ChevronRight size={16} />
              </a>
            </Button>
            <Button variant="brand" size="lg" className="w-full sm:w-auto" asChild>
              <a
                href="https://mastersunion.org/pgp-tbm-applynow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apply Now <ArrowUpRight size={16} />
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* YouTube Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-3xl p-0 bg-black border-none overflow-hidden">
          <div className="aspect-video w-full">
            {videoOpen && (
              <iframe
                src="https://www.youtube.com/embed/MwZQbdCgT2M?autoplay=1"
                title="Creator Challenge Video"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CurriculumOverview;
