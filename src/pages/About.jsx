import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { skills, experiences } from '../constants';
import CTA from '../components/CTA';
import code360Logo from '../assets/images/coding_n.png';
import microsoftLogo from '../assets/images/microsoft-logo.png';
import ibmLogo from '../assets/images/ibm-logo.png';


const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello! I am <span className='blue-gradient_text font-semibold drop-shadow'>Shivam</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Software Engineer from India, specializing in
          python development and emerging AI technologies to build Industry level projects.
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-font rounded-x1 flex justify-center items-center'>
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className='py-16'>
  <h3 className='subhead-text'>Achievements</h3>

  <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700'>

    {/* LeetCode Achievement */}
    <div className='bg-white shadow-md rounded-xl p-6 border border-slate-200'>
      <div className='flex items-center gap-3'>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-7 h-7 object-contain"
        />
        <h4 className='text-lg font-semibold text-yellow-500'>LeetCode</h4>
      </div>
      <ul className='mt-4 space-y-2 text-sm'>
        <li><strong>Rating:</strong> 1731</li>
        <li><strong>Total Problems Solved:</strong> 150+</li>
        <li><strong>Top: </strong> 10.88% </li>
        <li><strong>Contribution: </strong> Python & C++ </li>
        <li>
          <a 
            href="https://leetcode.com/u/Shivam_Shresth/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1.5 px-4 rounded-lg transition duration-300"
          >
            View LeetCode Profile
          </a>
        </li>
      </ul>
    </div>

    {/* Code360 Achievement */}
<div className='bg-white shadow-md rounded-xl p-6 border border-slate-200'>
  <div className='flex items-center gap-3'>
    <img
      src={code360Logo}
      alt="Coding Ninjas"
      className="w-7 h-7 object-contain"
    />
    <h4 className='text-lg font-semibold text-orange-500'>Coding Ninjas (Code360)</h4>
  </div>
  <ul className='mt-4 space-y-2 text-sm'>
    <li><strong>Rating:</strong> 2459</li>
    <li><strong>Top 7%: </strong> Master</li>
    <li><strong>Total Problems Solved:</strong> 340+</li>
    <li><strong>Top Contest Rank:</strong> 75</li>
    <li>
      <a 
        href="https://www.naukri.com/code360/profile/7cbdf2b5-886a-4086-a75e-3a2369d2a572"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-1.5 px-4 rounded-lg transition duration-300"
      >
        View Code360 Profile
      </a>
    </li>
  </ul>
</div>



  </div>
</div>


<div className='py-16'>
  <h3 className='subhead-text'>Certifications</h3>

  <div className='mt-8 space-y-6'>

    {/* Microsoft Certification */}
    <div className='relative group bg-white border border-slate-200 shadow-md rounded-xl p-6 overflow-hidden transition duration-300 hover:shadow-lg'>

      {/* Background logo */}
      <img
        src={microsoftLogo}
        alt="Microsoft"
        className='absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150 pointer-events-none'
      />

      {/* Content */}
      <div className='relative z-10 flex items-center justify-between'>
        <p className='text-sm md:text-base text-slate-700 font-medium'>
          Microsoft Certified: Azure Fundamentals
        </p>
        <a
          href="https://learn.microsoft.com/en-gb/users/shivamshresth-0472/credentials/e4a483749ecb0cbe"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-lg transition duration-300"
        >
          View Certificate
        </a>
      </div>
    </div>

    {/* IBM Certification */}
    <div className='relative group bg-white border border-slate-200 shadow-md rounded-xl p-6 overflow-hidden transition duration-300 hover:shadow-lg'>

      {/* Background logo */}
      <img
        src={ibmLogo}
        alt="IBM"
        className='absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-40 transition-opacity duration-500 scale-150 pointer-events-none'
      />

      {/* Content */}
      <div className='relative z-10 flex items-center justify-between'>
        <p className='text-sm md:text-base text-slate-700 font-medium'>
          Machine Learning with Python
        </p>
        <a
          href="https://courses.cognitiveclass.ai/certificates/b4f3ea56c8d945f3995c1cb981c993ea"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-lg transition duration-300"
        >
          View Certificate
        </a>
      </div>
    </div>

    {/* Other Certificates Section */}
