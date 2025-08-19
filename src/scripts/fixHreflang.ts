import * as fs from 'fs';
import * as path from 'path';

const toolsDir = path.join(process.cwd(), 'src/app/[locale]/tools');

// Pages that need to be fixed with their metadata info
const pagesToFix = [
  {
    name: 'ai-assistant',
    title: 'AI Assistant | NeuroGen Lab - Intelligent Automation',
    description: 'Transform your business with AI-powered assistant technology. Intelligent automation, smart workflows, and enhanced productivity solutions.',
    image: 'og-ai-assistant.jpg',
    alt: 'NeuroGen Lab AI Assistant'
  },
  {
    name: 'livechat',
    title: 'LiveChat Integration | NeuroGen Lab - Real-time Support',
    description: 'Enhance your customer support with AI-powered LiveChat integration. Real-time communication, automated responses, and improved customer satisfaction.',
    image: 'og-livechat.jpg',
    alt: 'NeuroGen Lab LiveChat Integration'
  },
  {
    name: 'whatsapp',
    title: 'WhatsApp Integration | NeuroGen Lab - Business Messaging',
    description: 'Transform your business communication with AI-powered WhatsApp integration. Automated messaging, customer engagement, and streamlined support.',
    image: 'og-whatsapp.jpg',
    alt: 'NeuroGen Lab WhatsApp Integration'
  },
  {
    name: 'instagram',
    title: 'Instagram Integration | NeuroGen Lab - Social Media Automation',
    description: 'Automate your Instagram presence with AI-powered integration. Enhanced engagement, automated responses, and social media optimization.',
    image: 'og-instagram.jpg',
    alt: 'NeuroGen Lab Instagram Integration'
  },
  {
    name: 'tables',
    title: 'Tables Integration | NeuroGen Lab - Data Management',
    description: 'Streamline your data management with AI-powered Tables integration. Automated workflows, intelligent organization, and enhanced productivity.',
    image: 'og-table.jpg',
    alt: 'NeuroGen Lab Tables Integration'
  },
  {
    name: 'keepincrm',
    title: 'KeepinCRM Integration | NeuroGen Lab - CRM Automation',
    description: 'Optimize your CRM with AI-powered KeepinCRM integration. Automated customer management, intelligent insights, and enhanced sales processes.',
    image: 'og-keepincrm.jpg',
    alt: 'NeuroGen Lab KeepinCRM Integration'
  },
  {
    name: 'salesforce',
    title: 'Salesforce Integration | NeuroGen Lab - CRM Enhancement',
    description: 'Enhance your Salesforce with AI-powered integration. Automated workflows, intelligent insights, and improved customer relationship management.',
    image: 'og-salesforce.jpg',
    alt: 'NeuroGen Lab Salesforce Integration'
  },
  {
    name: 'microsoft-teams',
    title: 'Microsoft Teams Integration | NeuroGen Lab - Team Collaboration',
    description: 'Transform your team collaboration with AI-powered Microsoft Teams integration. Automated workflows, intelligent communication, and enhanced productivity.',
    image: 'og-microsoft-teams.jpg',
    alt: 'NeuroGen Lab Microsoft Teams Integration'
  },
  {
    name: 'slack',
    title: 'Slack Integration | NeuroGen Lab - Team Communication',
    description: 'Enhance your team communication with AI-powered Slack integration. Automated workflows, intelligent notifications, and improved collaboration.',
    image: 'og-slack.jpg',
    alt: 'NeuroGen Lab Slack Integration'
  },
  {
    name: 'ai-chat-bot',
    title: 'AI Chat Bot | NeuroGen Lab - Intelligent Conversations',
    description: 'Transform your customer interactions with AI-powered chat bot technology. Intelligent conversations, automated support, and enhanced customer experience.',
    image: 'og-ai-chat-bot.jpg',
    alt: 'NeuroGen Lab AI Chat Bot'
  },
  {
    name: 'email',
    title: 'Email Integration | NeuroGen Lab - Communication Automation',
    description: 'Automate your email communication with AI-powered integration. Smart responses, intelligent filtering, and enhanced email management.',
    image: 'og-email.jpg',
    alt: 'NeuroGen Lab Email Integration'
  },
  {
    name: 'best-search',
    title: 'Best Search | NeuroGen Lab - Intelligent Search',
    description: 'Enhance your search capabilities with AI-powered technology. Intelligent results, smart filtering, and improved user experience.',
    image: 'og-best-search.jpg',
    alt: 'NeuroGen Lab Best Search'
  },
  {
    name: 'ai-voice-bot',
    title: 'AI Voice Bot | NeuroGen Lab - Voice Automation',
    description: 'Transform your voice interactions with AI-powered voice bot technology. Intelligent conversations, automated responses, and enhanced user experience.',
    image: 'og-ai-voice-bot.jpg',
    alt: 'NeuroGen Lab AI Voice Bot'
  },
  {
    name: 'counseling',
    title: 'AI Counseling | NeuroGen Lab - Intelligent Support',
    description: 'Provide intelligent counseling support with AI-powered technology. Automated guidance, smart responses, and enhanced user assistance.',
    image: 'og-counseling.jpg',
    alt: 'NeuroGen Lab AI Counseling'
  },
  {
    name: 'discord',
    title: 'Discord Integration | NeuroGen Lab - Community Management',
    description: 'Enhance your Discord community with AI-powered integration. Automated moderation, intelligent responses, and improved community engagement.',
    image: 'og-discord.jpg',
    alt: 'NeuroGen Lab Discord Integration'
  },
  {
    name: 'zapier',
    title: 'Zapier Integration | NeuroGen Lab - Workflow Automation',
    description: 'Automate your workflows with AI-powered Zapier integration. Intelligent automation, smart connections, and enhanced productivity.',
    image: 'og-zapier.jpg',
    alt: 'NeuroGen Lab Zapier Integration'
  }
];

