// Navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    }
    
    // Tabs functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.querySelector(`[data-content="${targetTab}"]`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

// Template functionality
function copyTemplate() {
    const templateContent = document.getElementById('templateContent');
    if (templateContent) {
        const text = templateContent.innerText;
        navigator.clipboard.writeText(text).then(() => {
            // Show success message
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.backgroundColor = '#10b981';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        });
    }
}

// Template modal functionality for templates page
const templates = {
    'village-board-email': {
        title: 'Village Board Email Template',
        content: `Subject: Protect Pleasantdale – Opposition to Proposed Gas Station at Lemont Road and 97th Street
[Your Name]
[Your Address]
Lemont, IL [ZIP]
[Email Address]
[Date]

Village Board of Trustees
Village of Lemont
418 Main Street
Lemont, IL 60439

Dear Board Members,

I am writing as a concerned Lemont resident to respectfully but strongly urge you to reject the proposed gas station development at Lemont Road and 97th Street. This project would create long-term risks for our community, threatening public health, safety, and the environment in ways that cannot be ignored.

Key Concerns:

1. Drinking Water & Well Safety
Many families in the Pleasantdale area depend on private wells for safe drinking water. Gas stations are well-documented sources of groundwater contamination due to underground storage tank leaks, stormwater runoff, and spills at the pump. Once fuel pollutants enter the aquifer, cleanup is costly, often incomplete, and sometimes impossible. Protecting our water must be a top priority.

2. Traffic & Commuter Safety
The intersection at Lemont Road and 97th Street already experiences significant congestion, particularly with daily traffic to and from Argonne National Laboratory. Adding a high-volume fueling station — with frequent turns, delivery trucks, and additional traffic — would worsen delays, increase accident risks, and compromise safety for drivers, school buses, and pedestrians.

3. Public Health & Quality of Life
Gas stations bring continuous emissions of benzene and other harmful compounds, as well as increased noise and light pollution. These are not minor inconveniences. They represent real health and quality-of-life impacts for families living nearby, especially children and vulnerable residents.

4. Policing & Public Safety
This proposed station sits on the far edge of Lemont, away from the police department and regular patrol routes. Gas stations consistently generate higher service calls — including traffic accidents, thefts, and disturbances. Placing one in a remote location will stretch policing resources and delay response times when every second counts.

5. Environmental Impacts
The site lies directly across from Waterfall Glen Forest Preserve, one of Illinois’ most unique and biodiverse natural areas. It is home to threatened and endangered species such as the Blanding’s turtle and Hine’s emerald dragonfly. Runoff, habitat disruption, and fuel pollution from a nearby gas station could undermine decades of conservation efforts and public investment in this irreplaceable preserve.

Requested Actions:

For these reasons, I respectfully ask the Village Board to act decisively in protecting the health, safety, and future of our community by denying approval of this gas station proposal. Lemont deserves development that strengthens our neighborhoods and safeguards our natural resources — not projects that compromise them.
Thank you for your service and for considering the voices of residents who are committed to keeping Lemont a safe and healthy place to live.


Sincerely,
[Your Full Name]
[Your Contact Information]
`
    },
    'mayor-email': {
        title: 'News & Media Stations Email Template',
        content: `Subject: Local Residents Oppose Proposed Gas Station on Lemont Road – Environmental & Safety Concerns

[Your Name]
[Street Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]
[Date]


Dear [News Organization / Reporter Name],

I am reaching out on behalf of concerned residents of the Pleasantdale area regarding the proposed construction of a gas station at Lemont Road and 97th Street. This issue has generated significant community opposition and deserves attention due to its potential impact on public safety, health, property values, and the environment.


The Story:
A developer has proposed building a large gas station at this location. Many residents have voiced strong opposition, and petitions have already garnered substantial community support to stop the project. Additional details and petitions can be viewed here: https://protectpdale.com.


Community Concerns

1. Well Water Safety
Families near the proposed site rely on private wells for drinking water. Underground storage tanks, spills, and stormwater runoff from a gas station could contaminate the groundwater. Once polluted, these aquifers are extremely difficult and costly to restore.

2. Traffic & Pedestrian Safety
The intersection of Lemont Road and 97th Street is already heavily congested, particularly with commuters to Argonne National Laboratory and traffic from a nearby truck stop. Additional vehicle entries, turning movements, and fuel deliveries from a gas station would increase congestion, elevate collision risk, and threaten the safety of residents, school buses, and pedestrians.

3. Public Health & Quality of Life
Gas stations contribute emissions, noise, and light pollution. These impacts are more than nuisances—they affect the health and well-being of families, particularly children and sensitive populations.

4. Policing & Public Safety
The proposed station would be on the edge of Lemont, far from the police department’s main patrol routes. Gas stations are historically associated with higher calls for service, including traffic accidents, theft, and loitering. A remote location would stretch police resources and increase response times.

5. Environmental Concerns
The site is directly across from Waterfall Glen Forest Preserve, home to threatened and endangered species, including the state-threatened Blanding’s turtle and the federally endangered Hine’s emerald dragonfly. Runoff, pollution, and habitat disruption from the gas station could undermine decades of restoration efforts and public investment in protecting this preserve.


Why This Story Matters:
This issue is about more than zoning. It is about families working to protect their homes, water, and community, and balancing commercial development with public well-being. Coverage of this story can highlight the intersection of environmental protection, public safety, and community advocacy.


Request for Coverage:
We respectfully request your coverage to help raise awareness and give our community a voice. Many residents are available for interviews, and the site offers visual opportunities to illustrate traffic concerns and residential proximity.
For further information or to arrange interviews, please contact me directly at [phone/email].

Thank you for your time and consideration. We hope your station will help shine a light on this important local issue.


Sincerely,
[Your Full Name]
[Your Contact Information]
`
    },
    'opposition-letter': {
        title: 'Generic Opposition Letter',
        content: `[Your Name]
[Street Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]
[Date]


Dear Friends and Supporters,

I am reaching out on behalf of concerned residents of the Pleasantdale neighborhood in unincorporated Lemont regarding the proposed construction of a gas station on Lemont Road. This development poses significant risks to public safety, health, and the environment, and our community strongly opposes it.
Petitions and community support are already underway to halt this project. You can view the petitions and learn more at: https://protectpdale.com.

Key Concerns:

1. Well Water Safety
Many families near the proposed site rely on private wells for clean drinking water. Gas stations carry the risk of underground storage tank leaks, fuel spills, and contaminated runoff. Once groundwater is polluted, restoration is difficult, costly, and sometimes incomplete.

2. Traffic & Pedestrian Safety
The intersection of Lemont Road and 97th Street is already heavily congested, especially with traffic to Argonne National Laboratory and nearby commercial areas. A high-volume gas station would increase turning movements, delivery truck traffic, and congestion, creating heightened risks for drivers, pedestrians, and school buses.

3. Public Health & Quality of Life
Gas stations produce additional emissions, light, and noise. These impacts are more than minor inconveniences—they directly affect the health and well-being of families living nearby, particularly children and sensitive populations.

4. Policing & Public Safety
The proposed location is on the far edge of Lemont, away from the police department and main patrol routes. Gas stations are linked to increased service calls, including traffic accidents, theft, and loitering. A remote site would stretch local law enforcement resources and delay emergency response times.

5. Environmental Protection
The site is directly across from Waterfall Glen Forest Preserve, home to threatened and endangered species such as the Blanding’s turtle and Hine’s emerald dragonfly. Fuel spills, runoff, and habitat disruption could undermine decades of restoration work and public investment in protecting this unique preserve.

How You Can Help:
Please help our community advocate against the construction of this gas station. Your support, awareness, and voice are vital to protecting Pleasantdale’s homes, health, and environment.
Thank you for your time and consideration.

Sincerely,
[Your Full Name]
[Your Contact Information]
`
    },
    'public-comment': {
        title: 'Public Comment Speaking Points',
        content: `Public Comment Speaking Points (2-3 minutes)

Good evening. My name is [Your Name], and I'm a resident of [Your Address/Neighborhood].

I'm here tonight to speak against any commercial rezoning that would allow truck stop development on the recently annexed Lemont Road properties.

Three key points:

FIRST - SAFETY: Our residential streets cannot safely handle 24/7 heavy truck traffic. We have families, children, and elderly residents who deserve safe neighborhoods.

SECOND - ENVIRONMENT: Truck stops bring diesel emissions, noise pollution, and potential contamination risks. These properties border our residential community, not an industrial zone.

THIRD - COMMUNITY INVESTMENT: Residents have invested their life savings in homes here, trusting that residential zoning protections would be maintained. Commercial truck stops destroy property values and neighborhood character.

The August 11th annexation brought these properties under Lemont's protection. I urge you to use that authority to PROTECT residential neighborhoods, not expose them to commercial truck traffic.

I ask for your commitment tonight to reject any commercial rezoning applications for these properties.

Thank you.

[Notes for delivery:
- Speak slowly and clearly
- Make eye contact with board members
- Stay within time limit
- Thank them for their service]`
    },
    'facebook-post': {
        title: 'Facebook Post Template',
        content: `🚨 URGENT: Help Protect Our Neighborhood! 🚨

Fellow Lemont residents - we need your help! There's a proposed truck stop development that could bring 24/7 heavy truck traffic through our residential area on Lemont Road.

The Village recently annexed four properties in our neighborhood, and now there's potential for these to be rezoned from residential to commercial for truck stop development.

This would mean:
🚛 Hundreds of trucks daily through residential streets
🏠 Decreased property values for all of us
🌿 Air and noise pollution affecting our families
⚠️ Safety concerns with heavy traffic near schools and homes

WHAT YOU CAN DO:
✅ Sign the petitions (link in comments)
✅ Contact village board members
✅ Attend the next village meeting
✅ Share this post to spread awareness

Our community's voice is powerful when we stand together! Every signature and every contact makes a difference.

Tag your neighbors and share this post. Let's protect the residential character of our neighborhood! 

https://www.change.org/p/stop-gas-n-wash-lemont-road

#LemontIL #CommunityAction #ProtectOurNeighborhood #ResidentialZoning

[Add meeting information in comments]`
    },
    'nextdoor-post': {
        title: 'Nextdoor Community Message',
        content: `Important Update for Our Neighborhood - Truck Stop Development Concerns

Hi neighbors,

I wanted to share some important information about a development that could significantly impact our area.

The Village of Lemont recently annexed four unincorporated properties on Lemont Road (in our Pleasantdale neighborhood area). There's now potential for these properties to be rezoned from residential to commercial for truck stop development.

As many of you know, this would bring:
• 24/7 heavy truck traffic through our residential streets
• Noise and air pollution concerns
• Potential impact on our property values
• Safety concerns for our families and children

COMMUNITY ACTION NEEDED:
• We're organizing to oppose any commercial rezoning
• Petitions are available to sign (I can share details)
• Village board meetings where we can voice concerns
• Template letters available for contacting officials

This affects all of us who've invested in this neighborhood. Whether you're concerned about safety, property values, or just maintaining the peaceful character of our area, your voice matters.

Would love to connect with neighbors who want to stay informed or help with community coordination efforts.

Please feel free to reach out if you have questions or want to get involved. Together, we can make sure our concerns are heard!

- [Your Name]
[Your contact information]

P.S. - If you know neighbors who aren't on Nextdoor, please share this information with them too!`
    }
};