<div className='py-16'>
  <h3 className='subhead-text'>Other Certificates</h3>

  <div className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
    {/* Example Certificate 1 */}
    <div className='bg-white border border-slate-200 shadow-md rounded-xl p-6 flex flex-col justify-between'>
      <p className='text-sm md:text-base text-slate-700 font-medium'>
        Agile Fundamentals: Including Scrum & Kanban
      </p>
      <a
        href="https://www.udemy.com/certificate/UC-ea3c43b0-b394-43f2-8c53-6ffe514b8838/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition duration-300"
      >
        View Certificate
      </a>
    </div>

    {/* Example Certificate 2 */}
    <div className='bg-white border border-slate-200 shadow-md rounded-xl p-6 flex flex-col justify-between'>
      <p className='text-sm md:text-base text-slate-700 font-medium'>
        Artificial Intelligence A-Z™: Learn How to Build an AI
      </p>
      <a
        href="https://www.udemy.com/certificate/UC-b473cab5-2a39-492b-a317-2a1cd89f8ce7/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition duration-300"
      >
        View Certificate
      </a>
    </div>

    {/* Add more certificates below like above */}
    <div className='bg-white border border-slate-200 shadow-md rounded-xl p-6 flex flex-col justify-between'>
      <p className='text-sm md:text-base text-slate-700 font-medium'>
        Master Java Web Services and REST API with Spring Boot
      </p>
      <a
        href="https://www.udemy.com/certificate/UC-c1d4e1c5-b184-4dd9-9ad2-50af265064a6/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start bg-yellow-300 hover:bg-yellow-500 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition duration-300"
      >
        View Certificate
      </a>
    </div>
    <div className='bg-white border border-slate-200 shadow-md rounded-xl p-6 flex flex-col justify-between'>
      <p className='text-sm md:text-base text-slate-700 font-medium'>
        Data Structures A-Z : Data Structures + Algorithms Bootcamp
      </p>
      <a
        href="https://www.udemy.com/certificate/UC-7d9bb749-c55a-4b5a-9ead-804e3644bdd6/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start bg-blue-400 hover:bg-blue-600 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition duration-300"
      >
        View Certificate
      </a>
    </div>
    <div className='bg-white border border-slate-200 shadow-md rounded-xl p-6 flex flex-col justify-between'>
      <p className='text-sm md:text-base text-slate-700 font-medium'>
        SQL for Beginners: Learn SQL using MySQL and Database Design
      </p>
      <a
        href="https://www.udemy.com/certificate/UC-68141d1d-36ed-4c99-bf05-2eeccdb4b681/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 self-start bg-purple-400 hover:bg-purple-700 text-white text-sm font-semibold py-1.5 px-4 rounded-lg transition duration-300"
      >
        View Certificate
      </a>
    </div>
    
  </div>
</div>

    
  </div>
</div>


      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
          <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I have worked with smart people and acquired good grasp of their
          experience and added up to my understanding as well
          </p>
          </div>

          <div className='mt-12 flex'>
            <VerticalTimeline>
              {experiences.map((experience) => (
                <VerticalTimelineElement
                  key={experience.company_name}
                  date={experience.date}
                  icon={<div className='flex justify-center items-center w-full h-full'>
                    <img 
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>}
                  iconStyle={{ background: experience.iconBg }}
                  contentStyle={{
                    borderBottom: '8px',
                    borderStyle: 'solid',
                    borderBottomColor: experience.iconBg,

                  }}
                >
                  <div>
                    <h3 className='text-black text-xl font-poppins font-semibold'>
                      {experience.title}
                    </h3>
                    <p className='text-black-500 font-medium font-base' style={{margin:0}}>
                      {experience.company_name}
                    </p>
                  </div>

                  <ul className='my-5 list-disc ml-5 space-y-2'>
                    {experience.points.map((point, index) => (
                      <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-small'>
                        {point}
                      </li>
                    ))}
                  </ul>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
          </div>
      </div>


      <hr className='border-slate-200' />



      <CTA />
    </section>
  )
}

export default About