function updateLayoutFile(toolName: string, metadata: any) {
  const layoutPath = path.join(toolsDir, toolName, 'layout.tsx');
  
  if (!fs.existsSync(layoutPath)) {
    console.log(`⚠️  Layout file not found for ${toolName}`);
    return;
  }

  let content = fs.readFileSync(layoutPath, 'utf8');
  
  // Check if file already uses generatePageMetadata
  if (content.includes('generatePageMetadata')) {
    console.log(`✅ ${toolName} already uses generatePageMetadata`);
    return;
  }

  // Check if file has custom metadata
  if (!content.includes('export const metadata: Metadata = {')) {
    console.log(`⚠️  ${toolName} doesn't have custom metadata to replace`);
    return;
  }

  const baseUrl = 'https://neurogenlab.de';
  
  // Create the new metadata using generatePageMetadata
  const newMetadata = `export const metadata = generatePageMetadata(
  'tools/${toolName}',
  '${metadata.title}',
  '${metadata.description}',
  \`\${baseUrl}/assets/images/${metadata.image}\`,
  '${metadata.alt}'
);`;

  // Add import if not present
  if (!content.includes('generatePageMetadata')) {
    content = content.replace(
      'import { Metadata } from "next";',
      'import { Metadata } from "next";\nimport { generatePageMetadata } from \'../../../../utils/metadata\';'
    );
  }

  // Replace the metadata block
  const metadataRegex = /export const metadata: Metadata = \{[\s\S]*?\};/;
  content = content.replace(metadataRegex, newMetadata);

  fs.writeFileSync(layoutPath, content);
  console.log(`✅ Updated ${toolName}`);
}

function main() {
  console.log('🔧 Fixing hreflang implementation for tool pages...\n');
  
  for (const page of pagesToFix) {
    updateLayoutFile(page.name, page);
  }
  
  console.log('\n✅ Hreflang fix completed!');
}

main();
