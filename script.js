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
        content: `Subject: Opposition to Proposed Gas Station on Lemont Road / Protect Pleasantdale Community

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

I am writing as a Lemont resident to strongly oppose the proposed gas station development at Lemont Road and 97th Street. This project poses serious risks to all of Lemont and I urge you to stop any further action that would allow this gas station to continue.

Our community has clear and pressing concerns:

Well Water Safety: The families living near the proposed site rely on well water for clean drinking water. Underground fuel tanks, runoff, and spillage from a gas station so close to homes will put drinking water at risk of contamination. Once polluted, our groundwater cannot be easily restored.

Traffic and Pedestrian Safety: A high-volume gas station at this location would bring more congestion to an already busy intersection. With the location of Argonne National Laboratory on the East side of Lemont Road and a large truck stop on the West side, this busy intersection would become inherently dangerous.

Public Health and Quality of Life: Gas stations generate added emissions, noise, and light pollution. These impacts are not minor inconveniences — they directly affect the health and well-being of the families who live nearby.

Policing and Public Safety Concerns: The proposed gas station would be located on the edge of Lemont, far from the village’s police department and central patrol routes. This distance would make it harder for officers to respond quickly to emergencies, accidents, or criminal activity. Gas stations are often associated with increased calls for service, including traffic incidents, theft, and loitering. Placing one in a location that is more difficult to police stretches resources and puts all residents, both incorporated and not, at greater risk.

Environmental Concerns: This development would sit directly across from Waterfall Glen Forest Preserve, a unique and irreplaceable natural area that is home to threatened and endangered species such as the state-threatened Blanding’s turtle and the federally endangered Hine’s emerald dragonfly. Years of restoration work and public investment have gone into protecting this preserve, and the risks of pollution, runoff, and habitat disruption from a fueling station could undermine those efforts. 

I respectfully urge the Village Board to protect the health, safety, and long-term well-being of our community by rejecting this gas station proposal. Lemont deserves development that supports families, safeguards natural resources, and strengthens our community — not projects that put these at risk.

Thank you for your time and consideration of this important issue.

Sincerely,
[Your Full Name]
[Your Contact Information]`
    },
    'mayor-email': {
        title: 'News & Media Stations Email Template',
        content: `Subject: Community Fighting Proposed Gas Station on Lemont Road / Residents Raise Environmental & Safety Concerns Over Gas Station Development

[Your Name]
[Street Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]
[Date]

I am reaching out on behalf of concerned residents of the Pleasantdale area regarding the proposed construction of a gas station on Lemont Road. We believe this issue deserves urgent attention and coverage because of its significant impact on public safety, property values, and the environment.

The Story

A developer has proposed building a large gas station at Lemont Road and 97th Street. Many residents are strongly opposed, and petitions have already gathered community support to stop the project.

You can access the petitions and other information at: https://sites.google.com/view/protectlemont

 Concerns include:

Well Water Safety: The families living near the proposed site rely on well water for clean drinking water. Underground fuel tanks, runoff, and spillage from a gas station so close to homes will put drinking water at risk of contamination. Once polluted, our groundwater cannot be easily restored.

Traffic and Pedestrian Safety: A high-volume gas station at this location would bring more congestion to an already busy intersection. With the location of Argonne National Laboratory on the East side of Lemont Road and a large truck stop on the West side, this busy intersection would become inherently dangerous.

Public Health and Quality of Life: Gas stations generate added emissions, noise, and light pollution. These impacts are not minor inconveniences — they directly affect the health and well-being of the families who live nearby.

Policing and Public Safety Concerns: The proposed gas station would be located on the edge of Lemont, far from the village’s police department and central patrol routes. This distance would make it harder for officers to respond quickly to emergencies, accidents, or criminal activity. Gas stations are often associated with increased calls for service, including traffic incidents, theft, and loitering. Placing one in a location that is more difficult to police stretches resources and puts all residents, both incorporated and not, at greater risk.

Environmental Concerns: This development would sit directly across from Waterfall Glen Forest Preserve, a unique and irreplaceable natural area that is home to threatened and endangered species such as the state-threatened Blanding’s turtle and the federally endangered Hine’s emerald dragonfly. Years of restoration work and public investment have gone into protecting this preserve, and the risks of pollution, runoff, and habitat disruption from a fueling station could undermine those efforts. 


Why This Matters to Viewers

This is not just a zoning issue — it is a story about families fighting to protect their homes, health, and safety. It represents a larger struggle between commercial development and community well-being.

What We’re Asking

We respectfully request your station’s coverage to help raise awareness and give our community a voice. Many residents are eager to speak on camera, and there are visual opportunities at the proposed site that highlight traffic and residential proximity.

Contact Information

I would be happy to connect you with residents, local leaders, or petition organizers for interviews. Please feel free to contact me at [phone/email].

Thank you for your time and consideration. We hope you will join us in shining a light on this important local issue.

Sincerely,

[Your Full Name]
[Your Contact Information]`
    },
    'opposition-letter': {
        title: 'Generic Opposition Letter',
        content: `[Your Name]
[Street Address]
[City, State, ZIP Code]
[Email Address]
[Phone Number]
[Date]

I am reaching out on behalf of concerned residents of the Pleasantdale neighborhood in unincorporated Lemont regarding the proposed construction of a gas station on Lemont Road. We believe this issue deserves urgent attention and coverage because of its significant impact on public safety, property values, and the environment.

Many residents are strongly opposed, and petitions have already gathered community support to stop the project.

You can access petitions and further details at: https://sites.google.com/view/protectlemont

Our community has clear and pressing concerns:

Well Water Safety: The families living near the proposed site rely on well water for clean drinking water. Underground fuel tanks, runoff, and spillage from a gas station so close to homes will put drinking water at risk of contamination. Once polluted, our groundwater cannot be easily restored.

Traffic and Pedestrian Safety: A high-volume gas station at this location would bring more congestion to an already busy intersection. With the location of Argonne National Laboratory on the East side of Lemont Road and a large truck stop on the West side, this busy intersection would become inherently dangerous.

Public Health and Quality of Life: Gas stations generate added emissions, noise, and light pollution. These impacts are not minor inconveniences — they directly affect the health and well-being of the families who live nearby.

Policing and Public Safety Concerns: The proposed gas station would be located on the edge of Lemont, far from the village’s police department and central patrol routes. This distance would make it harder for officers to respond quickly to emergencies, accidents, or criminal activity. Gas stations are often associated with increased calls for service, including traffic incidents, theft, and loitering. Placing one in a location that is more difficult to police stretches resources and puts all residents, both incorporated and not, at greater risk.

Environmental Concerns: This development would sit directly across from Waterfall Glen Forest Preserve, a unique and irreplaceable natural area that is home to threatened and endangered species such as the state-threatened Blanding’s turtle and the federally endangered Hine’s emerald dragonfly. Years of restoration work and public investment have gone into protecting this preserve, and the risks of pollution, runoff, and habitat disruption from a fueling station could undermine those efforts. 


Please help our community advocate against further movement towards the  constructions of the truck stop/gas station.


Thank you for your time and consideration. 

Sincerely,
[Your Full Name]
[Your Contact Information]`
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