function showTemplate(templateId) {
    const template = templates[templateId];
    if (template) {
        const modal = document.getElementById('templateModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalTemplate = document.getElementById('modalTemplate');
        
        modalTitle.textContent = template.title;
        modalTemplate.textContent = template.content;
        modal.classList.add('active');
    }
}

function closeModal() {
    const modal = document.getElementById('templateModal');
    modal.classList.remove('active');
}

function copyModalTemplate() {
    const modalTemplate = document.getElementById('modalTemplate');
    const text = modalTemplate.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        button.style.backgroundColor = '#10b981';
        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.textContent = originalText;
        }, 2000);
    });
}

function copyTemplate(templateId) {
    const template = templates[templateId];
    if (template) {
        navigator.clipboard.writeText(template.content).then(() => {
            const button = event.target;
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            button.style.backgroundColor = '#10b981';
            setTimeout(() => {
                button.textContent = originalText;
                button.style.backgroundColor = '';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }
}

function downloadTemplate(templateId) {
    // This would typically trigger a PDF download
    // For now, we'll just show the template
    showTemplate(templateId);
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('templateModal');
    if (modal && e.target === modal) {
        closeModal();
    }
});

// Close modal with escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Add animation classes when elements come into view
function observeElements() {
    const elements = document.querySelectorAll('.animate-fade-in');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        },
        { threshold: 0.1 }
    );

    elements.forEach(element => {
        element.style.animationPlayState = 'paused';
        observer.observe(element);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', observeElements);
