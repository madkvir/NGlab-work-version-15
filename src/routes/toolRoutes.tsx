import { Route } from 'react-router-dom';
import AIChatBot from '../pages/tools/AIChatBot';
import AIVoiceBot from '../pages/tools/AIVoiceBot';
import AIAvatar from '../pages/tools/AIAvatar';
import AIAssistant from '../pages/tools/AIAssistant';
import CustomDevelopment from '../pages/tools/CustomDevelopment';
import Counseling from '../pages/tools/Counseling';
import FacebookMessenger from '../pages/tools/FacebookMessenger';
import Instagram from '../pages/tools/Instagram';
import WhatsApp from '../pages/tools/WhatsApp';
import Discord from '../pages/tools/Discord';
import Jira from '../pages/tools/Jira';
import Zapier from '../pages/tools/Zapier';
import Tables from '../pages/tools/Tables';
import AntiSpam from '../pages/tools/AntiSpam';
import BestSearch from '../pages/tools/BestSearch';
import Email from '../pages/tools/Email';
import Slack from '../pages/tools/Slack';
import LiveChat from '../pages/tools/LiveChat';
import Intercom from '../pages/tools/Intercom';
import Salesforce from '../pages/tools/Salesforce';
import HubSpot from '../pages/tools/HubSpot';
import MicrosoftTeams from '../pages/tools/MicrosoftTeams';

export const toolRoutes = (
  <>
    <Route path="/tools/ai-chat-bot" element={<AIChatBot />} />
    <Route path="/tools/ai-voice-bot" element={<AIVoiceBot />} />
    <Route path="/tools/ai-avatar" element={<AIAvatar />} />
    <Route path="/tools/ai-assistant" element={<AIAssistant />} />
    <Route path="/tools/custom-development" element={<CustomDevelopment />} />
    <Route path="/tools/counseling" element={<Counseling />} />
    <Route path="/tools/facebook-messenger" element={<FacebookMessenger />} />
    <Route path="/tools/instagram" element={<Instagram />} />
    <Route path="/tools/whatsapp" element={<WhatsApp />} />
    <Route path="/tools/discord" element={<Discord />} />
    <Route path="/tools/jira" element={<Jira />} />
    <Route path="/tools/zapier" element={<Zapier />} />
    <Route path="/tools/tables" element={<Tables />} />
    <Route path="/tools/anti-spam" element={<AntiSpam />} />
    <Route path="/tools/best-search" element={<BestSearch />} />
    <Route path="/tools/email" element={<Email />} />
    <Route path="/tools/slack" element={<Slack />} />
    <Route path="/tools/livechat" element={<LiveChat />} />
    <Route path="/tools/intercom" element={<Intercom />} />
    <Route path="/tools/salesforce" element={<Salesforce />} />
    <Route path="/tools/hubspot" element={<HubSpot />} />
    <Route path="/tools/microsoft-teams" element={<MicrosoftTeams />} />
  </>
);