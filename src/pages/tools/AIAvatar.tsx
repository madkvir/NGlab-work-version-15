import { useState } from 'react';
import { Bot, ChevronDown } from 'lucide-react';
import ToolPageTemplate from '../../components/ToolPageTemplate';

const AIAvatar = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const articleContent = (
    <article className="prose prose-lg prose-emerald mx-auto text-white">
      {/* Intro Section */}
      <h1 className="text-4xl font-bold text-white mb-8">AI Avatar for Business – Personalize and Automate with NeuroGen Lab</h1>
      
      <h2 className="text-2xl text-white mb-4">Unlock the Potential of AI Avatars</h2>
      <p className="text-gray-300 mb-4">At NeuroGen Lab, we provide advanced AI avatars designed to:</p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span>
          <span>Represent your brand professionally</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span>
          <span>Boost engagement with your audience</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="text-emerald-400">✓</span>
          <span>Streamline video content creation</span>
        </li>
      </ul>

      {/* Features Section */}
      <h2 className="text-3xl font-bold text-white mt-12 mb-6">What Makes Our AI Avatar Unique?</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            <span className="mr-2">⚡</span>
            Real-Time Customization
          </h3>
          <p className="text-gray-300">Adjust appearance, voice, and tone to align perfectly with your brand identity and target audience needs.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            <span className="mr-2">🌐</span>
            Multi-Lingual Voice Support
          </h3>
          <p className="text-gray-300">Speak to a global audience with AI avatars supporting over 25 languages and professional voiceovers.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            <span className="mr-2">🎥</span>
            High-Quality Video Content
          </h3>
          <p className="text-gray-300">Create stunning 4K videos with realistic avatars that build trust and drive business growth.</p>
        </div>
      </div>

      {/* Top 5 Reasons Section */}
      <h2 className="text-3xl font-bold text-emerald-400 mt-12 mb-6">5 Top Reasons Why Your Business Needs an AI Avatar</h2>
      <div className="space-y-4">
        {/* Section 1 */}
        <div className="border-b border-gray-800">
          <button 
            onClick={() => toggleSection(0)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              1. Personalized Customer Engagement
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(0) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {openSections.includes(0) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                AI avatars interact with customers in a human-like manner, answering queries, presenting products, and delivering personalized support, all without human intervention.
              </p>
            </div>
          )}
        </div>

        {/* Section 2 */}
        <div className="border-b border-gray-800">
          <button 
            onClick={() => toggleSection(1)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              2. Cost-Effective Content Creation
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(1) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {openSections.includes(1) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                Eliminate expensive video production. AI avatars allow you to create professional videos quickly and affordably for marketing, training, and social media.
              </p>
            </div>
          )}
        </div>

        {/* Section 3 */}
        <div className="border-b border-gray-800">
          <button 
            onClick={() => toggleSection(2)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              3. Global Reach with Multi-Language Support
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(2) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {openSections.includes(2) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                AI avatars can speak multiple languages, helping you connect with international audiences and grow your global brand presence.
              </p>
            </div>
          )}
        </div>

        {/* Section 4 */}
        <div className="border-b border-gray-800">
          <button 
            onClick={() => toggleSection(3)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              4. Scalability and 24/7 Availability
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(3) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {openSections.includes(3) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                AI avatars operate 24/7, handling inquiries, generating leads, and assisting customers anytime, boosting operational efficiency.
              </p>
            </div>
          )}
        </div>

        {/* Section 5 */}
        <div className="border-b border-gray-800">
          <button 
            onClick={() => toggleSection(4)}
            className="w-full text-left py-4 flex justify-between items-center"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              5. Enhanced Brand Identity
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-gray-400 transition-transform ${
                openSections.includes(4) ? 'transform rotate-180' : ''
              }`}
            />
          </button>
          
          {openSections.includes(4) && (
            <div className="pb-6 animate-slideDown">
              <p className="text-gray-300 mb-4">
                A consistent, professional avatar reinforces your brand message and strengthens relationships with clients through interactive and personalized communication.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Conclusion Section */}
      <div className="mt-12 pt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Conclusion</h3>
        <p className="text-gray-300">
          Transform your digital presence with NeuroGen Lab's AI Avatar solution. Create engaging, personalized interactions that build trust and drive business growth while maintaining consistent brand representation across all channels.
        </p>
      </div>
    </article>
  );

  return (
    <ToolPageTemplate
      title="AI Avatar"
      description="Create lifelike digital avatars powered by AI for immersive customer interactions and personalized brand representation."
      icon={<Bot className="w-8 h-8 text-emerald-400" />}
      features={[
        "Photorealistic 3D Avatar Generation",
        "Real-time Facial Expression Mapping",
        "Custom Voice Synthesis",
        "Multi-language Support",
        "Gesture Recognition and Animation",
        "Brand Personality Customization",
        "Interactive Response System"
      ]}
      benefits={[
        "Enhanced Brand Representation",
        "Personalized Customer Interactions",
        "Consistent Brand Voice",
        "Increased Customer Engagement",
        "Scalable Digital Presence",
        "Memorable User Experience",
        "24/7 Visual Brand Ambassador"
      ]}
      integrations={[
        "Website Integration",
        "Virtual Reality Platforms",
        "Video Conferencing Tools",
        "Social Media Platforms",
        "E-learning Systems",
        "Customer Service Platforms"
      ]}
      metaTitle="AI Avatar | NeuroGen Lab - Digital Brand Representative Solution"
      metaDescription="Transform your digital presence with AI-powered avatars. Create engaging, personalized interactions with photorealistic digital representatives for your brand."
      metaKeywords="AI avatar, digital representation, virtual assistant, brand ambassador"
      ogTitle="AI Avatar - Digital Brand Representative | NeuroGen Lab"
      ogDescription="Create lifelike digital avatars for immersive customer interactions"
      ogUrl="https://neurogenlab.de/tools/ai-avatar"
      ogImage=""
      twitterTitle="AI Avatar - Digital Brand Representative"
      twitterDescription="Transform your brand with AI-powered digital avatars"
      twitterImage=""
      author="NeuroGen Lab"
      canonical="https://neurogenlab.de/tools/ai-avatar"
      favicon=""
      articleContent={articleContent}
    />
  );
};

export default AIAvatar;