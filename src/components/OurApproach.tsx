
import { Settings } from "lucide-react";

const ApproachCard = ({ title, description, icon, color }: { title: string, description: string, icon: React.ReactNode, color: string }) => {
  return (
    <div className={`border border-white/20 bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-premium group hover:shadow-xl transition-all duration-300 ${color}`}>
      <div className="h-14 w-14 rounded-lg flex items-center justify-center mb-5 bg-white/10 backdrop-blur-md">
        {icon}
      </div>
      <h3 className="font-medium text-xl mb-3 text-white group-hover:text-white/90 transition-colors">{title}</h3>
      <p className="text-white/80 group-hover:text-white/90 transition-colors">{description}</p>
    </div>
  );
};

const OurApproach = () => {
  return (
    <section className="section-padding relative bg-gradient-to-br from-hallmark-dark-blue to-hallmark-dark-green overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full dot-pattern opacity-5"></div>
      <div className="absolute top-40 left-0 w-64 h-64 bg-hallmark-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-72 h-72 bg-hallmark-light-green/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium mb-4">
            <Settings size={16} />
            <span>Our Approach</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white">
            How We Deliver Excellence
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our proven methodology ensures consistent results and exceptional outcomes 
            for businesses across industries and regions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ApproachCard
            title="Consultative Partnership"
            description="We take time to understand your unique challenges, goals, and culture before proposing tailored solutions."
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 14H14V21H21V14Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 13.88C7.13964 14.1003 6.37705 14.6007 5.83243 15.3023C5.28781 16.0039 4.99224 16.8668 4.99224 17.755C4.99224 18.6432 5.28781 19.5061 5.83243 20.2077C6.37705 20.9093 7.13964 21.4097 8 21.63" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            color="bg-gradient-to-br from-hallmark-blue/40 to-hallmark-blue/20"
          />
          <ApproachCard
            title="Technology + Expertise"
            description="We combine cutting-edge technology with deep industry expertise to deliver solutions that solve real business problems."
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            color="bg-gradient-to-br from-hallmark-green/40 to-hallmark-green/20"
          />
          <ApproachCard
            title="Continuous Innovation"
            description="We constantly evolve our solutions to stay ahead of changing market dynamics, regulations, and technologies."
            icon={<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.66347 17H14.3364" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 6V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12.7 2.51L13.3 2.1C13.5332 1.9332 13.7936 1.81675 14.0693 1.76381C14.3449 1.71086 14.6292 1.72305 14.8993 1.79944C15.1693 1.87582 15.4183 2.01418 15.6285 2.20394C15.8387 2.39369 16.0044 2.62911 16.112 2.892L16.818 4.588C16.9229 4.84513 17.0891 5.07469 17.3019 5.25352C17.5147 5.43235 17.7675 5.55481 18.037 5.61L19.883 5.97C20.1657 6.02764 20.4259 6.15579 20.6397 6.34284C20.8534 6.52989 21.0132 6.76768 21.1033 7.03476C21.1934 7.30183 21.2104 7.58857 21.1526 7.86435C21.0948 8.14013 20.9642 8.39475 20.775 8.602L19.484 10.058C19.2974 10.2679 19.1587 10.5158 19.0787 10.785C18.9986 11.0542 18.9792 11.338 19.022 11.616L19.29 13.483C19.3326 13.7656 19.2983 14.0539 19.1904 14.3191C19.0825 14.5843 18.9051 14.8173 18.6783 14.9931C18.4515 15.1689 18.1831 15.2813 17.9007 15.3185C17.6183 15.3557 17.3317 15.3164 17.07 15.205L15.304 14.512C15.0563 14.4072 14.79 14.3555 14.5213 14.36C14.2525 14.3646 13.988 14.4254 13.744 14.538L11.998 15.325C11.7456 15.4372 11.4664 15.4808 11.1905 15.4516C10.9147 15.4223 10.6519 15.3212 10.4269 15.1586C10.202 14.9959 10.0228 14.7774 9.90766 14.5233C9.79256 14.2692 9.74591 13.9881 9.77198 13.709L9.97598 11.823C10.0043 11.5419 9.97195 11.2588 9.88121 10.9925C9.79047 10.7262 9.64347 10.4837 9.45 10.283L8.07001 8.944C7.87051 8.74971 7.72261 8.51051 7.64069 8.24837C7.55877 7.98623 7.54538 7.70861 7.60169 7.44051C7.65801 7.17241 7.78232 6.92402 7.96224 6.71779C8.14217 6.51155 8.37184 6.3543 8.628 6.263L10.445 5.703C10.7064 5.60871 10.9423 5.46464 11.1347 5.27997C11.327 5.09529 11.4709 4.87442 11.555 4.632L12.174 2.908C12.2642 2.64719 12.4122 2.41325 12.6066 2.22527C12.801 2.03729 13.0357 1.90135 13.29 1.83C13.5444 1.75866 13.8116 1.75449 14.0684 1.81789C14.3252 1.88128 14.5635 2.01033 14.763 2.192L12.7 2.51Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 22C13.1046 22 14 21.1046 14 20C14 18.8954 13.1046 18 12 18C10.8954 18 10 18.8954 10 20C10 21.1046 10.8954 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
            color="bg-gradient-to-br from-hallmark-dark-blue/60 to-hallmark-dark-blue/40"
          />
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-display font-semibold mb-4 text-white">Our Process</h3>
            <ol className="space-y-6 relative before:content-[''] before:absolute before:left-3.5 before:top-8 before:h-[calc(100%-50px)] before:w-px before:bg-white/20">
              {[
                "Discovery & Analysis",
                "Solution Design",
                "Implementation",
                "Training & Adoption",
                "Ongoing Optimization"
              ].map((step, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mr-4 z-10">
                    <span className="text-xs font-medium text-white">{idx + 1}</span>
                  </div>
                  <span className="text-white/90">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="col-span-1 lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
            <h3 className="text-2xl font-display font-semibold mb-6 text-white">Our Differentiators</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Proactive Compliance",
                  description: "We stay ahead of regulatory changes to ensure your business remains compliant across all jurisdictions."
                },
                {
                  title: "Data-Driven Insights",
                  description: "Our solutions provide actionable analytics to inform strategic workforce decisions and identify opportunities."
                },
                {
                  title: "Seamless Integration",
                  description: "Our platforms connect effortlessly with your existing technology stack for unified data and processes."
                },
                {
                  title: "Scalable Growth",
                  description: "Our solutions grow with your business, adapting to your changing needs without disruption."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-5">
                  <h4 className="font-medium text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-white/80">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
